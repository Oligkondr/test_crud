<?php

use App\Http\Controllers\UserController;
use Illuminate\Support\Facades\Route;

Route::redirect('/', 'user');

Route::resource('user', UserController::class);

Route::get('test', [UserController::class, 'test']);
