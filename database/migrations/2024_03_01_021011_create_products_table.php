<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('products', function (Blueprint $table) {
            $table->id()->autoIncrement()->unique();
            $table->string('uid')->unique();
            $table->integer('app_id');
            $table->integer('group_id');
            $table->string('client_code');
            $table->string('barcode');
            $table->string('SKU');
            $table->string('name');
            $table->integer('sell_price');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('products');
    }
};
