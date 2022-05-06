<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('currency_report_data', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('currency_report_id')->index();
            $table->date('price_at');
            $table->string('price', '10');
            $table->timestamps();

            $table->foreign('currency_report_id')->references('id')->on('currency_report')->cascadeOnDelete();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('currency_report_data');
    }
};
