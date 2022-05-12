<?php

namespace App\Service\Api;

class FixerApi extends CurrencyApi implements CurrencyApiInterface
{
    public static function init(): FixerApi
    {
        return new FixerApi();
    }

    public function getLatestPrice($symbols, $base="USD")
    {
        $url = "https://api.apilayer.com/fixer/latest?symbols={$symbols}&base={$base}";

        return $this->execute($url);
    }

    public function getPriceByDate($date, $symbols, $base="USD")
    {
        $url = "https://api.apilayer.com/fixer/{$date}?symbols={$symbols}&base={$base}";

        return $this->execute($url);
    }

    public function getPriceForASeriesOfDates($start_date, $end_date, $symbols, $base="USD")
    {
        $url = "https://api.apilayer.com/fixer/timeseries?start_date={$start_date}&end_date={$end_date}&symbols={$symbols}&base={$base}";

        return $this->execute($url);
    }
}
