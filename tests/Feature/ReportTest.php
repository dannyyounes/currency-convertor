<?php

namespace Tests\Feature;

use App\Events\CurrencyDataFetched;
use App\Jobs\CurrencyReportJob;
use App\Models\CurrencyReport;
use App\Models\User;
use Database\Factories\UserFactory;
use Illuminate\Foundation\Testing\DatabaseMigrations;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Illuminate\Support\Facades\Event;
use Illuminate\Support\Facades\Queue;
use Tests\TestCase;
use Inertia\Testing\AssertableInertia as Assert;

class ReportTest extends TestCase
{
    use RefreshDatabase, DatabaseMigrations;

    /** @test */
    public function user_can_store_report_request_and_job_is_pushed()
    {
        Queue::fake();
       // Event::fake();

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
        //Event::assertDispatched(CurrencyDataFetched::class);

    }

    /** @test */
    public function can_delete_currency_report_data()
    {
        $this->seed('DatabaseSeeder');
        $user = User::latest()->first();

        $this->actingAs($user);

        $currency_report = CurrencyReport::with('currency_report_data')->first();

        $response = $this->delete('report/'.$currency_report->id);

        $this->assertDatabaseMissing('currency_reports', [
            'base' => 'usd',
            'symbol' => 'aud',
            'period' => 12,
            'status' => 'pending',
            'user_id' => '1'
        ]);

        $this->assertDatabaseMissing('currency_report_data', [
            'currency_report_id' => 1,
        ]);
    }

    /** @test */
    public function user_cannot_delete_another_users_currency_report_data()
    {
        $this->seed('DatabaseSeeder');
        User::factory(5)->create([

        ]);

        $user = User::inRandomOrder()->whereNot('id', 1)->first();

        $this->actingAs($user);



        $currency_report = CurrencyReport::with('currency_report_data')->first();

        $this->delete('report/'.$currency_report->id)
            ->assertStatus(403);
    }

}
