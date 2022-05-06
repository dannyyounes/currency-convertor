<?php

namespace App\Http\Controllers;

use App\Models\Currency;
use App\Service\Api\ExchangeRatesDataApi;
use Illuminate\Http\Request;
use Inertia\Inertia;

class CurrencyConvertorController extends Controller
{
    public function index()
    {
        return Inertia::render('Dashboard');
    }

    public function show(Request $request)
    {
        //todo validate request
        $symbols = implode(",", $request->currencies_selected);
        $convert = ExchangeRatesDataApi::getLatestPrice($symbols);

        return Inertia::render('Dashboard', ['convert' => $convert, 'currencies_selected' => $request->currencies_selected]);
    }
}
