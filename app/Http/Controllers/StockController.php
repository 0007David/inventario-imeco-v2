<?php

namespace App\Http\Controllers;

use App\Almacen;
use App\Stock;
use App\DetalleNotaCompra;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class StockController extends Controller
{
    /**
     * Display a listing of the resource.
     * Lista de Materiales Existentes en Stock
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
        // Lista de Materiales Existentes en Stock
        $sql = "SELECT st.id, al.nombre as almacen,
                ma.nro_material, ma.nombre, ca.nombre as categoria,
                st.cantidad as cant_stock, st.fecha_vencimiento,
                ma.cantidad_max, SUM(de.cantidad) as cant_detalle,
                (st.cantidad - SUM(de.cantidad)) as stock_disponible
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
            group by st.id, al.nombre, ma.nro_material, ma.nombre, ca.nombre,
	            cant_stock, st.fecha_vencimiento, ma.cantidad_max
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
     * Lista de Materiales que van a formar parte de la Existentes en Stock
     * @return \Illuminate\Http\Response
     */
    public function create(Request $request)
    {
        // Lista de Materiales que van a formar parte de la Existentes en Stock
        $response = array();
        $filterKey = is_null($request->filter_key) ? "" : $request->filter_key;
        $perPage = $request->per_page;
        $page = $request->page;
        $offset = ($page - 1) * $perPage;
        // Lista de Materiales Existentes en Stock
        $sql = "SELECT de.id_notacompra, ma.codigo,
            ma.nro_material, ma.nombre, ca.nombre as categoria,
            de.cantidad, de.precio, un.nombre as unidad_medida,
            ifnull(de.remember_token,'') as fecha_venc, ifnull(de.remember_token,'') as id_almacen
        FROM detalle_compra de
            inner join nota_compra nota on nota.id = de.id_notacompra
            inner join material ma on ma.codigo = de.cod_material
            inner join categoria ca on ca.id = ma.id_categoria
            inner join unidad_medida un on un.id = ma.id_unidad
        where  de.stocked = false AND
                (ma.nombre LIKE '%$filterKey%' OR
                ca.nombre LIKE '%$filterKey%' OR
                ma.nro_material LIKE '%$filterKey%' OR
                un.nombre LIKE '%$filterKey%')
        ORDER BY ma.codigo desc
        LIMIT ? OFFSET ?";
        $materiales = DB::select($sql, [$perPage, $offset]);
        $almacenes = Almacen::all();
        $response['data'] = [
            'materiales' => $materiales,
            'total' => count($materiales),
            'almacenes' => $almacenes,
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
        $materialesDetalle = $request->detalleStocks;
        foreach ($materialesDetalle as $key => $material) {
            $stock = new Stock();
            $stock->cod_material = $material['cod_material'];
            $stock->cantidad = $material['cantidad'];
            $stock->precio = $material['precio'];
            $stock->fecha_entrada = date('Y-m-d');
            $stock->fecha_vencimiento = $material['fecha_vencimiento'];
            $stock->id_almacen = $material['id_almacen'];
            $stock->created_at = date('Y-m-d H:i:s');
            $value = $stock->save();
            if( $value ){
                $salida[] = $value;
                $detalle = DB::table('detalle_compra')
                            ->where('id_notacompra', $material['id_notacompra'])
                            ->where('cod_material', $material['cod_material'])
                            ->update(['stocked' => true]);
                $salida[] = $detalle;
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
