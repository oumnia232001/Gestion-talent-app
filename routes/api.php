<?php

use App\Http\Controllers\OffreController;
use App\Http\Controllers\CandidatController;
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

Route::middleware(['auth:sanctum,admin,recruiter'])->get('/user', function (Request $request) {
    return $request->user();
});

// Routes for Offres
Route::post('/recruiter/offres', [OffreController::class, 'store'])->middleware('auth:sanctum,admin,recruiter');
Route::get('/recruiter/offres', [OffreController::class, 'index'])->middleware('auth:sanctum,admin,recruiter');
Route::delete('/recruiter/offres/{id}', [OffreController::class, 'destroy']);
Route::put('/recruiter/offres/{id}', [OffreController::class, 'update'])->middleware('auth:sanctum,admin,recruiter');


Route::post('/user/candidatures/{id}/apply', [OffreController::class, 'apply'])->middleware('auth:sanctum,admin,recruiter');

Route::get('/offres/count', [OffreController::class, 'count']); // Nouvelle route pour compter les offres
Route::apiResources([
    'offres' => OffreController::class,
]);



// Route for counting Candidats
Route::get('/candidats/count', [CandidatController::class, 'count']); // Nouvelle route pour compter les candidats

// Routes for Candidats
Route::post('/recruiter/users', [CandidatController::class, 'store'])->middleware('auth:sanctum,admin,recruiter');
Route::get('/recruiter/users', [CandidatController::class, 'index'])->middleware('auth:sanctum,admin,recruiter');
Route::delete('/recruiter/users/{id}', [CandidatController::class, 'destroy'])->middleware('auth:sanctum,admin,recruiter');
Route::put('/recruiter/users/{id}', [CandidatController::class, 'update'])->middleware('auth:sanctum,admin,recruiter');
Route::put('/user/users/{id}', [CandidatController::class, 'update'])->middleware('auth:sanctum,admin,recruiter');

Route::apiResources([
    'candidats' => CandidatController::class, 
]);


require __DIR__.'/auth.php';
