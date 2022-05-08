<?php

namespace Tests\Unit;

use PHPUnit\Framework\TestCase;

class DatesTest extends TestCase
{
    /** @test */
    public function get_end_month_dates_for_a_period_of_12_months_for_a_selected_date()
    {
        $result_set = [
              "2022-03-31",
              "2022-02-28",
              "2022-01-31",
              "2021-12-31",
              "2021-11-30",
              "2021-10-31",
              "2021-09-30",
              "2021-08-31",
              "2021-07-31",
              "2021-06-30",
              "2021-05-31",
              "2021-04-30",
        ];

        $monthly = getLastTwelveEndOfMonthDatesBasedOnSelectedDate('2022-04-13');

        $this->assertTrue(sizeof($monthly) === 12, true);
        foreach ($result_set as $result){
            $this->assertTrue(in_array($result, $monthly));
        }
    }

    /** @test */
    public function get_end_week_dates_for_a_period_of_6_months_for_a_selected_date()
    {
        $result_set = [
            "2022-04-10",
          "2022-04-03",
          "2022-03-27",
          "2022-03-20",
          "2022-03-13",
          "2022-03-06",
          "2022-02-27",
          "2022-02-20",
          "2022-02-13",
          "2022-02-06",
          "2022-01-30",
          "2022-01-23",
          "2022-01-16",
          "2022-01-09",
          "2022-01-02",
          "2021-12-26",
          "2021-12-19",
          "2021-12-12",
          "2021-12-05",
          "2021-11-28",
          "2021-11-21",
          "2021-11-14",
          "2021-11-07",
          "2021-10-31",
        ];

        $weekly = getLast6MonthsEndOfWeekDatesBasedOnSelectedDate('2022-04-13');

        $this->assertTrue(sizeof($weekly) === 24, true);
        foreach ($result_set as $result){
            $this->assertTrue(in_array($result, $weekly));
        }
    }

    /** @test */
    public function get_daily_dates_for_a_period_of_30_days_for_a_selected_date()
    {
        $result_set = [
            "2022-04-13",
          "2022-04-12",
          "2022-04-11",
          "2022-04-08",
          "2022-04-07",
          "2022-04-06",
          "2022-04-05",
          "2022-04-04",
          "2022-04-01",
          "2022-03-31",
          "2022-03-30",
          "2022-03-29",
          "2022-03-28",
          "2022-03-25",
          "2022-03-24",
          "2022-03-23",
          "2022-03-22",
          "2022-03-21",
          "2022-03-18",
          "2022-03-17",
          "2022-03-16",
          "2022-03-15",
          "2022-03-14",
          "2022-03-11",
          "2022-03-10",
          "2022-03-09",
          "2022-03-08",
          "2022-03-07",
          "2022-03-04",
          "2022-03-03",
        ];

        $daily = getLast30DaysDatesBasedOnSelectedDate('2022-04-13');

        $this->assertTrue(sizeof($daily) === 30, true);
        foreach ($result_set as $result){
            $this->assertTrue(in_array($result, $daily));
        }
    }

    /** @test */
    public function get_dates_that_are_missing_from_two_arrays()
    {
        $result_set = [
            "2022-04-13",
            "2022-04-12",
            "2022-04-11",
            "2022-04-08",
            "2022-04-07"
            ];

        $result_set2 = [
            "2022-04-13",
            "2022-04-12",
            "2022-04-11",
            "2022-04-08",
            "2022-04-07",
            "2021-09-14",
        ];

        $missing_dates = extractDateForPriceNotReceivedYet($result_set, $result_set2);

        $this->assertTrue(sizeof($missing_dates) === 1);
        $this->assertEquals($missing_dates[0], "2021-09-14");
    }
}

