<template>

    <div class="content-wrapper">
        <!-- Content Header (Page header) -->
        <div class="content-header">
            <div class="container-fluid">
                <div class="row mb-2">
                    <div class="col-sm-6">
                        <h1 class="m-0">Etapas</h1>
                    </div><!-- /.col -->
                    <div class="col-sm-6">
                        <ol class="breadcrumb float-sm-right">
                            <li class="breadcrumb-item"><a href="#">Admin</a></li>
                            <li class="breadcrumb-item active">Etapas</li>
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
                                    :to="{ name: 'etapa-create' }"
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
                                            <b-table
                                                :fields="fields"
                                                :items="etapas"
                                            >
                                                <!-- A virtual column -->
                                                <template #cell(index)="row">
                                                    {{ row.index + 1 }}
                                                </template>
                                                <template #cell(operaciones)="row">
                                                    <b-button size="sm" @click="row.toggleDetails" class="mr-2">
                                                        {{ row.detailsShowing ? 'Ocultar' : 'Mostrar'}} Detalle
                                                    </b-button>
                                                    <router-link
                                                        class="btn btn-info"
                                                        :to="'/etapa/' + encrypt(row.item.id_proyecto) + '/show'"
                                                        data-toggle="tooltip"
                                                        data-placement="top"
                                                        title="Editar">
                                                        <i class="fa fa-eye"></i>
                                                    </router-link>
                                                    <button
                                                        class="btn btn-danger"
                                                        @click="eliminarEtapa(row.index,row.item.id)">
                                                        <i class="fa fa-eraser"
                                                            style="cursor: pointer">
                                                        </i>
                                                    </button>
                                                </template>
                                                <template #row-details="row">
                                                        <b-card>
                                                        <b-row class="mb-2">
                                                            <b-col sm="2" class="text-sm-right"><b>Encagado de Proyecto:</b></b-col>
                                                            <b-col sm="2">{{ row.item.usuario }}</b-col>
                                                            <b-col sm="8">
                                                                <h5>Sub Etapas</h5>
                                                                <tr v-for="(etapa, index) in row.item.sub_etapas" :key="index">
                                                                <td>{{index+1}}</td>
                                                                <td>{{etapa.nombre}}</td>
                                                                <td>{{etapa.progreso}}</td>
                                                                <td>{{etapa.fecha_inicio}}</td>
                                                                <td>{{etapa.fecha_fin}}</td>
                                                            </tr>
                                                            </b-col>

                                                        </b-row>

                                                        <b-button size="sm" @click="row.toggleDetails">Hide Details</b-button>
                                                        </b-card>
                                                    </template>
                                            </b-table>
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
            this.getEtapas();
        },
        data() {
            return {
                etapas: [],
                fields: [
                    // A virtual column that doesn't exist in items
                    {key:'index', label:'N°', class: 'text-center', thStyle: {width: '1%'}},
                    {key:'nombre', label:'Etapas', class: 'text-center', thStyle: {width: '10%'}, sortable: true},
					{key:'proyecto', label:'Proyecto', class: 'text-center', thStyle: {width: '15%'}, sortable: true},
                    {key:'operaciones', label:'Operaciones', class: 'text-center', thStyle: {width: '12%'}, sortable: true},
				],
            }
        },
        methods: {
            getEtapas() {
                axiosClient.get('/etapa').then(response => {
                    console.log(response);
                    let respuesta = response.data.data;
                    this.etapas = respuesta.etapas;
                }).catch(error => {
                    // console.log(error);
                    alert(error);
                    // this.setErrorEtapa(error);
                })
                .finally(() => {
                    // this.modalDestroyConfirmation = false;
                    // console.log('finally request');
                });
            },
            eliminarEtapa(index,id) {
                let etapa = this.getEtapa(id);
                this.$swal.fire({
                    title: 'Esta Seguro de Eliminar',
                    text: "Al etapa "+etapa.nombre+".",
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
                            '/etapa/' + id)
                        .then(response => {
                            this.$swal.fire({
                                title: 'Success!',
                                text: response.data.message, //'Se ha eliminada el etapa exitosamente',
                                icon: 'success',
                                timer: 1000
                            });
                                // console.log(response.data.message);
                            this.etapas.splice(index, 1);
                        });
                    }
                })
            },
            getEtapa(id) {
                let etapa = this.etapas.filter(etapa => etapa.id == id);
                return etapa[0];
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