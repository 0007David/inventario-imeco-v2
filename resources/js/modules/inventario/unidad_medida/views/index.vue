<template>
    <div class="content-wrapper">
        <!-- Content Header (Page header) -->
        <div class="content-header">
            <div class="container-fluid">
                <div class="row mb-2">
                    <div class="col-sm-6">
                        <h1 class="m-0">Unidad de medida</h1>
                    </div><!-- /.col -->
                    <div class="col-sm-6">
                        <ol class="breadcrumb float-sm-right">
                            <li class="breadcrumb-item"><a href="#">Admin</a></li>
                            <li class="breadcrumb-item active">Unidad medida</li>
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
                                    :to="{ name: 'unidadmedida-create' }"
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
                                            <table class="table table-bordered table-hover dataTable" role="grid">
                                                <thead>
                                                    <tr role="row">
                                                        <th>Codigo</th>
                                                        <th>Nombre</th>
                                                        <th>Editar</th>
                                                        <th>Eliminar</th>
                                                    </tr>
                                                </thead>
                                                <tbody>

                                                    <tr role="row" v-for="(unidad, index) in unidadmedidas" :key="unidad.id">
                                                        <td> {{ unidad.id }}</td>
                                                        <td> {{ unidad.nombre }} </td>
                                                        <td>
                                                            <router-link
                                                                class="btn btn-warning"
                                                                :to="'/unidadmedida/' + encrypt(unidad.id) + '/edit'"
                                                                data-toggle="tooltip"
                                                                data-placement="top"
                                                                title="Editar">
                                                                <i class="fa fa-edit"></i>
                                                            </router-link>
                                                        </td>
                                                        <td>
                                                            <button
                                                                class="btn btn-danger"
                                                                @click="eliminarUnidadMedida(index,unidad.id)">
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
        this.getUnidadMedidas();
    },
    data() {
        return {
            unidadmedidas: []
        }
    },
    methods: {
        getUnidadMedidas() {
            axiosClient.get('/unidadmedida').then(response => {
                    // console.log(response);
                    let respuesta = response.data.data;
                    this.unidadmedidas = respuesta.unidadmedidas;
                }).catch(error => {
                    console.log(error);
                    // alert(error);
                    // this.setErrorAlmacen(error);
                })
                .finally(() => {
                    // this.modalDestroyConfirmation = false;
                    // console.log('finally request');
                });

        },

        eliminarUnidadMedida(index, id) {
            let unidad = this.getUnidadMedida(id);
                this.$swal.fire({
                    title: 'Esta Seguro de Eliminar',
                    text: "A la unidad "+unidad.nombre+".",
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
                            '/unidadmedida/' + id)
                        .then(response => {
                            this.$swal.fire({
                                title: 'Success!',
                                text: response.data.message, //'Se ha eliminada el almacen exitosamente',
                                icon: 'success',
                                timer: 1000
                            });
                                // console.log(response.data.message);
                            this.unidadmedidas.splice(index, 1);
                        });
                    }
                })

        },
        getUnidadMedida(id) {
            let unidad = this.unidadmedidas.filter(unidad => unidad.id == id);
                return unidad[0];
        },
        encrypt(value){
                return btoa(value);
        }
    }
}
</script>
