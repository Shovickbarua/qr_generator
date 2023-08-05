<?php

use App\Http\Controllers\FrontController;
use App\Http\Controllers\GoogleAuthController;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\QrCodeGeneratorController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

// Route::get('/', [QrCodeGeneratorController::class, 'index'])->name('qr-code');

Route::get('/', function () {
    // if (auth()->check()) {
    //     return redirect('/account');
    // } else {
        return view('welcome');
    // }
});
Route::get('/welcome', function(){
    return view('welcome');
});

Route::get('/welhome', function(){
    return view('welhome');
});


Route::get('/auth/google', [GoogleAuthController::class,'redirect'])->name('google-auth');
Route::get('/auth/google/call-back',[GoogleAuthController::class, 'callbackGoogle']);
Auth::routes();

// Route::get('/account', [App\Http\Controllers\HomeController::class, 'index'])->name('home');


Route::group(['middleware' => 'auth', 'prefix' => 'account'], function () {
    Route::get('/', [HomeController::class, 'index'])->name("account");
    Route::get('/{any}', [HomeController::class, 'index'])->where('any','.*');
});

Route::get('/', [FrontController::class, 'index']);
Route::get('/{any}', [FrontController::class, 'index'])->where('any','.*');

