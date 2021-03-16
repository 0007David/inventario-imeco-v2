<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Material;
use App\UnidadMedida;
use App\Categoria;
use Illuminate\Support\Facades\DB;

class MaterialController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $response = array();
        $filterKey = is_null($request->filter_key) ? "" : $request->filter_key;
        $perPage = $request->per_page;
        $page = $request->page;
        $offset = ($page - 1) * $perPage;
        $sql = "SELECT ma.codigo, ma.nro_material, ma.nombre,
                ma.precio, ma.cantidad_max, ma.cantidad_min, ma.es_padre, ma.descripcion,
                ca.nombre as categoria, un.nombre as unidad_medida
        FROM material ma
            inner join categoria ca on ca.id = ma.id_categoria
            inner join unidad_medida un on un.id = ma.id_unidad
        Where ma.nro_material LIKE '%$filterKey%' OR
            ma.nombre LIKE '%$filterKey%' OR
            ca.nombre LIKE '%$filterKey%' OR
            un.nombre LIKE '%$filterKey%' OR
            ma.descripcion LIKE '%$filterKey%'
        ORDER BY ma.codigo desc
        LIMIT ? OFFSET ?";
        $materiales = DB::select($sql, [$perPage, $offset]);
        $response['data'] = [
            'materiales' => $materiales,
            'total' => count($materiales)
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
        // $materiales = Material::all();
        $unidadesMedidas = UnidadMedida::all();
        $categorias = Categoria::all();
        $response['data'] = [
            // 'materiales' => $materiales,
            'categorias' => $categorias,
            'unidadesMedidas' => $unidadesMedidas,
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
        $material = new Material();
        $material->nro_material = $request->nro_material;
        $material->nombre = $request->nombre;
        $material->precio = $request->precio;
        $material->descripcion = $request->descripcion;
        $material->es_padre = $request->es_padre;
        $material->id_unidad = $request->id_unidad;
        $material->id_categoria = $request->id_categoria;
        $material->created_at = date('Y-m-d H:i:s');
        $material->save();
        $response["data"] = [
            "mensaje" => 'Se ha guardado exitosamente!',
            "material" => $material,
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
        $sql = "SELECT ma.codigo, ma.nro_material, ma.nombre,
                ma.precio, ma.es_padre, ma.descripcion,
                ca.nombre as categoria, un.nombre as unidad_medida
        FROM material ma
            inner join categoria ca on ca.id = ma.id_categoria
            inner join unidad_medida un on un.id = ma.id_unidad
        Where ma.codigo = ?";
        $material = DB::selectOne($sql, [$id]);
        $response['data'] = [
            'material' => $material,
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
        $response = array();
        $material = Material::find($id);
        $unidadesMedidas = UnidadMedida::all();
        $categorias = Categoria::all();
        $response["data"] = [
            "material" => $material,
            'categorias' => $categorias,
            'unidadesMedidas' => $unidadesMedidas,
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
        $material = Material::find($id);
        $material->nro_material = $request->nro_material;
        $material->nombre = $request->nombre;
        $material->precio = $request->precio;
        $material->descripcion = $request->descripcion;
        $material->id_unidad = $request->id_unidad;
        $material->id_categoria = $request->id_categoria;
        $material->es_padre = $request->es_padre;
        $material->updated_at = date('Y-m-d H:i:s');
        $material->update();
        $response["data"] = [
            "mensaje" => 'Se ha actualizado exitosamente!',
            "material" => $material,
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
        $material = Material::find($id);
        $response["data"] = [
            "material" => $material,
        ];
        $response["message"] = "Se ha eliminado el Material con el ID: " . $material->codigo;
        return response()->json($response);
    }
}
