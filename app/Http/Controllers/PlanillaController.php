<?php

namespace App\Http\Controllers;

use App\Planilla;
use App\Material;
use App\Categoria;
use App\DetallePlanilla;
use App\Proyecto;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Database\QueryException;
use Throwable;

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
        $sql = "SELECT pla.codigo, pla.planilla_numero, pro.nombre as proyecto, pla.descripcion, pla.estado, pla.created_at as fecha,
                    us.name as nombre_usuario, (SELECT COUNT(de.id) FROM detalle_planilla de where de.id_planilla = pla.codigo) as cantidad
                FROM planilla pla
                        inner join proyecto pro on pro.id = pla.id_proyecto
                        inner join users us on us.id = pla.id_user;";

        $planilla = DB::select($sql);
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
        $proyectos = Proyecto::all();
        $response['data'] = [
            "proyectos" => $proyectos,
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
        try {
            DB::beginTransaction();
            $planilla = new Planilla();
            $planilla->planilla_numero = $request->planilla_numero;
            $planilla->fecha = $request->fecha;
            $planilla->estado = "Espera";
            $planilla->id_user = 1;
            $planilla->id_proyecto = $request->proyecto_id;
            $planilla->descripcion = $request->descripcion;
            $planilla->created_at = date('Y-m-d H:i:s');
            if($planilla->save()){
                $detallePlantilla = $request["detallePlantilla"]; $salida=[];
                foreach ($detallePlantilla as $det) {
                    $detalle = new DetallePlanilla();
                    $detalle->id_planilla = $planilla->codigo;
                    $detalle->cod_material = $det["codigo"];
                    $detalle->cantidad = $det["cantidad"];
                    $detalle->created_at = date('Y-m-d H:i:s');
                    $salida[] = $detalle->save();
                }
            }
            DB::commit();
            $response["message"] = "El registro ha sido insertado correctamente";
            $response["data"] = $salida;
        } catch (QueryException $e) {
            DB::rollBack();
            $response["error"] = "Error en la base de datos.";  //  ERROR DE SQL O QUERY
            $response['exception'] = $e;
        } catch (Throwable $e) {
            DB::rollBack();
            $codigoError = ($e->getCode() == 0) ? 2 : $e->getCode();
            $response ["error"] =
                ($codigoError == 0) ? "Error desconocido." : "Cod error: ". $codigoError." ". $e->getMessage();
        }
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

    public function getMateriales(Request $request)
    {
        $response = array();
        $filterKey = is_null($request->filter_key) ? "" : $request->filter_key;
        $perPage = $request->per_page;
        $esPadre = $request->es_padre;
        $page = $request->page;
        $offset = ($page - 1) * $perPage;
        $sql = "SELECT ma.codigo, ma.nro_material, ma.nombre,
                ma.precio, ma.descripcion,
                ca.nombre as categoria, un.nombre as unidad_medida
        FROM material ma
            inner join categoria ca on ca.id = ma.id_categoria
            inner join unidad_medida un on un.id = ma.id_unidad
        Where ";
        if($esPadre){
            $sql .= "ma.es_padre = '$esPadre' AND ";
        }
        $sql .="(ma.nro_material LIKE '%$filterKey%' OR
            ma.nombre LIKE '%$filterKey%' OR
            ca.nombre LIKE '%$filterKey%' OR
            un.nombre LIKE '%$filterKey%' OR
            ma.descripcion LIKE '%$filterKey%')
            ORDER BY ma.codigo desc
        LIMIT ? OFFSET ?";
        $materiales = DB::select($sql, [$perPage, $offset]);
        if($esPadre){
            // foreach( $etapas as &$etapa ){
            //     $etapa->sub_etapas = Etapa::find($etapa->id)->subEtapas;
            // }
        }
        $response['data'] = [
            'materiales' => $materiales,
            'total' => count($materiales)
        ];
        return response()->json($response);
    }
}
