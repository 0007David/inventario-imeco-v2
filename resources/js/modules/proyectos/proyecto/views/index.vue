<template>

    <div class="content-wrapper">
        <!-- Content Header (Page header) -->
        <div class="content-header">
            <div class="container-fluid">
                <div class="row mb-2">
                    <div class="col-sm-6">
                        <h1 class="m-0">Proyectos</h1>
                    </div><!-- /.col -->
                    <div class="col-sm-6">
                        <ol class="breadcrumb float-sm-right">
                            <li class="breadcrumb-item"><a href="#">Admin</a></li>
                            <li class="breadcrumb-item active">Proyectos</li>
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
                                    :to="{ name: 'proyecto-create' }"
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
                                            <table id="tablaProyecto" class="table table-bordered table-hover dataTable" role="grid" aria-describedby="example2_info">
                                                <thead>
                                                    <tr role="row">
                                                        <th>Nro</th>
                                                        <th>Nombre</th>
                                                        <th>Encargado</th>
                                                        <th>Fecha Inicio</th>
                                                        <th>Fecha Fin</th>
                                                        <th>Operaciones</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr role="row" v-for="(proyecto, index) in proyectos" :key="index">
                                                        <td> {{ index+1 }}</td>
                                                        <td> {{ proyecto.nombre }} </td>
                                                        <td> {{ proyecto.usuario }} </td>
                                                        <td> {{ proyecto.fecha_inicio }}</td>
                                                        <td> {{ proyecto.fecha_fin }}</td>
                                                        <td>
                                                            <router-link
                                                                class="btn btn-warning"
                                                                :to="'/proyecto/' + encrypt(proyecto.id) + '/edit'"
                                                                data-toggle="tooltip"
                                                                data-placement="top"
                                                                title="Editar">
                                                                <i class="fa fa-edit"></i>
                                                            </router-link>
                                                            <button
                                                                class="btn btn-danger"
                                                                @click="eliminarProyecto(index,proyecto.id)">
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
            this.getProyectos();
        },
        data() {
            return {
                proyectos: [],
            }
        },
        methods: {
            getProyectos() {
                axiosClient.get('/proyecto').then(response => {
                    console.log(response);
                    let respuesta = response.data.data;
                    this.proyectos = respuesta.proyectos;
                }).catch(error => {
                    // console.log(error);
                    alert(error);
                    // this.setErrorProyecto(error);
                })
                .finally(() => {
                    // this.modalDestroyConfirmation = false;
                    // console.log('finally request');
                });
            },
            eliminarProyecto(index,id) {
                let proyecto = this.getProyecto(id);
                this.$swal.fire({
                    title: 'Esta Seguro de Eliminar',
                    text: "Al proyecto "+proyecto.name+".",
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
                            '/proyecto/' + id)
                        .then(response => {
                            this.$swal.fire({
                                title: 'Success!',
                                text: response.data.message, //'Se ha eliminada el proyecto exitosamente',
                                icon: 'success',
                                timer: 1000
                            });
                                // console.log(response.data.message);
                            this.proyectos.splice(index, 1);
                        });
                    }
                })
            },
            getProyecto(id) {
                let proyecto = this.proyectos.filter(proyecto => proyecto.id == id);
                return proyecto[0];
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