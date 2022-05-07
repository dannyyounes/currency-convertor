<?php

namespace App\Jobs;

use App\Events\CurrencyDataFetched;
use App\Models\CurrencyReport;
use App\Service\Api\ExchangeRatesDataApi;
use App\Service\CurrencyReportPeriodPriceUpdate;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldBeUnique;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Queue\SerializesModels;

class CurrencyReportJob implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;

    protected CurrencyReport $report;

    /**
     * Create a new job instance.
     *
     * @return void
     */
    public function __construct(CurrencyReport $currencyReport)
    {
        $this->report = $currencyReport;
    }

    /**
     * Execute the job.
     *
     * @return void
     */
    public function handle()
    {
        if ($this->report) {
            $currency_report_process = new CurrencyReportPeriodPriceUpdate($this->report);
            $currency_report_process->handle();
        }

        $this->report->status = "completed";
        $this->report->save();

        CurrencyDataFetched::dispatch($this->report);
    }
}
