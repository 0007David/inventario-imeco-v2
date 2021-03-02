<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\UnidadMedida;

class UnidadMedidaController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $response = array();
        $unidad = UnidadMedida::all();
        $response['data'] = [
            'unidadmedidas' => $unidad,
        ];
        
        return response()->json($response);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        $response = array();
        $response['data'] = [
        ];
        return response()->json($response);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $response = array();
        $unidad = new UnidadMedida();
        $unidad->nombre = $request->nombre;
        $unidad->created_at = date('Y-m-d H:i:s');
        $unidad->save();
        $response["data"] = [
            "unidamedidas" => $unidad,
        ];
        return response()->json($response);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        $response = array();
        $unidad = UnidadMedida::find($id);
        $response["data"] = [
            "unidadmedidas" => $unidad,
        ];
        return response()->json($response);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $response = array();
        $unidad = UnidadMedida::find($id);
        $unidad->nombre = $request->nombre;
        $unidad->updated_at = date('Y-m-d H:i:s');
        $unidad->update();
        $response["data"] = [
            "unidadmedidas" => $unidad,
        ];
        return response()->json($response);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $response = array();
        $unidad = UnidadMedida::find($id);
        $response["data"] = [
            "unidadmedidas" => $unidad,
        ];
        $response["message"] = "Se ha eliminado la unidad de medida con el ID: " . $unidad->id;
        $unidad->delete();
        return response()->json($response);
    }
}
