<?php

namespace App\Http\Controllers;

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
        //todo validate request
        $symbols = implode(",", $request->data['currencies_selected']);
        $convert = ExchangeRatesDataApi::getLatestPrice($symbols);

        return response()->json($convert);
    }
}
