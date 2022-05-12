<?php

namespace App\Service\Api;

use App\Models\CurrencyReport;

class ExchangeRatesDataApi extends CurrencyApi implements CurrencyApiInterface
{
    public static function init(): ExchangeRatesDataApi
    {
        return new ExchangeRatesDataApi();
    }

    public function getLatestPrice($symbols, $base="USD")
    {
        $url = "https://api.apilayer.com/exchangerates_data/latest?symbols={$symbols}&base={$base}";

        return $this->execute($url);
    }

    public function getPriceByDate($date, $symbols, $base="USD")
    {
        $url = "https://api.apilayer.com/exchangerates_data/{$date}?symbols={$symbols}&base={$base}";

        return $this->execute($url);
    }

    public function getPriceForASeriesOfDates($start_date, $end_date, $symbols, $base="USD")
    {
        $url = "https://api.apilayer.com/exchangerates_data/timeseries?start_date={$start_date}&end_date={$end_date}&symbols={$symbols}&base={$base}";

        return $this->execute($url);
    }
}
