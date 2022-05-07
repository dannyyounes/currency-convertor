<?php

namespace App\Http\Controllers;

use App\Jobs\CurrencyReportJob;
use App\Models\CurrencyReport;
use App\Models\User;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;

class ReportController extends Controller
{
    public function index()
    {
        return Inertia::render('Report');
    }

    public function store(Request $request, User $user)
    {
        $symbol = $request->currencies_selected;
        $timeframe = $request->timeframe;

        $currency_report = $user->currency_report()->firstOrCreate(
            ['base' => 'USD', 'symbol' => $symbol, 'period' => $timeframe]
        );

        $currency_report->load('currency_report_data');
        CurrencyReportJob::dispatch($currency_report)->delay(10);

        return Redirect::route('dashboard');

    }

    public function show(Request $request, CurrencyReport $currencyReport)
    {
        abort_if($currencyReport->user_id !== Auth::id(), 404);

        $currencyReport->load('currency_report_data');


        if ($request->show === "chart"){
            $price_data = $currencyReport->currency_report_data->pluck('price', 'price_at');

            foreach ($price_data as $date => $price) {
                $chart_data[] = [
                    'date' => Carbon::parse($date)->format('M y'),
                    'price' => $price
                ];
            }

            $max_price = $currencyReport->currency_report_data->max('price');
            $min_price = $currencyReport->currency_report_data->min('price');

            return Inertia::render('CurrencyConvertor/ReportChart', [
                'chart_data' => $chart_data,
                'min_price' => $min_price,
                'max_price' => $max_price,
                'report' => $currencyReport
            ]);
        }

        return Inertia::render('CurrencyConvertor/ReportDisplay', ['report' => $currencyReport]);
    }
}
