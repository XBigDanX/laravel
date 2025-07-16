<?php

use App\Http\Controllers\ProductController;
use Inertia\Inertia;

// Homepage route with Inertia React component
Route::get('/', function () {
    return Inertia::render('Homepage');  // resources/js/Pages/Home.jsx
});

// Product resource routes using your ProductController (Inertia-powered)
Route::resource('products', ProductController::class);
