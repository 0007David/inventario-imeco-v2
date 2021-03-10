<template>

    <div class="content-wrapper">
        <!-- Content Header (Page header) -->
        <div class="content-header">
            <div class="container-fluid">
                <div class="row mb-2">
                    <div class="col-sm-6">
                        <h1 class="m-0">Lista Notas de Compras</h1>
                    </div><!-- /.col -->
                    <div class="col-sm-6">
                        <ol class="breadcrumb float-sm-right">
                            <li class="breadcrumb-item"><a href="#">Admin</a></li>
                            <li class="breadcrumb-item active">Nota Compra</li>
                        </ol>
                    </div><!-- /.col -->
                </div><!-- /.row -->
            </div><!-- /.container-fluid -->
        </div>
        <!-- /.content-header -->

        <section class="content">
            <div class="container-fluid">
                <!-- Main row -->
                <div class="row">
                    <div class="col-12">
                        <div class="card">
                            <div class="card-header">
                                <!-- <h3 class="card-title">DataTable with minimal features &amp; hover style</h3> -->
                                <router-link
                                    :to="{ name: 'nota-compra-create' }"
                                    class="btn btn-primary">
                                    Nuevo
                                </router-link>
                            </div>
                            <!-- /.card-header -->
                            <div class="card-body">
                                <div id="example2_wrapper" class="dataTables_wrapper dt-bootstrap4">
                                    <div class="row">
                                        <div class="col-sm-12 col-md-6"></div>
                                        <div class="col-sm-12 col-md-6"></div>
                                    </div>
                                    <div class="row">
                                        <div class="col-sm-12">
                                            <table id="tablaUsuario" class="table table-bordered table-hover dataTable" role="grid" aria-describedby="example2_info">
                                                <thead>
                                                    <tr role="row">
                                                        <th>#</th>
                                                        <th>Nro Compra</th>
                                                        <th>Proveedor</th>
                                                        <th>Fecha</th>
                                                        <th>Recibido por</th>
                                                        <th>Monto Total</th>
                                                        <th>Operaciones</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr role="row" v-for="(notaCompra, index) in notaCompras" :key="notaCompra.id">
                                                        <td> {{ index+1 }}</td>
                                                        <td> {{ 'N00' + notaCompra.id }} </td>
                                                        <td> {{ notaCompra.proveedor }} </td>
                                                        <td> {{ notaCompra.fecha }} </td>
                                                        <td> {{ notaCompra.usuario }} </td>
                                                        <td> {{ notaCompra.montototal }} Bs </td>
                                                        <td>
                                                            <router-link
                                                                class="btn btn-info"
                                                                :to="'/nota-compra/' + encrypt(notaCompra.id) + '/show'"
                                                                data-toggle="tooltip"
                                                                data-placement="top"
                                                                title="Ver detalle">
                                                                <i class="fa fa-eye"></i>
                                                            </router-link>
                                                            <router-link
                                                                class="btn btn-warning"
                                                                :to="'/nota-compra/' + encrypt(notaCompra.id) + '/edit'"
                                                                data-toggle="tooltip"
                                                                data-placement="top"
                                                                title="Editar">
                                                                <i class="fa fa-edit"></i>
                                                            </router-link>
                                                            <button
                                                                class="btn btn-danger"
                                                                @click="eliminarNotaCompra(index,notaCompra.id)">
                                                                <i class="fa fa-eraser"
                                                                    style="cursor: pointer">
                                                                </i>
                                                            </button>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <!-- /.card-body -->
                        </div>
                        <!-- /.card -->
                    </div>

                </div><!-- /.row -->
            </div><!-- /.container-fluid -->
        </section>
        <!-- /.content -->
    </div>
</template>


<script>
import axiosClient from '../../../../utils/axiosClient';
import { btoa } from '../../../../mixins/util';
    export default {
        name: 'index',
        created() {
            this.getNotaCompras();
        },
        data() {
            return {

                notaCompras: [],
                roles: []
            }
        },
        methods: {
            getNotaCompras() {
                axiosClient.get('/nota_compra').then(response => {
                    let respuesta = response.data.data;
                    console.log(respuesta);
                    this.notaCompras = respuesta.notaCompras;
                }).catch(error => {
                    // console.log(error);
                    alert(error);
                    // this.setErrorUsuario(error);
                })
                .finally(() => {
                    // this.modalDestroyConfirmation = false;
                    // console.log('finally request');
                });
            },
            eliminarNotaCompra(index,id) {
                let notaCompra = this.getNotaCompra(id);
                this.$swal.fire({
                    title: 'Esta Seguro de Eliminar',
                    text: "Al nota Compra Nro: "+notaCompra.id+".",
                    icon: 'warning',
                    showCancelButton: true,
                    confirmButtonColor: '#d33',
                    cancelButtonColor: '#3085d6',
                    confirmButtonText: 'Eliminar',
                    cancelButtonText: 'Cancelar'
                })
                .then((result) => {
                    if (result.value) {
                        axiosClient.delete(
                            '/nota_compra/' + id)
                        .then(response => {
                            this.$swal.fire({
                                title: 'Success!',
                                text: response.data.message, //'Se ha eliminada el notaCompra exitosamente',
                                icon: 'success',
                                timer: 1000
                            });
                                // console.log(response.data.message);
                            this.notaCompras.splice(index, 1);
                        });
                    }
                })
            },
            rolName(id){
                let rol = this.roles.filter(rol => rol.id == id);
                return rol[0].nombre;
            },
            getNotaCompra(id) {
                let notaCompra = this.notaCompras.filter(notaCompra => notaCompra.id == id);
                return notaCompra[0];
            },
            encrypt(value){
                return btoa(value);
            }

        }
    }
</script>
<style scoped>
    /*Estilo CSS*/
</style>