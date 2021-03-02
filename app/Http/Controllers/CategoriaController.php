<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Categoria;

class CategoriaController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $response = array();
        $categoria = Categoria::all();
        $response['data'] = [
            'categorias' => $categoria,
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
        $categoria = new Categoria();
        $categoria->nombre = $request->nombre;
        $categoria->created_at = date('Y-m-d H:i:s');
        $categoria->save();
        $response["data"] = [
            "categorias" => $categoria,
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
        $categoria = Categoria::find($id);
        $response["data"] = [
            "categorias" => $categoria,
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
        $categoria = Categoria::find($id);
        $categoria->nombre = $request->nombre;
        $categoria->updated_at = date('Y-m-d H:i:s');
        $categoria->update();
        $response["data"] = [
            "categorias" => $categoria,
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
        $categoria = Categoria::find($id);
        $response["data"] = [
            "categorias" => $categoria,
        ];
        $response["message"] = "Se ha eliminado la unidad de medida con el ID: " . $categoria->id;
        $categoria->delete();
        return response()->json($response);
    }
}
