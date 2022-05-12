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
        $this->pending = $this->getLookupMethod()();
        $this->datesToProcess = extractDateForPriceNotReceivedYet($this->dataReceivedDates, $this->pending);

        if ($this->process()) {
            $this->updateStatus('completed');
        }

    }

    protected function process()
    {
        if (sizeof($this->datesToProcess) > 0) {
            $data = $this->getData();

            if (!$data->success) {
                return false;
            }

            $this->storeData($data);
        }

        return true;
    }

    protected function getLookupMethod()
    {
        return self::LOOKUP[$this->report->period];
    }

    protected function storeData($data)
    {
        foreach ($data->rates as $date => $rate){
            if (in_array($date, $this->datesToProcess)) {
                $this->report->storePriceData($date, $rate->{$this->report->symbol});
            }
        }
    }

    protected function getData()
    {
        $start_date = end($this->datesToProcess);
        $end_date = reset($this->datesToProcess);

        $currency_data_app = "App\\Service\\Api\\" . config('currency.app');
        $api = forward_static_call([$currency_data_app,'init']);
        return $api->getPriceForASeriesOfDates($start_date, $end_date, $this->report->symbol, $this->report->base);
    }

    protected function updateStatus($status)
    {
        $this->report->status = $status;
        $this->report->save();
    }
}
