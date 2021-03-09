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
        $categoria = Categoria::all();
        $material = Material::all();
        $response['data'] = [
            'categorias' => $categoria,
            'materiales'=> $material,
        ];
        return response()->json($response);
    }

    public function addMaterial($id)
    {
        $response = array();
        $proveedor = Proveedor::find($id);
        $response["data"] = [
            "proveedores" => $proveedor,
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
        $planilla = new Proveedor();
        $planilla->nombre = $request->nombre;
        $planilla->direccion = $request->direccion;
        $planilla->telefono = $request->telefono;
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
        //
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
        //
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
