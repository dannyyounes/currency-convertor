<?php

namespace Database\Factories;

use App\Models\User;
use Carbon\Carbon;
use Illuminate\Database\Eloquent\Factories\Factory;

class IncomeFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'user_id' => User::factory()->create()->id,
            'amount' => 150000,
            'company' => 'Younes Technologies Pty Ltd',
            'interval' => 'Monthly',
            'date_of_month' => 15,
            'date_paid' => null
        ];
    }
}
