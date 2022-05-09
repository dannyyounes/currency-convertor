<?php

namespace Tests\Feature;

use App\Events\CurrencyDataFetched;
use App\Jobs\CurrencyReportJob;
use App\Models\User;
use Database\Factories\UserFactory;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Illuminate\Support\Facades\Event;
use Illuminate\Support\Facades\Queue;
use Tests\TestCase;
use Inertia\Testing\AssertableInertia as Assert;

class ReportTest extends TestCase
{
    use RefreshDatabase;

    /** @test */
    public function user_can_store_report_request_and_job_is_pushed()
    {
        Queue::fake();
        Event::fake();

        $user = User::factory()->create();

        $this->actingAs($user);

        $attributes = [
            'currencies_selected' => "AUD",
            'timeframe' => 12
        ];

        $this->post('/report/store/'.$user->id, $attributes);

        $this->assertDatabaseHas('currency_reports', [
            'user_id' => $user->id,
            'base' => "USD",
            'symbol' => "AUD",
            'period' => 12,
            'status' => 'pending',
        ]);


        Queue::assertPushed(CurrencyReportJob::class);
        Event::assertDispatched(CurrencyDataFetched::class);

    }
}
