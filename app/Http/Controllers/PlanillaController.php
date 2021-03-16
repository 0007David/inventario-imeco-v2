<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Planilla;
use App\Material;
use App\Categoria;

class PlanillaController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $response = array();
        $planilla = Planilla::all();
        $response['data'] = [
            'planillas' => $planilla,
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

    public function add($id)
    {
        $response = array();
        $categoria = Categoria::all();
        $material = Material::all();
        $response['data'] = [
            'categorias' => $categoria,
            'materiales'=> $material,
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
        $planilla = new Planilla();
        $planilla->codigo = $request->codigo;
        $planilla->fecha = $request->fecha;
        $planilla->estado = "Espera";
        $planilla->id_user = 1;
        $planilla->created_at = date('Y-m-d H:i:s');
        $planilla->save();
        $response["data"] = [
            "planillas" => $planilla,
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
        $planilla = Planilla::find($id);
        $response["data"] = [
            "planillas" => $planilla,
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
        $planilla = Planilla::find($id);
        $planilla->codigo = $request->codigo;
        $planilla->fecha = $request->fecha;
        $planilla->estado = $request->estado;
        $planilla->updated_at = date('Y-m-d H:i:s');
        $planilla->update();
        $response["data"] = [
            "planillas" => $planilla,
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
        //
    }
}
