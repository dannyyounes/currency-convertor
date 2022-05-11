<?php

namespace Database\Seeders;

use App\Models\CurrencyReport;
use App\Models\CurrencyReportData;
use App\Models\User;
use Illuminate\Database\Seeder;
use Faker\Generator as Faker;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run(Faker $faker)
    {
         User::factory(1)->create();

         CurrencyReport::factory(1)->create([
             'user_id' => User::latest()->first()->id
         ]);

         $months = getLastTwelveEndOfMonthDatesBasedOnSelectedDate();

         foreach ($months as $month) {
             CurrencyReportData::factory(1)->create([
                 'price_at' => $month,
                 'price' => $faker->randomFloat(5),
                 'currency_report_id' => CurrencyReport::latest()->first()->id
             ]);
         }
    }
}
