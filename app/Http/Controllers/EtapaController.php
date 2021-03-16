<?php

namespace App\Http\Controllers;

use App\Etapa;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Proyecto;

class EtapaController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $response = array();
        $sql = "SELECT eta.id, eta.nombre, pro.id as id_proyecto, pro.nombre as proyecto, us.name as usuario
            FROM etapa eta
        INNER JOIN proyecto pro on pro.id = eta.id_proyecto
        INNER JOIN users us on pro.id_user = us.id";
        $etapas = DB::select($sql);

        foreach($etapas as &$etapa){
            $etapa->sub_etapas = Etapa::find($etapa->id)->subEtapas;
        }

        $response['data'] = [
            'etapas' => $etapas,
            'total' => count($etapas)
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
        $proyectos = Proyecto::all();
        $response['data'] = [
            'proyectos' => $proyectos,
            'total' => count($proyectos)
        ];
        return response()->json($response);
    }

    public function getSubEtapas($idProyecto)
    {
        $response = array();
        $etapas = Proyecto::find($idProyecto)->etapas;
        $response['data'] = [
            'etapas' => $etapas,
            'total' => count($etapas)
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
        $etapa = new Etapa();
        $etapa->nombre = $request->nombre;
        $etapa->progreso = $request->progreso;
        $etapa->fecha_inicio = $request->fecha_inicio;
        $etapa->fecha_fin = $request->fecha_fin;
        $etapa->id_etapa = $request->id_etapa;
        $etapa->save();
        $response["data"] = [
            "etapa" => $etapa,
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
        $response = array();
        $sql = "SELECT eta.id, eta.nombre, pro.id as id_proyecto, pro.nombre as proyecto, us.name as usuario
            FROM etapa eta
        INNER JOIN proyecto pro on pro.id = eta.id_proyecto
        INNER JOIN users us on pro.id_user = us.id
        WHERE pro.id = ?";
        $etapas = DB::select($sql,[$id]);

        foreach($etapas as &$etapa){
            $etapa->sub_etapas = Etapa::find($etapa->id)->subEtapas;
        }

        $response['data'] = [
            'etapas' => $etapas,
            'total' => count($etapas)
        ];
        return response()->json($response);
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
        $response = array();
        $etapa = Etapa::find($id);
        $response["data"] = [
            "etapa" => $etapa,
        ];
        $response["message"] = "Se ha eliminado el Etapa con el ID: " . $etapa->id;
        return response()->json($response);
    }
}
