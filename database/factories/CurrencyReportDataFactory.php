<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\CurrencyReportData>
 */
class CurrencyReportDataFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition()
    {
        return [
            'price_at' => '2020-07-07',
            'price' => 0.789087,
            'currency_report_id' => '1'
        ];
    }
}
