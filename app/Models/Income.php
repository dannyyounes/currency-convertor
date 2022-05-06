<?php

namespace App\Models;

use App\Traits\Uuid;
use Carbon\Carbon;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Income extends Model
{
    use HasFactory, Uuid;
    public $incrementing = false;
    protected $keyType = 'uuid';

    protected $guarded = [];

    public function user(): \Illuminate\Database\Eloquent\Relations\BelongsTo
    {
        return $this->belongsTo(User::class);
    }

    //Accessors
    public function setAmountAttribute($value)
    {
        $this->attributes['amount'] = $value * 100;
    }

    public function setDatePaidAttribute($value)
    {
        if (!empty($value)) {
            $this->attributes['date_paid'] = Carbon::parse($value)->toDateString();
        }
    }

    //Mutators
    public function getAmountAttribute($value)
    {
        return $value / 100;
    }
}
