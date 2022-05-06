<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class CurrencyReportData extends Model
{
    use HasFactory;

    protected $fillable = [
        'price_at',
        'price',
        'report_id'
    ];

    public function report()
    {
        return $this->belongsTo(CurrencyReport::class);
    }
}
