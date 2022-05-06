<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class CurrencyReport extends Model
{
    use HasFactory;

    protected $fillable = [
        'base',
        'secondary',
        'period',
        'user_id'
    ];

    public function user(): \Illuminate\Database\Eloquent\Relations\BelongsTo
    {
        return $this->belongsTo(User::class, 'user_id');
    }

    public function currency_report_data(): \Illuminate\Database\Eloquent\Relations\HasMany
    {
        return $this->hasMany(CurrencyReportData::class);
    }

    public function storePriceData($symbol, $date, $data)
    {
        if ($data->success === true){
            $this->currency_report_data()->firstOrCreate([
                'price_at' => $date,
                'price' => $data->rates->{$symbol}
            ]);
        }
    }
}
