<?php

use App\Http\Controllers\Auth\ForgotPasswordController;
use App\Http\Controllers\Auth\LoginController;
use App\Http\Controllers\Auth\PasswordResetController;
use App\Http\Controllers\Auth\RegisterController;
use App\Http\Controllers\CategoryController;
use App\Http\Controllers\CurrencyConvertorController;
use App\Http\Controllers\IncomeController;
use App\Http\Controllers\ReportController;
use App\Http\Controllers\RoleController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('login', [LoginController::class, 'create'])->name('login');
Route::post('login', [LoginController::class, 'store']);
Route::post('logout', [LoginController::class, 'destroy'])->middleware('auth');

Route::get('register', [RegisterController::class, 'create'])->name('register')->middleware('guest');
Route::post('register', [RegisterController::class, 'store'])->middleware('guest');

Route::get('forgot/password', [ForgotPasswordController::class, 'create'])->name('forgot.password')->middleware('guest');
Route::post('forgot/password', [ForgotPasswordController::class, 'store'])->name('forgot.password')->middleware('guest');
Route::get('password/reset/{token}', [PasswordResetController::class, 'edit'])->name('password.reset')->middleware('guest');
Route::post('password/reset', [PasswordResetController::class, 'update'])->name('password.reset')->middleware('guest');

Route::middleware('auth')->group(function () {
    Route::get('/', [CurrencyConvertorController::class, 'index'])->name('dashboard');
    Route::post('/convert', [CurrencyConvertorController::class, 'show'])->name('currencies.show');
    Route::get('/report/show/{id}', [ReportController::class, 'show'])->name('report.show');
    Route::post('/report/store/{user}', [ReportController::class, 'store'])->name('report.store');

    Route::resource('report', ReportController::class);
});


