<?php

namespace App\Http\Controllers;

use App\Almacen;
use Illuminate\Http\Request;

class AlmacenController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $response = array();
        $almacenes = Almacen::all();
        $response['data'] = [
            'almacenes' => $almacenes,
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
        $almacen = new Almacen();
        $almacen->nombre = $request->nombre;
        $almacen->ubicacion = $request->ubicacion;
        $almacen->created_at = date('Y-m-d H:i:s');
        $almacen->save();
        $response["data"] = [
            "almacen" => $almacen,
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
        $almacen = Almacen::find($id);
        $response["data"] = [
            "almacen" => $almacen,
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
        $almacen = Almacen::find($id);
        $almacen->nombre = $request->nombre;
        $almacen->ubicacion = $request->ubicacion;
        $almacen->updated_at = date('Y-m-d H:i:s');
        $almacen->update();
        $response["data"] = [
            "almacen" => $almacen,
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
        $almacen = Almacen::find($id);
        $response["data"] = [
            "almacen" => $almacen,
        ];
        $response["message"] = "Se ha eliminado al Almacen con el ID: " . $almacen->id;
        return response()->json($response);
    }
}
