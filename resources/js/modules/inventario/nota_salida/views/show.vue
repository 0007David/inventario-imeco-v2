<template>
    <div class="content-wrapper">
        <!-- Content Header (Page header) -->
        <div class="content-header">
            <div class="container-fluid">
                <div class="row mb-2">
                    <div class="col-sm-6">
                        <h3 class="m-0">
                            Material:
                            <small>{{material.nombre}}</small>
                        </h3>
                    </div><!-- /.col -->
                    <div class="col-sm-6">
                        <ol class="breadcrumb float-sm-right">
                            <li class="breadcrumb-item"><a href="#">Admin</a></li>
                            <li class="breadcrumb-item active">Material</li>
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
                        <div class='card'>
                            <div class='card-header'>
                                <b-button
                                    @click="showModalDepepende"
                                    variant="primary">
                                    Agregar Material Dependientes
                                </b-button>
                                <b-button
                                    v-if="seGuardaForm"
                                    @click="storeMateriales"
                                    variant="success">
                                    Guardar
                                </b-button>
                                <router-link
                                    :to="{ name: 'material-index' }"
                                    class="btn btn-secondary">
                                    Regresar
                                </router-link>

                            </div>
                            <div class='card-body'>
                                <b-row>
                                    <div class='form-group col-md-3'>
                                        <label htmlFor='codigo'>
                                            Codigo
                                        </label>
                                        <input
                                            id="codigo" type="text" readonly
                                            class="form-control"
                                            v-model="formData.codigo_nota">
                                    </div>
                                    <div class='form-group col-md-9'>
                                        <label htmlFor='nombre'>
                                            Destino
                                        </label>
                                        <b-form-input
                                            id="nombre" v-model="formData.nombre"
                                        ></b-form-input>
                                    </div>
                                </b-row>
                                <b-row>
                                    <div class='form-group col-md-6'>
                                        <label htmlFor='nombre'>
                                            Nombre
                                        </label>
                                        <input
                                            id="nombre"
                                            required
                                            type="date"
                                            class="form-control"
                                            v-model="formData.fecha">
                                    </div>
                                </b-row>
                                <b-row>
                                    <div class="col-sm-12 text-center">
                                        <h3 class="text-success">Detalle nota de salida</h3>
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
                                            <template #table-busy>
                                                <div class="text-center text-danger my-2">
                                                    <b-spinner class="align-middle"></b-spinner>
                                                    <strong>Loading...</strong>
                                                </div>
                                            </template>
                                        </b-table>
                                    </div>
                                </b-row>
                            </div>
                            <!-- /.card-body -->
                        </div>
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
            title="Lista Productos Dependiente">
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
                    <!-- filtros table -->
                </div>
                <b-row>
                    <div class="col-sm-12">
                        <b-button size="sm" @click="clearSelected">DesSeleccionar Todo</b-button>
                        <hr>
                        <!-- Tabla -->
                        <b-table
                            class="table table-striped table-bordered table-hover"
                            :fields="fields"
                            :items="materialesDependen"
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
                // estado: true,
                totalRows: 1,
                currentPage: 1,
                perPage: 50,
                pageOptions: [5, 10, 15, 30, 50],
                filter: null,
                // ----
                isBusy: false,
                seGuarda: false,
                selectMode: 'multi',
                selectedMateriales: [],
                formData: {
                    codigo_nota: 'Nota-0001',
                    nombre: '',
                    fecha: '',
                    detalleNotaSalida: [],
                    materialesHijos: [],
                    codigoMaterialPadre: null,
                },
                material: {},
                materialesDependen: [],
                fields: [
                    // A virtual column that doesn't exist in items
                    {key:'selected', label:'Selected ', class: 'text-center', thStyle: {width: '4%'}},
                    {key:'nro_material', label:'Codigo Material', class: 'text-center', thStyle: {width: '5%'}, sortable: true},
					{key:'nombre', label:'Nombre', class: 'text-center', thStyle: {width: '20%'}, sortable: true},
					{key:'categoria', label:'Categoria', class: 'text-center', thStyle: {width: '8%'}, sortable: true},
                    {key:'unidad_medida', label:'Unidad Medida', class: 'text-center', thStyle: {width: '8%'}, sortable: true},
				],
                fieldsSelected: [
                    // A virtual column that doesn't exist in items
                    {key:'index', label:'N°', class: 'text-center', thStyle: {width: '1%'}},
                    {key:'nro_material', label:'Codigo Material', class: 'text-center', thStyle: {width: '5%'}, sortable: true},
					{key:'nombre', label:'Nombre', class: 'text-center', thStyle: {width: '20%'}, sortable: true},
					{key:'categoria', label:'Categoria', class: 'text-center', thStyle: {width: '8%'}, sortable: true},
                    {key:'unidad_medida', label:'Unidad Medida', class: 'text-center', thStyle: {width: '8%'}, sortable: true},
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
            }
        },
        methods: {
            getData() {
                this.isBusy = true;
                axiosClient.get(
                    '/material/'+ this.desencrypt(this.$route.params.id) + '/show'
                ).then(response => {
                    let respuesta = response.data.data;
                    // console.log(respuesta);
                    this.material = respuesta.material;
                }).catch(error => {
                    // console.log(error);
                    alert(error);
                    // this.setErrorUsuario(error);
                });
                axiosClient.get(
                    '/depende/'+ this.desencrypt(this.$route.params.id) + '/show'
                ).then(response => {
                    let respuesta = response.data.data;
                    console.log(respuesta);
                    this.selectedMateriales = respuesta.materiales;
                    this.isBusy = false;
                }).catch(error => {
                    // console.log(error);
                    alert(error);
                    // this.setErrorUsuario(error);
                });
            },
            getMateriales() {
                this.isBusy = true;
                const params = {
                    page: 1,
                    per_page: this.perPage,
                    filter_key: this.filter
                };
                axiosClient.get(
                    '/depende',
                    {params}
                ).then(response => {
                    let respuesta = response.data.data;
                    this.isBusy = false;
                    console.log(respuesta);
                    this.materialesDependen = respuesta.materiales;
                    this.totalRows = respuesta.total;

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
            storeMateriales() {
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
                        '/depende',
                        this.formData)
                    .then((response) => {
                        console.log(response.data);
                        this.$router.push({name: 'material-index'});
                    });
                }
            },
            cargarFormData() {
                this.selectedMateriales.forEach(material => {
                    this.formData.materialesHijos.push({codigo: material.codigo});
                });
                this.formData.codigoMaterialPadre = this.desencrypt(this.$route.params.id);
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