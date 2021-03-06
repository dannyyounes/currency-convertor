<?php

namespace Tests\Unit;

use App\Service\Api\ExchangeRatesDataApi;
use Tests\TestCase;

class APITest extends TestCase
{
    public function setUp():void
    {
        parent::setUp();

        $currency_data_app = "App\\Service\\Api\\" . config('currency.app');
        $this->api = forward_static_call([$currency_data_app,'init']);
    }

    /** @test */
    public function can_retrieve_currency_conversion_price_for_a_single_currency()
    {
        $currency = 'AUD';
        $base = 'USD';

        $conversion = $this->api->getLatestPrice($currency, $base);

        $this->assertTrue($conversion->success, true);
        $this->assertTrue($conversion->base === $base, true);
        $this->assertNotNull($conversion->rates->{$currency});
        $this->assertIsNumeric($conversion->rates->{$currency});
    }

    /** @test */
    public function can_retrieve_currency_conversion_price_for_multiple_currencies()
    {
        $currency = 'AUD,EUR';
        $base = 'USD';

        $conversion = $this->api->getLatestPrice($currency, $base);

        $currencies = explode(",", $currency);

        $this->assertTrue($conversion->success, true);

        foreach ($currencies as $symbol) {
            $this->assertNotNull($conversion->rates->{$symbol});
            $this->assertIsNumeric($conversion->rates->{$symbol});
        }
    }

    /** @test */
    public function can_retrieve_currency_price_for_a_certain_date()
    {
        $currency = 'AUD';
        $base = 'USD';
        $date = '2020-05-16';

        $conversion = $this->api->getPriceByDate($date, $currency, $base);

        $this->assertTrue($conversion->success, true);
        $this->assertNotNull($conversion->rates->{$currency});
        $this->assertIsNumeric($conversion->rates->{$currency});
        $this->assertTrue($conversion->date === $date, true);

    }

    /** @test */
    public function can_retrieve_currency_price_for_a_series_of_dates()
    {
        $monthly = getLastTwelveEndOfMonthDatesBasedOnSelectedDate();

        $start_date = end($monthly);
        $end_date = reset($monthly);
        $currency = 'AUD';
        $base = 'USD';

        $conversion = $this->api->getPriceForASeriesOfDates($start_date, $end_date, $currency, $base);

        $this->assertTrue($conversion->success, true);
        $this->assertTrue($conversion->start_date === $start_date, true);
        $this->assertTrue($conversion->end_date === $end_date, true);
        foreach ($monthly as $month){
            $this->assertIsNumeric($conversion->rates->{$month}->{$currency}, true);
        }
    }
}
