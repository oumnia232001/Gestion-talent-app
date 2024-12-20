<?php

namespace App\Http\Controllers;

use App\Models\User;

use App\Http\Requests\StoreCandidatRequest;
use App\Http\Requests\UpdateCandidatRequest;
use App\Http\Resources\CandidatResource;
use Illuminate\Http\Resources\Json\AnonymousResourceCollection;
use Illuminate\Support\Facades\Hash;

class CandidatController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index():AnonymousResourceCollection
    {
       
       return  CandidatResource::Collection(User::all());
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \App\Http\Requests\StoreCandidatRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StoreCandidatRequest $request)
{
    $formFields = $request->validated();
    $formFields['password'] = Hash::make($formFields['password']);
    $formFields['last_login_date'] = now(); // Utilisez la fonction now() pour obtenir la date actuelle
    
    // Vérifiez s'il y a un fichier téléchargé
    if ($request->hasFile('profile_image')) {
        // Stockez le fichier dans le répertoire de stockage et obtenez le chemin
        $profileImagePath = $request->file('profile_image')->store('profile_images');
        
        // Ajoutez le chemin de l'image à $formFields
        $formFields['profile_image'] = $profileImagePath;
    }
    
    // Créez le candidat en utilisant les données traitées
    $candidat = User::create($formFields);
    
    // Créez la ressource Candidat pour la réponse
    $response = new CandidatResource($candidat);
    
    // Retournez une réponse JSON avec la ressource Candidat et un message
    return response()->json([
       'candidat' => $response,
       'message' => __('Candidat created successfully')
    ]);
}

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\User  $user
     * @return \Illuminate\Http\Response
     */
    /*public function show(User $user)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \App\Http\Requests\UpdateCandidatRequest  $request
     * @param  \App\Models\User  $user
     * @return \Illuminate\Http\Response
     */
    public function update(UpdateCandidatRequest $request, $id)
    {
        $candidat = User::findOrFail($id);
    
        $formFields = $request->validated();
    
        // Assurez-vous que le mot de passe est haché avant de le sauvegarder
        if (isset($formFields['password'])) {
            $formFields['password'] = Hash::make($formFields['password']);
        }
    
        $candidat->update($formFields);
    
        return response()->json([
            'candidat' => new CandidatResource($candidat),
            'message' => __('Candidat updated successfully')
        ]);
    }
    
    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\User  $user
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
     
        $candidat = User::findOrFail($id);
        $candidat->forceDelete();
     
    }
  
public function count()
    {
        $count = User::count();
        return response()->json(['count' => $count]);
    }
    


    
   
 
}
