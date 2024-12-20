<?php

namespace App\Http\Controllers;

use App\Models\Offre;
use App\Http\Requests\StoreOffreRequest;
use App\Http\Requests\UpdateOffreRequest;
use App\Http\Resources\OffreResource;
use Illuminate\Http\Resources\Json\AnonymousResourceCollection;
use Illuminate\Support\Facades\Hash;
use Illuminate\Http\Request; // Assurez-vous d'importer Request depuis Illuminate\Http


class OffreController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index():AnonymousResourceCollection
    {
       
       return  OffreResource::Collection(Offre::all());
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \App\Http\Requests\StoreOffreRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StoreOffreRequest $request)
    {
        $formFields = $request->validated();
        $offre = Offre::create($formFields);
        $response = new OffreResource($offre);
        return response()->json([
           'offre' => $response,
           'message' => __('Offers created successfully')
        ]) ;
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Offre  $offre
     * @return \Illuminate\Http\Response
     */
    public function show(Offre $offre)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \App\Http\Requests\UpdateOffreRequest  $request
     * @param  \App\Models\Offre  $offre
     * @return \Illuminate\Http\Response
     */
    public function update(UpdateOffreRequest $request, $id)
    {
        $offre = Offre::findOrFail($id);
        $formFields = $request->validated();
        if (isset($formFields['password'])) {
            $formFields['password'] = Hash::make($formFields['password']);
        }
    
        $offre->update($formFields);

        return response()->json([
            'offre' => new OffreResource($offre),
            'message' => __('Offer updated successfully')
         
            ]) ;
            
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Offre  $offre
     * @return \Illuminate\Http\Response
     */
    
 

public function destroy($id)
{
    $offre = Offre::findOrFail($id);
    $offre->forceDelete();

    // Redirigez l'utilisateur vers la page appropriée ou retournez une réponse JSON, selon vos besoins
}
public function count()
    {
        $count = Offre::count();
        return response()->json(['count' => $count]);
    }
    public function apply(Request $request, $id)
    {
        $offre = Offre::findOrFail($id);
        $applicationData = $request->all(); // Validation des données selon vos besoins

        // Logique pour enregistrer la candidature, par exemple :
        // $application = new Application($applicationData);
        // $application->offre_id = $offre->id;
        // $application->save();

        return response()->json(['message' => 'Application submitted successfully'], 201);
    }

 


    
}
