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
        Schema::create('qr_codes', function (Blueprint $table) {
            $table->id();
            $table->integer('user_id');
            $table->string('name')->nullable();
            $table->string('type');
            $table->text('qr_info')->nullable();
            $table->string('qr_style')->nullable();
            $table->string('eye_style')->nullable();
            $table->string('bg_color')->nullable();
            $table->string('eye_color')->nullable();
            $table->string('qr_code_color')->nullable();
            $table->string('qr_image_url');
            $table->string('logo')->nullable();
            $table->string('uuid')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('qr_codes');
    }
};
