<?php

namespace App\Service;

use App\Service\Api\ExchangeRatesDataApi;

class CurrencyReportPeriodPriceUpdate
{
    const LOOKUP = [
        12 => 'getLastTwelveEndOfMonthDatesBasedOnSelectedDate',
        6 => 'getLast6MonthsEndOfWeekDatesBasedOnSelectedDate',
        1 => 'getLast30DaysDatesBasedOnSelectedDate'
    ];

    public $pending;
    public $dataReceivedDates;
    public $report;
    public $datesToProcess;

    public function __construct($report)
    {
        $this->report = $report;
    }

    public function handle()
    {
        $this->updateStatus('pending');
        $this->dataReceivedDates = $this->report->currency_report_data()->pluck('price_at')->toArray();
        $method_name = self::LOOKUP[$this->report->period];
        $this->pending = $method_name();
        $this->datesToProcess = extractDateForPriceNotReceivedYet($this->dataReceivedDates, $this->pending);
        if ($this->process()) {
            $this->updateStatus('completed');
        }

    }

    protected function process()
    {
        if (sizeof($this->datesToProcess) > 0) {
            foreach ($this->datesToProcess as $date) {
                $data = ExchangeRatesDataApi::getPriceByDate($date, $this->report->symbol);

                dd($data);
                if (!$data->success) {
                    return false;
                }

                $this->report->storePriceData($this->report->symbol, $date, $data);
            }
        }

        return true;
    }

    protected function updateStatus($status)
    {
        $this->report->status = $status;
        $this->report->save();
    }
}
