<template>
    <div class="content-wrapper">
        <!-- Content Header (Page header) -->
        <div class="content-header">
            <div class="container-fluid">
                <div class="row mb-2">
                    <div class="col-sm-6">
                        <h3 class="m-0">
                            Ingreso Stock
                        </h3>
                    </div><!-- /.col -->
                    <div class="col-sm-6">
                        <ol class="breadcrumb float-sm-right">
                            <li class="breadcrumb-item"><a href="#">Admin</a></li>
                            <li class="breadcrumb-item active">Stock</li>
                        </ol>
                    </div><!-- /.col -->
                </div><!-- /.row -->
            </div><!-- /.container-fluid -->
        </div>
        <!-- /.content-header -->
        <section class="content">
            <div class='container-fluid'>
                <!-- Main row -->
                <div class="row">
                    <div class='col-md-12'>
                        <form class='card' v-on:submit.prevent="storeStocks" >
                            <div class='card-header'>
                                <b-button
                                    @click="showModalDepepende"
                                    variant="primary">
                                    Materiales para Ingresar almacen
                                </b-button>
                                <b-button
                                    v-if="seGuardaForm"
                                    type="submit"
                                    variant="success">
                                    Guardar
                                </b-button>
                                <router-link
                                    :to="{ name: 'stock-index' }"
                                    class="btn btn-secondary">
                                    Regresar
                                </router-link>

                            </div>
                            <div class='card-body'>
                                <b-row>
                                    <div class="col-sm-12 text-center">
                                        <h3 class="text-success">Listas Stocks</h3>
                                    </div>
                                    <div class="col-sm-12"  style="display: block; width: 100%">
                                         <b-table
                                            class="table table-striped table-bordered table-hover"
                                            :fields="fieldsSelected"
                                            :items="selectedMateriales"
                                            small
                                            responsive="sm">
                                            <template #cell(index)="row">
                                                    {{ row.index + 1 }}
                                            </template>
                                            <template #cell(id_almacen)="data">
                                                <!-- <b-form-input v-model="data.item.stock_disponible"/> -->
                                                <b-form-select
                                                    required
                                                    v-model="data.item.id_almacen"
                                                    :options="almacenSelectOpcions"
                                                ></b-form-select>
                                            </template>
                                            <template #cell(fecha_venc)="data">
                                                <b-form-input required type="date" v-model="data.item.fecha_venc"/>
                                            </template>
                                            <template #cell(eliminar)="row">
                                                    <button class="btn btn-danger"
                                                        @click="eliminarMaterial(row.index)">
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
                                </b-row>
                                <b-row>
                                    <pre>
                                        {{selectedMateriales}}
                                    </pre>
                                </b-row>
                            </div>
                            <!-- /.card-body -->
                        </form>
                        <!-- /.card -->
                    </div>
                </div><!-- /.row -->
            </div><!-- /.container-fluid -->

        </section>
        <!-- /.content -->
        <!-- MODAL ADD MATERIAL DEPENDIENTE -->
        <b-modal
            id="modal-material-depende"
            ref="modal-material-depende"
            size="xl"
            hide-footer
            scrollable
            title="Lista Materiales">
            <div>
                <div class="row mb-1">
                    <!-- //filtros -->
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
                    <div class="col-sm-3 offset-sm-3 text-right">
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
                    <!-- filtros table -->
                </div>
                <b-row>
                    <div class="col-sm-12">
                        <!-- Tabla -->
                        <b-table
                            class="table table-striped table-bordered table-hover"
                            :fields="fields"
                            :items="materialesStock"
                            :filter="filter"
                            :current-page="currentPage"
                            :per-page="perPage"
                            :busy="isBusy"
                            small
                            selectable
                            :select-mode="selectMode"
                            ref="selectableTableMaterial"
                            @filtered="onFiltered"
                            responsive="sm"
                            @row-selected="onRowSelected">
                            <!-- Example scoped slot for select state illustrative purposes -->
                            <template #cell(selected)="{ rowSelected }">
                                <template v-if="rowSelected">
                                <span aria-hidden="true">&check;</span>
                                <span class="sr-only">Selected</span>
                                </template>
                                <template v-else>
                                <span aria-hidden="true">&nbsp;</span>
                                <span class="sr-only">Not selected</span>
                                </template>
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
                        <div class="col-sm-8"></div>
                        <div class="col-sm-4">
                            <!-- Paginacion -->
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
                </b-row>
            </div>
        </b-modal> <!-- MODAL ADD MATERIAL DEPENDIENTE -->
    </div>
</template>

<script>
import axiosClient from '../../../../utils/axiosClient';
import { atob } from '../../../../mixins/util';
    export default {
        name: 'update',
        created() {
            this.getData();
        },
        data() {
            return {
                totalRows: 1,
                currentPage: 1,
                perPage: 50,
                pageOptions: [5, 10, 15, 30, 50],
                filter: null,
                isBusy: false,
                seGuarda: false,
                selectMode: 'multi',
                selectedMateriales: [],
                formData: {
                    detalleStocks: [],
                },
                materialesStock: [],
                almacenes: [],
                fields: [
                    // A virtual column that doesn't exist in items
                    {key:'selected', label:'☑', class: 'text-center', thStyle: {width: '1%'}},
                    {key:'nro_material', label:'Codigo', class: 'text-center', thStyle: {width: '2%'}, sortable: true},
					{key:'nombre', label:'Nombre', class: 'text-center', thStyle: {width: '20%'}, sortable: true},
                    {key:'cantidad', label:'Cantidad', class: 'text-center', thStyle: {width: '4%'}, sortable: true},
					{key:'precio', label:'Precio', class: 'text-center', thStyle: {width: '4%'}, sortable: true},
                    {key:'categoria', label:'Categoria', class: 'text-center', thStyle: {width: '8%'}, sortable: true},
				],
                fieldsSelected: [
                    // A virtual column that doesn't exist in items
                    {key:'index', label:'N°', class: 'text-center', thStyle: {width: '1%'}},
                    {key:'id_almacen', label:'Alamcen', class: 'text-center', thStyle: {width: '10%'}, sortable: true},
                    {key:'nro_material', label:'Codigo', class: 'text-center', thStyle: {width: '2%'}, sortable: true},
					{key:'nombre', label:'Nombre', class: 'text-center', thStyle: {width: '20%'}, sortable: true},
                    {key:'cantidad', label:'Cantidad', class: 'text-center', thStyle: {width: '4%'}, sortable: true},
					{key:'fecha_venc', label:'Fecha vencimiento', class: 'text-center', thStyle: {width: '8%'}, sortable: true},
                    {key:'eliminar', label:' ', class: 'text-center', thStyle: {width: '1%'}, sortable: true},
				],
                errors: []
            }
        },
        computed: {
            seGuardaForm() {
                console.log( typeof this.selectedMateriales);
                if( typeof this.selectedMateriales === "undefined" ){
                    this.seGuarda = false;
                }else{
                    this.seGuarda = this.selectedMateriales.length > 0;
                }
                return this.seGuarda;
            },
            almacenSelectOpcions() {
                let selectOptions = [{value: '', text: "Seleccione una Almacen"}];
                this.almacenes.forEach(almacen => {
                    selectOptions.push({value: almacen.id, text: almacen.nombre});
                });
                return selectOptions;
            },
        },
        methods: {
            getData() {

            },
            getMateriales() {
                this.isBusy = true;
                const params = {
                    page: 1,
                    per_page: this.perPage,
                    filter_key: this.filter
                };
                axiosClient.get(
                    '/stock/create',
                    {params}
                ).then(response => {
                    let respuesta = response.data.data;
                    this.isBusy = false;
                    console.log(respuesta);
                    this.materialesStock = respuesta.materiales;
                    this.almacenes = respuesta.almacenes;
                    this.totalRows = respuesta.total;

                }).catch(error => {
                    console.log(error);
                    // alert(error);
                    // this.setErrorUsuario(error);
                });
            },
            eliminarMaterial(index) {
                this.selectedMateriales.splice(index, 1);
            },
            showModalDepepende(){
                this.getMateriales();
                this.$refs['modal-material-depende'].show()
            },
            onRowSelected(items){
                this.selectedMateriales = items;
            },
            clearSelected(){
                this.$refs.selectableTableMaterial.clearSelected();
            },
            storeStocks() {
                if( this.validarFormulario() ) {
                    this.cargarFormData();
                    console.log(this.formData);
                    this.$swal.fire({
                        title: 'Success',
                        text: "Se ha creado exitosamente",
                        icon: 'success',
                        timer: 1000
                    });
                    axiosClient.post(
                        '/stock',
                        this.formData)
                    .then((response) => {
                        console.log(response.data);
                        this.$router.push({name: 'stock-index'});
                    }).catch(error => {
                        console.log(error);
                        // alert(error);
                        // this.setErrorUsuario(error);
                    });
                }
            },
            cargarFormData() {
                this.selectedMateriales.forEach( material => {
                    this.formData.detalleStocks.push({
                        id_notacompra: material.id_notacompra,
                        cod_material: material.codigo,
                        fecha_vencimiento: material.fecha_venc,
                        cantidad: material.cantidad,
                        precio: material.precio,
                        id_almacen: material.id_almacen,
                    });
                });
            },
            validarFormulario(){
                return true;
            },
            desencrypt(value) {
                return atob(value);
            },
            onFiltered(filteredItems) {
				// Trigger pagination to update the number of buttons/pages due to filtering
				this.totalRows = filteredItems.length
				this.currentPage = 1
			},

        },
        watch: {
            selectedMateriales: function(newValue, oldValue) {
                console.log(newValue);
                console.log(oldValue);
            },
        }
    }
</script>
<style scoped>
    /*Estilo CSS*/
</style>