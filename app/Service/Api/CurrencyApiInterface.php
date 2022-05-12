<?php

namespace App\Service\Api;

interface CurrencyApiInterface
{
    public function getLatestPrice($symbols, $base);
    public function getPriceByDate($date, $symbols, $base);
    public function getPriceForASeriesOfDates($start_date, $end_date, $symbols, $base);

}
