<?php

namespace App\Console\Commands;

use App\Models\CurrencyReport;
use App\Service\CurrencyReportPeriodPriceUpdate;
use Illuminate\Console\Command;

class CurrencyDataFetchCommand extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'currency:data';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Fetches latest currency data from the api';

    /**
     * Execute the console command.
     *
     * @return int
     */
    public function handle()
    {
        $reports = CurrencyReport::with('currency_report_data')->get();
        if ($reports) {
            foreach ($reports as $report) {
                $currency_report_process = new CurrencyReportPeriodPriceUpdate($report);
                $currency_report_process->handle();
            }
        }
    }


}
