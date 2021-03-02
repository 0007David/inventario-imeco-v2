<template>
    <div class="content-wrapper">

        <!-- Content Header (Page header) -->
        <div class="content-header">
            <div class="container-fluid">
                <div class="row mb-2">
                    <div class="col-sm-6">
                        <h1 class="m-0">Roles</h1>
                    </div><!-- /.col -->
                    <div class="col-sm-6">
                        <ol class="breadcrumb float-sm-right">
                            <li class="breadcrumb-item"><a href="#">Admin</a></li>
                            <li class="breadcrumb-item active">Roles</li>
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
                                    class="btn btn-primary"
                                    :to="{ name: 'proveedor-create'}">
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
                                        <div class="col-sm-12 table-responsive">
                                            <table id="tableRol" class="table table-bordered table-hover dataTable">
                                                <thead>
                                                    <tr role="row">
                                                        <th>Codigo</th>
                                                        <th>Nombre</th>
                                                        <th>Editar</th>
                                                        <th>Eliminar</th>
                                                    </tr>
                                                </thead>
                                                <tbody>

                                                    <tr scope="row" v-for="(rol, index) in roles">

                                                        <td>{{ index+1 }}</td>
                                                        <td>{{rol.nombre}}</td>
                                                        <td>
                                                            <router-link
                                                                :to="'/rol/' + encrypt(rol.id) + '/edit'"
                                                                data-toggle="tooltip"
                                                                data-placement="top"
                                                                title="Editar"
                                                                class="btn btn-warning">
                                                                <i class="fa fa-edit"></i>
                                                            </router-link>
                                                        </td>
                                                        <td>
                                                            <button
                                                                class="btn btn-danger"
                                                                @click="eliminarRol(index,rol.id)">
                                                                <i class="fa fa-eraser"
                                                                    style="cursor: pointer">
                                                                </i>
                                                            </button>
                                                        </td>
                                                    </tr>

                                                </tbody>
                                                <!-- <tfoot>
                                                    <tr>
                                                        <th rowspan="1" colspan="1"></th>
                                                        <th rowspan="1" colspan="1"></th>
                                                        <th rowspan="1" colspan="1">Nro</th>
                                                        <th rowspan="1" colspan="1">Nombre</th>
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
            this.getRoles();
        },
        data() {
            return {
                roles: []
            }
        },
        methods: {
            getRoles() {
                axiosClient.get('/rol').then(response => {
                    // console.log(response);
                    let respuesta = response.data.data;
                    this.roles = respuesta.roles;
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
            eliminarRol(index,id) {
                let rol = this.getRol(id);
                console.log(rol);
                console.log(index,id);
                this.$swal.fire({
                    title: 'Esta Seguro de Eliminar',
                    text: "Al rol "+rol.nombre+".",
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
                            '/rol/' + id)
                        .then(response => {
                            this.$swal.fire({
                                title: 'Success!',
                                text: response.data.message, //'Se ha eliminada el rol exitosamente',
                                icon: 'success',
                                timer: 1000
                            });
                                // console.log(response.data.message);
                            this.roles.splice(index, 1);
                        });
                    }
                })
            },
            getRol(id) {
                let rol = this.roles.filter(rol => rol.id == id);
                return rol[0];
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