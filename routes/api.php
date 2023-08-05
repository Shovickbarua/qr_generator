<?php

use App\Http\Controllers\ContactController;
use App\Http\Controllers\FrontController;
use App\Http\Controllers\QrCodeController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/



Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
Route::group(['middleware' => ['auth:sanctum']], function () {
    Route::post('/qrcodes', [QrCodeController::class, 'store'])->name('generateQr');
    Route::get('/qrcodes', [QrCodeController::class, 'index']);
    Route::get('/qredit/{id}', [QrCodeController::class, 'edit']);
    Route::get('/qrupdate/{id}', [QrCodeController::class, 'update']);
});

Route::get('/get-qrcode/{code}', [FrontController::class, 'showqr']);
Route::post('/contact', [ContactController::class, "sendEmail"]);