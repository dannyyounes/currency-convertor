<?php

namespace App\Service\Api;

use App\Models\CurrencyReport;

class ExchangeRatesDataApi implements CurrencyApi
{

    public static function getLatestPrice($symbols, $base="usd")
    {
        $curl = curl_init();

        curl_setopt_array($curl, array(
            CURLOPT_URL => "https://api.apilayer.com/exchangerates_data/latest?symbols={$symbols}&base={$base}",
            CURLOPT_HTTPHEADER => array(
                "Content-Type: text/plain",
                "apikey: EGxxxTJ2x1SIN4O98RAp9VzVR4VLj0Iv"
            ),
            CURLOPT_RETURNTRANSFER => true,
            CURLOPT_ENCODING => "",
            CURLOPT_MAXREDIRS => 10,
            CURLOPT_TIMEOUT => 0,
            CURLOPT_FOLLOWLOCATION => true,
            CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
            CURLOPT_CUSTOMREQUEST => "GET"
        ));

        $response = curl_exec($curl);

        curl_close($curl);

        return json_decode($response);
    }

    public static function getPriceByDate($date, $symbols, $base="usd")
    {
        $curl = curl_init();

        curl_setopt_array($curl, array(
            CURLOPT_URL => "https://api.apilayer.com/exchangerates_data/{$date}?symbols={$symbols}&base={$base}",
            CURLOPT_HTTPHEADER => array(
                "Content-Type: text/plain",
                "apikey: EGxxxTJ2x1SIN4O98RAp9VzVR4VLj0Iv"
            ),
            CURLOPT_RETURNTRANSFER => true,
            CURLOPT_ENCODING => "",
            CURLOPT_MAXREDIRS => 10,
            CURLOPT_TIMEOUT => 0,
            CURLOPT_FOLLOWLOCATION => true,
            CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
            CURLOPT_CUSTOMREQUEST => "GET"
        ));

        $response = curl_exec($curl);
        curl_close($curl);

        return json_decode($response);
    }

    public function storePriceData($currency_report, $date, $price)
    {

    }
}
