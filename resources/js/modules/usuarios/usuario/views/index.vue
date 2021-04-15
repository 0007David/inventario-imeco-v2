<template>

    <div class="content-wrapper">
        <!-- Content Header (Page header) -->
        <div class="content-header">
            <div class="container-fluid">
                <div class="row mb-2">
                    <div class="col-sm-6">
                        <h1 class="m-0">Usuarios</h1>
                    </div><!-- /.col -->
                    <div class="col-sm-6">
                        <ol class="breadcrumb float-sm-right">
                            <li class="breadcrumb-item"><a href="#">Admin</a></li>
                            <li class="breadcrumb-item active">Usuarios</li>
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
                                    :to="{ name: 'usuario-create' }"
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
                                                        <th>Nro</th>
                                                        <th>Nombre</th>
                                                        <th>Correo</th>
                                                        <th>Rol</th>
                                                        <th>Editar</th>
                                                        <th>Eliminar</th>
                                                    </tr>
                                                </thead>
                                                <tbody>

                                                    <tr role="row" v-for="(usuario, index) in usuarios" :key="index">
                                                        <td> {{ index+1 }}</td>
                                                        <td> {{ usuario.name }} </td>
                                                        <td> {{ usuario.email }} </td>
                                                        <td> {{ rolName(usuario.id_rol) }}</td>
                                                        <td>
                                                            <router-link
                                                                class="btn btn-warning"
                                                                :to="'/usuario/' + encrypt(usuario.id) + '/edit'"
                                                                data-toggle="tooltip"
                                                                data-placement="top"
                                                                title="Editar">
                                                                <i class="fa fa-edit"></i>
                                                            </router-link>
                                                        </td>
                                                        <td>
                                                            <button
                                                                class="btn btn-danger"
                                                                @click="eliminarUsuario(index,usuario.id)">
                                                                <i class="fa fa-eraser"
                                                                    style="cursor: pointer">
                                                                </i>
                                                            </button>
                                                        </td>
                                                    </tr>

                                                </tbody>
                                                <!-- <tfoot>
                                                    <tr>
                                                        <th rowspan="1" colspan="1">Rendering engine</th>
                                                        <th rowspan="1" colspan="1">Browser</th>
                                                        <th rowspan="1" colspan="1">Platform(s)</th>
                                                        <th rowspan="1" colspan="1">Engine version</th>
                                                        <th rowspan="1" colspan="1">CSS grade</th>
                                                    </tr>
                                                </tfoot> -->
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
            this.getUsuarios();
            /*Echo.channel('imeco-realtime')
        .listen('OrderStatusChangedEvent',(e)=> {
            console.log('Mensaje en tiempo real');
        });
            Echo.channel('imeco-realtime').listen('OrderStatusChangedEvent', (e) => { console.log('Hello Sockect')});*/
        },
        data() {
            return {
                usuarios: [],
                roles: []
            }
        },
        mounted(){
            console.log('mounted1123');
            window.Echo.channel('imeco-realtime').listen('OrderStatusChangedEvent',(e)=>
                {
                    console.log('Mensaje en tiempo real');
                });
        },
        methods: {
            getUsuarios() {
                axiosClient.get('/usuario').then(response => {
                    // console.log(response);
                    let respuesta = response.data.data;
                    this.usuarios = respuesta.usuarios;
                    this.roles = respuesta.roles;
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
            eliminarUsuario(index,id) {
                let usuario = this.getUsuario(id);
                this.$swal.fire({
                    title: 'Esta Seguro de Eliminar',
                    text: "Al usuario "+usuario.name+".",
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
                            '/usuario/' + id)
                        .then(response => {
                            this.$swal.fire({
                                title: 'Success!',
                                text: response.data.message, //'Se ha eliminada el usuario exitosamente',
                                icon: 'success',
                                timer: 1000
                            });
                                // console.log(response.data.message);
                            this.usuarios.splice(index, 1);
                        });
                    }
                })
            },
            rolName(id){
                let rol = this.roles.filter(rol => rol.id == id);
                return rol[0].nombre;
            },
            getUsuario(id) {
                let usuario = this.usuarios.filter(usuario => usuario.id == id);
                return usuario[0];
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