<template>

    <div class="content-wrapper">
        <!-- Content Header (Page header) -->
        <div class="content-header">
            <div class="container-fluid">
                <div class="row mb-2">
                    <div class="col-sm-6">
                        <h1 class="m-0">Materiales</h1>
                    </div><!-- /.col -->
                    <div class="col-sm-6">
                        <ol class="breadcrumb float-sm-right">
                            <li class="breadcrumb-item"><a href="#">Admin</a></li>
                            <li class="breadcrumb-item active">Materiales</li>
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
                                    :to="{ name: 'material-create' }"
                                    class="btn btn-primary">
                                    Nuevo
                                </router-link>
                                <router-link
                                    :to="{ name: 'stock-index' }"
                                    class="btn btn-primary">
                                    Stock
                                </router-link>
                            </div>
                            <!-- /.card-header -->
                            <div class="card-body">
                                <div class="dataTables_wrapper dt-bootstrap4">
                                    <div class="row mb-1">
                                        <div class="col-sm-3">
                                            <div class="btn-group">
                                            <span class="pt-2 mr-1">Mostrar </span>
                                            <b-form-select
                                                id="per-page-select"
                                                v-model="perPage"
                                                :options="pageOptions"
                                                size="sm"
                                            ></b-form-select>
                                            <span class="pt-2 ml-1"> Registros</span>
                                            </div>
                                        </div>
                                        <div class="col-sm-3 offset-sm-6 text-right">
                                            <div class="form-group row">
                                                <div class="col-sm-4"></div>
                                                <div class="col-sm-8">
                                                    <input type="search"
                                                        class="form-control"
                                                        v-model="filter"
                                                        placeholder="Buscar"
                                                    >
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-sm-12" style="display: block; width: 100%">
                                            <b-table
                                                class="table table-striped table-bordered table-hover"
                                                :fields="fields"
                                                :items="materiales"
                                                :filter="filter"
                                                :current-page="currentPage"
                                                :per-page="perPage"
                                                :busy="isBusy"
                                                small
                                                @filtered="onFiltered">
                                                <!-- A virtual column -->
                                                <template #cell(index)="row">
                                                    {{ row.index + 1 }}
                                                </template>
                                                <template #cell(operaciones)="row">
                                                    <router-link
                                                        v-if="row.item.es_padre"
                                                        class="btn btn-info"
                                                        title="Add Dependencia"
                                                        :to="'/material/' + encrypt(row.item.codigo) + '/show'"
                                                        data-toggle="tooltip"
                                                        data-placement="top">
                                                        <i class="fa fa-eye" style="cursor: pointer"></i>
                                                    </router-link>
                                                    <router-link
                                                        class="btn btn-warning"
                                                        :to="'/material/' + encrypt(row.item.codigo) + '/edit'"
                                                        data-toggle="tooltip"
                                                        data-placement="top"
                                                        title="Editar">
                                                        <i class="fa fa-edit" style="cursor: pointer"></i>
                                                    </router-link>
                                                    <button class="btn btn-danger"
                                                        @click="eliminarMaterial(row.index, row.item.codigo)">
                                                        <i class="fa fa-eraser"
                                                            style="cursor: pointer">
                                                        </i>
                                                    </button>
                                                </template>
                                                <template #table-busy>
                                                    <div class="text-center text-danger my-2">
                                                    <b-spinner class="align-middle"></b-spinner>
                                                    <strong>Loading...</strong>
                                                    </div>
                                                </template>
                                            </b-table>
                                        </div>
                                        <b-row>
                                            <div class="col-sm-8">
                                            </div>
                                            <div class="col-sm-4">
                                                <b-pagination
                                                    v-model="currentPage"
                                                    :total-rows="totalRows"
                                                    :per-page="perPage"
                                                    align="fill"
                                                    size="sm"
                                                    class="my-0"
                                                ></b-pagination>
                                            </div>
                                        </b-row>
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
            this.getMateriales();
        },
        data() {
            return {
                pagina_opciones: [10 ,20 , 30, 50, 100],
				por_pagina: 50,
				pagina_actual: 1,
				total_filas: 1,
                // estado: true,
                totalRows: 1,
                currentPage: 1,
                perPage: 50,
                pageOptions: [5, 10, 15, 30, 50],
                filter: null,
                // ----
                isBusy: false,
                materiales: [],
                categorias: [],
                unidadesMedidas: [],
                fields: [
                    // A virtual column that doesn't exist in items
                    {key:'index', label:'N°', class: 'text-center', thStyle: {width: '1%'}},
                    {key:'nro_material', label:'Codigo Material', class: 'text-center', thStyle: {width: '6%'}, sortable: true},
					{key:'nombre', label:'Nombre', class: 'text-center', thStyle: {width: '25%'}, sortable: true},
					{key:'precio', label:'Precio', class: 'text-center', thStyle: {width: '4%'}, sortable: true},
					{key:'categoria', label:'Categoria', class: 'text-center', thStyle: {width: '8%'}, sortable: true},
                    {key:'unidad_medida', label:'Unidad Medida', class: 'text-center', thStyle: {width: '8%'}, sortable: true},
                    {key:'operaciones', label:'Operaciones', class: 'text-center', thStyle: {width: '6%'}, sortable: true},
				],
            }
        },
        mounted() {
            // Set the initial number of items
            this.totalRows = this.materiales.length
        },
        methods: {
            getMateriales() {
                this.isBusy = true;
                const params = {
                    page: 1,
                    per_page: this.perPage,
                    filter_key: this.filter
                };
                axiosClient.get(
                    '/material',
                    { params }
                ).then(response => {
                    console.log(response);
                    let respuesta = response.data.data;
                    this.materiales = respuesta.materiales;
                    this.totalRows = respuesta.total;
                    this.isBusy = false;
                }).catch(error => {
                    console.log(error);
                    alert(error);
                    // this.setErrorUsuario(error);
                })
                .finally(() => {
                    // this.modalDestroyConfirmation = false;
                    // console.log('finally request');
                });
            },
            eliminarMaterial(index,id) {
                let material = this.getMaterial(id);
                this.$swal.fire({
                    title: 'Esta Seguro de Eliminar',
                    text: "Al material "+(material.nombre.length > 13)? material.nombre.substring(0,45)+'...': material.nombre +".",
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
                            '/material/' + id)
                        .then(response => {
                            this.$swal.fire({
                                title: 'Success!',
                                text: response.data.message, //'Se ha eliminada el material exitosamente',
                                icon: 'success',
                                timer: 1000
                            });
                                // console.log(response.data.message);
                            this.materiales.splice(index, 1);
                        });
                    }
                })
            },
            categoriaName(id){
                let categoria = this.categorias.filter(categoria => categoria.id == id);
                return categoria[0].nombre;
            },
            unidadMedidaName(id){
                let unidadMedida = this.unidadesMedidas.filter(unidadMedida => unidadMedida.id == id);
                return unidadMedida[0].nombre;
            },
            getMaterial(id) {
                let material = this.materiales.filter(material => material.codigo == id);
                return material[0];
            },
            encrypt(value){
                return btoa(value);
            },
            onFiltered(filteredItems) {
				// Trigger pagination to update the number of buttons/pages due to filtering
				this.totalRows = filteredItems.length
				this.currentPage = 1
			},
        }
    }
</script>
<style scoped>
    /*Estilo CSS*/
</style>