<?php

use App\Http\Controllers\ProductController;
use App\Http\Controllers\AuthController;
// Auth routes
Route::get('/register', [AuthController::class, 'showRegister'])->name('register');
Route::post('/register', [AuthController::class, 'register']);
Route::get('/login', [AuthController::class, 'showLogin'])->name('login');
Route::post('/login', [AuthController::class, 'login']);
Route::post('/logout', [AuthController::class, 'logout'])->name('logout');
use Inertia\Inertia;

// Homepage route with Inertia React component
Route::get('/', function () {
    return Inertia::render('Homepage', [
        'auth' => [
            'user' => auth()->user(),
        ],
    ]);
});

// Product resource routes using your ProductController (Inertia-powered)
Route::resource('products', ProductController::class);
