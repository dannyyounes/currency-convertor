<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class CurrencyReport extends Model
{
    use HasFactory;

    protected $fillable = [
        'base',
        'symbol',
        'period',
        'user_id'
    ];

    public function user(): \Illuminate\Database\Eloquent\Relations\BelongsTo
    {
        return $this->belongsTo(User::class, 'user_id');
    }

    public function currency_report_data(): \Illuminate\Database\Eloquent\Relations\HasMany
    {
        return $this->hasMany(CurrencyReportData::class)->orderBy('price_at', 'asc');
    }

    public function storePriceData($date, $price)
    {
        $this->currency_report_data()->firstOrCreate([
            'price_at' => $date,
            'price' => $price
        ]);
    }
}
