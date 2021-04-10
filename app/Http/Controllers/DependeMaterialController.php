<?php

namespace App\Http\Controllers;

use App\DependeMaterial;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class DependeMaterialController extends Controller
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
                ma.precio, ma.descripcion,
                ca.nombre as categoria, un.nombre as unidad_medida
        FROM material ma
            inner join categoria ca on ca.id = ma.id_categoria
            inner join unidad_medida un on un.id = ma.id_unidad
        Where ma.es_padre = false AND
            (ma.nro_material LIKE '%$filterKey%' OR
            ma.nombre LIKE '%$filterKey%' OR
            ca.nombre LIKE '%$filterKey%' OR
            un.nombre LIKE '%$filterKey%' OR
            ma.descripcion LIKE '%$filterKey%')
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
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $response = array(); $salida = array();
        $materialesHijos = $request->materialesHijos;
        foreach ($materialesHijos as $key => $material) {
            $depende = new DependeMaterial();
            $depende->cod_materialpadre = $request->codigoMaterialPadre;
            $depende->cod_materialhijo = $material['codigo'];
            $depende->created_at = date('Y-m-d H:i:s');
            $salida[] = $depende->save();
        }
        $response["data"] = [
            "mensaje" => 'Se ha guardado exitosamente!',
            "material" => $salida,
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
        $sql = "SELECT maHijo.codigo, maHijo.nro_material, maHijo.nombre,
        maHijo.precio, maHijo.descripcion,
        ca.nombre as categoria, un.nombre as unidad_medida
      FROM material maPadre, depende de, material maHijo
       inner join categoria ca on ca.id = maHijo.id_categoria
       inner join unidad_medida un on un.id = maHijo.id_unidad
      Where  maPadre.codigo = ? and de.cod_materialpadre = maPadre.codigo and de.cod_materialhijo= maHijo.codigo;";
        $materiales = DB::select($sql, [$id]);
        $response['data'] = [
            'materiales' => $materiales,
            'total' => count($materiales)
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
        //
    }
}
