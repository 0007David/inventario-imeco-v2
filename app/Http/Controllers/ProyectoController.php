<?php

namespace App\Http\Controllers;

use App\Etapa;
use App\Proyecto;
use App\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class ProyectoController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $response = array();
        $sql = "SELECT pr.id, pr.nombre, pr.nombre_corto, pr.fecha_inicio, pr.fecha_fin,
            us.name usuario
        FROM proyecto pr
        INNER JOIN users us ON us.id = pr.id_user";
        $proyectos = DB::select($sql);

        $response['data'] = [
            'proyectos' => $proyectos,
            'total' => count($proyectos)
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
        $response = array(); // 2 => rol Encargado de proyecto
        $usuarios = User::where('id_rol', '=', 2)->get();

        $response['data'] = [
            'usuarios' => $usuarios,
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
        $proyecto = new Proyecto();
        $proyecto->nombre = $request->nombre;
        $proyecto->nombre_corto = $request->nombre_corto;
        $proyecto->fecha_inicio = $request->fecha_inicio;
        $proyecto->fecha_fin = $request->fecha_fin;
        $proyecto->id_user = $request->id_user;
        $proyecto->created_at = date('Y-m-d H:i:s');
        $value = $proyecto->save();
        $etapas = ['Lista de tareas', 'En progresos', 'En revision', 'Finalizadas'];
        if($value) {
            for ($i=0; $i < count($etapas); $i++) {
                $etapa = new Etapa();
                $etapa->nombre = $etapas[$i];
                $etapa->id_proyecto = $proyecto->id;
                $etapa->save();
            }
        }
        $response["data"] = [
            "proyecto" => $proyecto,
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
        $proyecto = Proyecto::find($id);
        $usuarios = User::where('id_rol', '=', 2)->get();
        $response["data"] = [
            "proyecto" => $proyecto,
            "usuarios" => $usuarios
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
        $proyecto = Proyecto::find($id);
        $proyecto->nombre = $request->nombre;
        $proyecto->nombre_corto = $request->nombre_corto;
        $proyecto->fecha_inicio = $request->fecha_inicio;
        $proyecto->fecha_fin = $request->fecha_fin;
        $proyecto->id_user = $request->id_user;
        $proyecto->updated_at = date('Y-m-d H:i:s');
        $proyecto->update();
        $response["data"] = [
            "proyecto" => $proyecto,
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
        $proyecto = Proyecto::find($id);
        $response["data"] = [
            "proyecto" => $proyecto,
        ];
        $response["message"] = "Se ha eliminado el Proyecto con el ID: " . $proyecto->id;
        return response()->json($response);
    }
}
