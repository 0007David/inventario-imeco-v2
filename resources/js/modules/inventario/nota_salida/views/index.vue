<template>

    <div class="content-wrapper">
        <!-- Content Header (Page header) -->
        <div class="content-header">
            <div class="container-fluid">
                <div class="row mb-2">
                    <div class="col-sm-6">
                        <h1 class="m-0">Lista Notas de Salidas</h1>
                    </div><!-- /.col -->
                    <div class="col-sm-6">
                        <ol class="breadcrumb float-sm-right">
                            <li class="breadcrumb-item"><a href="#">Admin</a></li>
                            <li class="breadcrumb-item active">Notas Salida</li>
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
                                    :to="{ name: 'nota-salida-create' }"
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
                                                        <th>Nro Nota</th>
                                                        <th>Destino</th>
                                                        <th>Fecha</th>
                                                        <th>Emitido por</th>
                                                        <th>Operaciones</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr role="row" v-for="(notaSalida, index) in notaSalidas" :key="notaSalida.id">
                                                        <td> {{ index+1 }}</td>
                                                        <td> {{ 'Nota-000' +index }} </td>
                                                        <td> {{ notaSalida.nombre }} </td>
                                                        <td> {{ notaSalida.fecha }} </td>
                                                        <td> {{ notaSalida.usuario }} </td>
                                                        <td>
                                                            <router-link
                                                                class="btn btn-info"
                                                                :to="'/nota-salida/' + encrypt(notaSalida.id) + '/show'"
                                                                data-toggle="tooltip"
                                                                data-placement="top"
                                                                title="Ver detalle">
                                                                <i class="fa fa-eye"></i>
                                                            </router-link>
                                                            <router-link
                                                                class="btn btn-warning"
                                                                :to="'/nota-salida/' + encrypt(notaSalida.id) + '/edit'"
                                                                data-toggle="tooltip"
                                                                data-placement="top"
                                                                title="Editar">
                                                                <i class="fa fa-edit"></i>
                                                            </router-link>
                                                            <button
                                                                class="btn btn-danger"
                                                                @click="eliminarNotaSalida(index,notaSalida.id)">
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
            this.getNotaSalidas();
        },
        data() {
            return {

                notaSalidas: [],
                roles: []
            }
        },
        methods: {
            getNotaSalidas() {
                axiosClient.get('/nota_salida').then(response => {
                    let respuesta = response.data.data;
                    console.log(respuesta);
                    this.notaSalidas = respuesta.notaSalidas;
                }).catch(error => {
                    console.log(error);
                    // alert(error);
                    // this.setErrorUsuario(error);
                })
                .finally(() => {
                    // this.modalDestroyConfirmation = false;
                    // console.log('finally request');
                });
            },
            eliminarNotaSalida(index,id) {
                let notaSalida = this.getNotaSalida(id);
                this.$swal.fire({
                    title: 'Esta Seguro de Eliminar',
                    text: "Al nota salida Nro: "+notaSalida.id+".",
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
                            '/nota_salida/' + id)
                        .then(response => {
                            this.$swal.fire({
                                title: 'Success!',
                                text: response.data.message, //'Se ha eliminada el notaSalida exitosamente',
                                icon: 'success',
                                timer: 1000
                            });
                                // console.log(response.data.message);
                            this.notaSalidas.splice(index, 1);
                        });
                    }
                })
            },
            rolName(id){
                let rol = this.roles.filter(rol => rol.id == id);
                return rol[0].nombre;
            },
            getNotaSalida(id) {
                let notaSalida = this.notaSalidas.filter(notaSalida => notaSalida.id == id);
                return notaSalida[0];
            },
            getRandomString() {
                let result           = '';
                let characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
                let charactersLength = characters.length;
                for ( let i = 0; i < length; i++ ) {
                    result += characters.charAt(Math.floor(Math.random() * charactersLength));
                }
                return result;
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