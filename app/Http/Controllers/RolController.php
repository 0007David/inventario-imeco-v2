<?php

namespace App\Http\Controllers;

use App\Rol;
use Illuminate\Http\Request;

class RolController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $response = array();
        $roles = Rol::all();
        $response['data'] = [
            'roles' => $roles,
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
        $rol = new Rol();
        $rol->nombre = $request->nombre;
        $rol->created_at = date('Y-m-d H:i:s');
        $rol->save();
        $response["data"] = [
            "rol" => $rol,
        ];
        return response()->json($response);;
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
        $rol = Rol::find($id);
        $response["data"] = [
            "rol" => $rol
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
        $rol = Rol::find($id);
        $rol->nombre = $request->nombre;
        $rol->updated_at = date('Y-m-d H:i:s');
        $rol->update();
        $response["data"] = [
            "rol" => $rol,
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
        $rol = Rol::find($id);
        $response["data"] = [
            "rol" => $rol
        ];
        $response["message"] = "Se ha eliminado el Rol con el ID: " . $rol->id;
        return response()->json($response);
    }
}
