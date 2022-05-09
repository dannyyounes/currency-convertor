<?php

namespace App\Service\Api;

use App\Models\CurrencyReport;

class ExchangeRatesDataApi implements CurrencyApi
{
    public static function getLatestPrice($symbols, $base="usd")
    {
        $url = "https://api.apilayer.com/exchangerates_data/latest?symbols={$symbols}&base={$base}";

        return self::getData($url);
    }

    public static function getPriceByDate($date, $symbols, $base="usd")
    {
        $url = "https://api.apilayer.com/exchangerates_data/{$date}?symbols={$symbols}&base={$base}";

        return self::getData($url);
    }

    public static function getPriceForASeriesOfDates($start_date, $end_date, $symbols, $base="usd")
    {
        $url = "https://api.apilayer.com/exchangerates_data/timeseries?start_date={$start_date}&end_date={$end_date}&symbols={$symbols}&base={$base}";

        return self::getData($url);
    }

    public static function getData($url)
    {
        $curl = curl_init();

        curl_setopt_array($curl, array(
            CURLOPT_URL => $url,
            CURLOPT_HTTPHEADER => array(
                "Content-Type: text/plain",
                "apikey:".env('DATA_EXCHANGE_API_KEY')
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


}
