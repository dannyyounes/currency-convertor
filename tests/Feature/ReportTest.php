<?php

namespace Tests\Feature;

use App\Jobs\CurrencyReportJob;
use App\Models\User;
use Database\Factories\UserFactory;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;

class ReportTest extends TestCase
{
    use RefreshDatabase;

    /** @test */
    public function job_can_be_sent()
    {
        \Queue::fake();

        $user = User::factory()->create();

        $this->actingAs($user);

        $currency_report = $user->currency_report()->firstOrCreate(
            ['base' => 'USD', 'symbol' => "AUD", 'period' => 12]
        );

        $currency_report->load('currency_report_data');
        CurrencyReportJob::dispatch($currency_report)->delay(10);

        \Queue::assert(CurrencyReportJob::class);
    }
}
