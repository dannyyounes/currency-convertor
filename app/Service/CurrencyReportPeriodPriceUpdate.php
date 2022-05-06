<?php

namespace App\Service;

use App\Service\Api\ExchangeRatesDataApi;

class CurrencyReportPeriodPriceUpdate
{
    const LOOKUP = [
        12 => 'year',
        6 => 'week',
        1 => 'day'
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
        $this->dataReceivedDates = $this->report->currency_report_data()->pluck('price_at')->toArray();
        $method_name = self::LOOKUP[$this->report->period];
        $this->pending = $method_name();
        $this->datesToProcess = extractDateForPriceNotReceivedYet($this->dataReceivedDates, $this->pending);
        $this->process();
    }

    protected function process()
    {
        if (sizeof($this->datesToProcess) > 0) {
            foreach ($this->datesToProcess as $date) {
                $data = ExchangeRatesDataApi::getPriceByDate($date, $this->report->secondary);
                $this->report->storePriceData($this->report->secondary, $date, $data);
            }
        }

    }
}
