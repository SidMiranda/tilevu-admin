<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ProductController;

Route::get('/product/list', [ProductController::class, 'index']);

Route::post('/product/create', [ProductController::class, 'store']);

// Route::get('/ping', function() {
//     return response()->json(['message' => 'Pong!'], 200);
// });

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
