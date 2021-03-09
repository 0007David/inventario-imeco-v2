<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class StockController extends Controller
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
        $sql = "SELECT
                st.id as id_stock,
                al.nombre as almacen,
                ma.nro_material,
                ma.nombre,
                ca.nombre as categoria,
                st.cantidad as cant_stock,
                SUM(de.cantidad) as cant_detalle,
                (st.cantidad- SUM(de.cantidad)) as stock_disponible
            FROM material ma
                inner join stock st on st.cod_material = ma.codigo
                inner join almacen al on al.id = st.id_almacen
                inner join categoria ca on ca.id = ma.id_categoria
                inner join detalle_notasalida de on de.id_stock = st.id
            where  st.disponible = true AND
                (ma.nombre LIKE '%$filterKey%' OR
                al.nombre LIKE '%$filterKey%' OR
                ma.nro_material LIKE '%$filterKey%' OR
                ca.nombre LIKE '%$filterKey%')
            group by st.id, al.nombre, ma.nro_material, ma.nombre, ca.nombre, cant_stock
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
        $notaSalida = new NotaSalida();
        $notaSalida->nombre = $request->nombre;
        $notaSalida->fecha = $request->fecha;
        $notaSalida->created_at = date('Y-m-d H:i:s');
        $notaSalida->id_user = 2;
        $value = $notaSalida->save();
        if( $value ){
            $materialesDetalle = $request->detalleNotaSalida;
            foreach ($materialesDetalle as $key => $material) {
                $detalle = new DetalleNotaSalida();
                $detalle->id_stock = $material['id_stock'];
                $detalle->id_notasalida = $notaSalida->id;
                $detalle->cantidad = $material['cantidad'];
                $detalle->created_at = date('Y-m-d H:i:s');
                $salida[] = $depende->save();
            }
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
