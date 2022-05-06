<?php

namespace App\Service\Api;

interface CurrencyApi
{
    public static function getLatestPrice($symbols, $base);
    public static function getPriceByDate($date, $symbols, $base);
}
