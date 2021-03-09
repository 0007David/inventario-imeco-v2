<?php

namespace App\Http\Controllers;

use App\DetalleNotaSalida;
use App\NotaSalida;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class NotaSalidaController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $response = array();
        $sql = "SELECT nota.id, nota.nombre, nota.fecha, us.name as usuario
        FROM nota_salida nota
        INNER JOIN users us on us.id = nota.id_user";
        $notaSalidas = DB::select($sql);

        $response['data'] = [
            'notaSalidas' => $notaSalidas,
            'total' => count($notaSalidas)
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
