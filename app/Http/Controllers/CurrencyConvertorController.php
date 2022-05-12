<?php

namespace App\Http\Controllers;

use App\Service\Api\FixerApi;
use App\Service\Api\ExchangeRatesDataApi;
use Illuminate\Http\Request;
use Inertia\Inertia;

class CurrencyConvertorController extends Controller
{
    public function index()
    {
        $reports = auth()->user()->currency_report()->get();

        return Inertia::render('Dashboard', ['reports' => $reports]);
    }

    public function show(Request $request)
    {
        $symbols = implode(",", $request->data['currencies_selected']);
        $currency_data_app = "App\\Service\\Api\\" . env('CURRENCY_DATA_APP');
        $api = forward_static_call([$currency_data_app,'init']);
        $convert = $api->getLatestPrice($symbols);

        return response()->json($convert);
    }
}
