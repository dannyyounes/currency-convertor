<?php

function year()
{
    $today = \Carbon\Carbon::now();
    for ($i = 1; $i < 13; $i++){

        $year[] =  \Carbon\Carbon::parse($today)->subMonth($i)->endOfMonth()->format('Y-m-d');
    }

    return $year;
}

function week()
{
    for ($i = 1; $i < 25; $i++){
        $week[] =  \Carbon\Carbon::now()->subWeek($i)->endOfWeek()->format('Y-m-d');
    }

    return $week;
}

function day()
{
    for ($i = 0; $i < 30; $i++){
        $day[] = \Carbon\Carbon::now()->subWeekDay($i)->format('Y-m-d');
    }

    return $day;
}

function extractDateForPriceNotReceivedYet($datesReceivedData, $datesPendingData): array
{
    return array_values(array_diff($datesPendingData, $datesReceivedData));
}



