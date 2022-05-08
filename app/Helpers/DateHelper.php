<?php

function getLastTwelveEndOfMonthDatesBasedOnSelectedDate($selected_date=null): array
{
    $today = $selected_date ?? \Carbon\Carbon::now();
    for ($i = 1; $i < 13; $i++){
        $year[] =  \Carbon\Carbon::parse($today)->subMonth($i)->endOfMonth()->format('Y-m-d');
    }

    return $year;
}

function getLast6MonthsEndOfWeekDatesBasedOnSelectedDate($selected_date): array
{
    $today = $selected_date ?? \Carbon\Carbon::now();
    for ($i = 1; $i < 25; $i++){
        $week[] =  \Carbon\Carbon::parse($selected_date)->subWeek($i)->endOfWeek()->format('Y-m-d');
    }

    return $week;
}

function getLast30DaysDatesBasedOnSelectedDate($selected_date=null): array
{
    $today = $selected_date ?? \Carbon\Carbon::now();
    for ($i = 0; $i < 30; $i++){
        $day[] = \Carbon\Carbon::parse($today)->subWeekDay($i)->format('Y-m-d');
    }

    return $day;
}

function extractDateForPriceNotReceivedYet($datesReceivedData, $datesPendingData): array
{
    return array_values(array_diff($datesPendingData, $datesReceivedData));
}



