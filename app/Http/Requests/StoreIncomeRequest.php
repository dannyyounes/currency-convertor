<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreIncomeRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'amount' => [
                'required',
                'numeric',
                'max:9223372036854775807'
            ],
            'company' => [
                'required'
            ],
            'interval' => [
                'required'
            ],
            'day_of_week' => [
                'required_if:interval,Weekly,Fortnightly'
            ],
            'date_of_month' => [
                'required_if:interval,Monthly'
            ],
            'date_paid' => [
                'required_if:interval,One-Off'
            ]
        ];
    }
}
