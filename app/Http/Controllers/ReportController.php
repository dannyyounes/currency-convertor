<?php

namespace App\Http\Controllers;

use App\Jobs\CurrencyReportJob;
use App\Models\CurrencyReport;
use App\Models\User;
use Illuminate\Http\Request;
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

        //write to currency_report table
        $currency_report = $user->currency_report()->firstOrCreate(
            ['base' => 'USD', 'secondary' => $symbol, 'period' => $timeframe],
            ['user_id' => $user->id]
        );

        $currency_report->load('currency_report_data');
        CurrencyReportJob::dispatch($currency_report);

        return Inertia::render('Dashboard', ['convert' => '', 'currencies_selected' => $request->currencies]);

    }

    public function show($id)
    {
        //check the user can view this record

        $report = CurrencyReport::with('currency_report_data')->where('id', $id)->first();

        return Inertia::render('CurrencyConvertor/ReportDisplay', ['report' => $report]);
    }
}
