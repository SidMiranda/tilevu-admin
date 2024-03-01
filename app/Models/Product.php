<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    use HasFactory;

    protected $fillable = [
        'uid',
        'app_id',
        'group_id',
        'client_code',
        'barcode',
        'SKU',
        'name',
        'sell_price'
    ];
}

