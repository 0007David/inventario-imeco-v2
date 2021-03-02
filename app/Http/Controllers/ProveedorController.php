<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Proveedor;

class ProveedorController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $response = array();
        $proveedor = Proveedor::all();
        $response['data'] = [
            'proveedores' => $proveedor,
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
        $proveedor = new Proveedor();
        $proveedor->nombre = $request->nombre;
        $proveedor->direccion = $request->direccion;
        $proveedor->telefono = $request->telefono;
        $proveedor->created_at = date('Y-m-d H:i:s');
        $proveedor->save();
        $response["data"] = [
            "proveedores" => $proveedor,
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
        $proveedor = Proveedor::find($id);
        $response["data"] = [
            "proveedores" => $proveedor,
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
        $proveedor = Proveedor::find($id);
        $proveedor->nombre = $request->nombre;
        $proveedor->direccion = $request->direccion;
        $proveedor->telefono = $request->telefono;
        $proveedor->updated_at = date('Y-m-d H:i:s');
        $proveedor->update();
        $response["data"] = [
            "proveedores" => $proveedor,
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
        $proveedor = Proveedor::find($id);
        $response["data"] = [
            "proveedores" => $proveedor,
        ];
        $response["message"] = "Se ha eliminado al Almacen con el ID: " . $proveedor->id;
        $proveedor->delete();
        return response()->json($response);
    }
}
