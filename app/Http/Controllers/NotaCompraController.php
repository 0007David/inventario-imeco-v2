<?php

namespace App\Http\Controllers;

use App\DetalleNotaCompra;
use App\NotaCompra;
use App\Proveedor;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class NotaCompraController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $response = array();
        $sql = "SELECT nota.id, nota.fecha, nota.montototal, us.name as usuario, pro.nombre as proveedor
        FROM nota_compra nota
        INNER JOIN users us on us.id = nota.id_user
        INNER JOIN proveedor pro on pro.id = nota.id_proveedor";
        $notaCompras = DB::select($sql);

        $response['data'] = [
            'notaCompras' => $notaCompras,
            'total' => count($notaCompras)
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
        $proveedores = Proveedor::all();
        $response['data'] = [
            'proveedores' => $proveedores,
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
        $response = array(); $salida = array();
        $notaCompra = new NotaCompra();
        $notaCompra->fecha = $request->fecha;
        $notaCompra->created_at = date('Y-m-d H:i:s');
        $notaCompra->id_proveedor = $request->id_proveedor;
        $notaCompra->montototal = $request->montototal;
        $notaCompra->id_user = $request->id_user;
        $value = $notaCompra->save();
        if( $value ){
            $materialesDetalle = $request->detalleNotaCompra;
            foreach ($materialesDetalle as $key => $material) {
                $detalle = new DetalleNotaCompra();
                $detalle->id_notacompra = $notaCompra->id;
                $detalle->cod_material = $material['cod_material'];
                $detalle->cantidad = $material['cantidad'];
                $detalle->precio = $material['precio'];
                $detalle->created_at = date('Y-m-d H:i:s');
                $salida[] = $detalle->save();
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
        $response = array();
        $sql = "SELECT nota.id, nota.fecha, nota.montototal,
            pro.nombre as proveedor, us.name as usuario
        FROM nota_compra nota
            INNER JOIN users us on us.id = nota.id_user
            INNER JOIN proveedor pro on pro.id = nota.id_proveedor
        WHERE nota.id = ?";
        $notaCompra = DB::selectOne($sql, [$id]);

        $sql = "SELECT   ma.codigo, ma.nro_material,
            ma.nombre, de.precio, de.cantidad,
            ca.nombre as categoria, un.nombre as unidad_medida
        FROM nota_compra nota
            inner join detalle_compra de on nota.id = de.id_notacompra
            inner join material ma on ma.codigo = de.cod_material
            inner join categoria ca on ca.id = ma.id_categoria
            inner join unidad_medida un on un.id = ma.id_unidad
        where  nota.id = ?";
        $detalle = DB::select($sql, [$id]);

        $response['data'] = [
            'notaCompra' => $notaCompra,
            'detalle' => $detalle,
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
