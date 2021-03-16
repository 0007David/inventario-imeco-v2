<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/
// Ejemlos
Route::get('/articles', 'ArticleController@index');
Route::post('/article/store', 'ArticleController@store');
Route::get('/article/edit/{id}', 'ArticleController@getArticle');
Route::get('/article/show/{id}', 'ArticleController@getArticle');
Route::put('/article/update/{id}', 'ArticleController@update');
Route::delete('/article/delete/{id}', 'ArticleController@delete');

// Usuario
Route::get('/usuario', 'UsuarioController@index')->name('usuario');
Route::get('/usuario/create', 'UsuarioController@create')->name('usuario-create');
Route::get('/usuario/{id}/edit', 'UsuarioController@edit')->name('usuario-edit');
Route::put('/usuario/{id}', 'UsuarioController@update')->name('usuario-update');
Route::post('/usuario', 'UsuarioController@store')->name('usuario-store');
Route::delete('/usuario/{id}', 'UsuarioController@destroy')->name('usuario-delete');

// ROL
Route::get('/rol', 'RolController@index')->name('rol');
Route::get('/rol/create', 'RolController@create')->name('rol-create');
Route::get('/rol/{id}/edit', 'RolController@edit')->name('rol-edit');
Route::post('/rol', 'RolController@store')->name('rol-store');
Route::put('/rol/{id}', 'RolController@update')->name('rol-update');
Route::delete('/rol/{id}', 'RolController@destroy')->name('rol-delete');

//ALMACEN
Route::get('/almacen', 'AlmacenController@index')->name('almacen');
Route::get('/almacen/{id}/edit', 'AlmacenController@edit')->name('almacen-edit');
Route::get('/almacen/create', 'AlmacenController@create')->name('almacen-create');
Route::post('/almacen', 'AlmacenController@store')->name('almacen-store');
Route::put('/almacen/{id}', 'AlmacenController@update')->name('almacen-update');
Route::delete('/almacen/{id}', 'AlmacenController@destroy')->name('almacen-delete');

//PROVEEDOR
Route::get('/proveedor', 'ProveedorController@index')->name('proveedor');
Route::get('/proveedor/{id}/edit', 'ProveedorController@edit')->name('proveedor-edit');
Route::get('/proveedor/create', 'ProveedorController@create')->name('proveedor-create');
Route::post('/proveedor', 'ProveedorController@store')->name('proveedor-store');
Route::put('/proveedor/{id}', 'ProveedorController@update')->name('proveedor-update');
Route::delete('/proveedor/{id}', 'ProveedorController@destroy')->name('proveedor-delete');

//UNIDAD DE MEDIDA
Route::get('/unidadmedida', 'UnidadMedidaController@index')->name('unidadmedida');
Route::get('/unidadmedida/{id}/edit', 'UnidadMedidaController@edit')->name('unidadmedida-edit');
Route::get('/unidadmedida/create', 'UnidadMedidaController@create')->name('unidadmedida-create');
Route::post('/unidadmedida', 'UnidadMedidaController@store')->name('unidadmedida-store');
Route::put('/unidadmedida/{id}', 'UnidadMedidaController@update')->name('unidadmedida-update');
Route::delete('/unidadmedida/{id}', 'UnidadMedidaController@destroy')->name('unidadmedida-delete');

//CATEGORIA
Route::get('/categoria', 'CategoriaController@index')->name('categoria');
Route::get('/categoria/{id}/edit', 'CategoriaController@edit')->name('categoria-edit');
Route::get('/categoria/create', 'CategoriaController@create')->name('categoria-create');
Route::post('/categoria', 'CategoriaController@store')->name('categoria-store');
Route::put('/categoria/{id}', 'CategoriaController@update')->name('categoria-update');
Route::delete('/categoria/{id}', 'CategoriaController@destroy')->name('categoria-delete');

//Material
Route::get('/material', 'MaterialController@index')->name('material');
Route::get('/material/{id}/edit', 'MaterialController@edit')->name('material-edit');
Route::get('/material/create', 'MaterialController@create')->name('material-create');
Route::get('/material/{id}/show', 'MaterialController@show')->name('material-show');
Route::post('/material', 'MaterialController@store')->name('material-store');
Route::put('/material/{id}', 'MaterialController@update')->name('material-update');
Route::delete('/material/{id}', 'MaterialController@destroy')->name('material-delete');
Route::get('/depende', 'DependeMaterialController@index')->name('depende');
Route::get('/depende/{id}/show', 'DependeMaterialController@show')->name('depende-show');
Route::post('/depende', 'DependeMaterialController@store')->name('depende-store');

//Nota de Salida
Route::get('/nota_salida', 'NotaSalidaController@index')->name('nota_salida');
Route::get('/nota_salida/{id}/edit', 'NotaSalidaController@edit')->name('nota_salida-edit');
Route::get('/nota_salida/create', 'NotaSalidaController@create')->name('nota_salida-create');
Route::get('/nota_salida/{id}/show', 'NotaSalidaController@show')->name('nota_salida-show');
Route::post('/nota_salida', 'NotaSalidaController@store')->name('nota_salida-store');
Route::put('/nota_salida/{id}', 'NotaSalidaController@update')->name('nota_salida-update');
Route::delete('/nota_salida/{id}', 'NotaSalidaController@destroy')->name('nota_salida-delete');

//Stock
Route::get('/stock', 'StockController@index')->name('stock');
Route::get('/stock/{id}/edit', 'StockController@edit')->name('stock-edit');
Route::get('/stock/create', 'StockController@create')->name('stock-create');
Route::post('/stock', 'StockController@store')->name('stock-store');
Route::put('/stock/{id}', 'StockController@update')->name('stock-update');
Route::delete('/stock/{id}', 'StockController@destroy')->name('stock-delete');

//PLANILLA DE REQUERIMIENTO
Route::get('/planilla', 'PlanillaController@index')->name('planilla');
Route::get('/planilla/create', 'PlanillaController@create')->name('planilla-create');
Route::post('/planilla', 'PlanillaController@store')->name('planilla-store');
Route::get('/planilla/{id}/edit', 'PlanillaController@edit')->name('planilla-edit');
Route::put('/planilla/{id}', 'PlanillaController@update')->name('planilla-update');
Route::get('/planilla/{id}/addmaterial', 'PlanillaController@add')->name('planilla-add');

//Nota de Compra
Route::get('/nota_compra', 'NotaCompraController@index')->name('nota_compra');
Route::get('/nota_compra/create', 'NotaCompraController@create')->name('nota_compra-create');
Route::get('/nota_compra/{id}/show', 'NotaCompraController@show')->name('nota_compra-show');
Route::post('/nota_compra', 'NotaCompraController@store')->name('nota_compra-store');