<?php

namespace App\Http\Controllers;

use App\User;
use App\Rol;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

class UsuarioController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $response = array();
        $usuarios = User::all();
        $roles = Rol::all();
        $response['data'] = [
            'usuarios' => $usuarios,
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
        $roles = Rol::all();
        $response['data'] = [
            'roles' => $roles,
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
        $usuario = new User();
        $usuario->name = $request->name;
        $usuario->email = $request->email;
        $usuario->password = Hash::make($request->password);
        $usuario->id_rol = $request->id_rol;
        $usuario->created_at = date('Y-m-d H:i:s');
        $usuario->save();
        $response["data"] = [
            "usuario" => $usuario,
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
        $usuario = User::find($id);
        $roles = Rol::all();
        $response["data"] = [
            "usuario" => $usuario,
            "roles" => $roles
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
        $usuario = User::find($id);
        $usuario->name = $request->name;
        $usuario->email = $request->email;
        // $usuario->password = Hash::make($request->password);
        $usuario->id_rol = $request->id_rol;
        $usuario->updated_at = date('Y-m-d H:i:s');
        $usuario->update();
        $response["data"] = [
            "usuario" => $usuario,
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
        $usuario = User::find($id);
        $response["data"] = [
            "usuario" => $usuario,
        ];
        $response["message"] = "Se ha eliminado al Usuario con el ID: " . $usuario->id;
        return response()->json($response);
    }
}
