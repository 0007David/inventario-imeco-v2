<template>
    <div class="content-wrapper">
        <!-- Content Header (Page header) -->
        <div class="content-header">
            <div class="container-fluid">
                <div class="row mb-2">
                    <div class="col-sm-6">
                        <h3 class="m-0">
                            Crear Planilla
                        </h3>
                    </div><!-- /.col -->
                    <div class="col-sm-6">
                        <ol class="breadcrumb float-sm-right">
                            <li class="breadcrumb-item"><a href="#">Admin</a></li>
                            <li class="breadcrumb-item active">Planilla</li>
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
                                    Agregar Materiales
                                </b-button>
                                <b-button
                                    v-if="seGuardaForm"
                                    @click="storeMateriales"
                                    variant="success">
                                    Guardar
                                </b-button>
                                <router-link
                                    :to="{ name: 'planilla-index' }"
                                    class="btn btn-secondary">
                                    Regresar
                                </router-link>
                            </div>
                            <div class='card-body'>
                                <b-row>
                                    <div class='form-group col-md-2'>
                                        <label htmlFor='codigo'>
                                            Codigo
                                        </label>
                                        <input
                                            id="codigo"
                                            required
                                            type="text"
                                            class="form-control"
                                            v-model="formData.planilla_numero">
                                    </div>
                                    <div class='form-group col-md-5'>
                                        <label htmlFor='categoria'>
                                            Fecha
                                        </label>
                                        <input
                                            id="fecha"
                                            required
                                            type="date"
                                            placeholder="dd/mm/yyyy"
                                            min="1997/01/01" max="2030/12/31"
                                            class="form-control"
                                            v-model="formData.fecha">
                                        <!-- <b-form-input
                                            id="categoria"
                                            v-model="formData.fecha"
                                        ></b-form-input> -->
                                    </div>
                                    <div class='form-group col-md-4'>
                                        <label htmlFor='proyecto'>
                                            Proyecto
                                        </label>
                                        <select
                                            id="proyecto"
                                            required
                                            class="form-control"
                                            v-model="formData.proyecto_id">
                                            <option value="">Seleccione proyecto</option>
                                            <option v-for="proyecto in proyectos" :key="proyecto.id" :value="proyecto.id">{{proyecto.nombre}}</option>
                                        </select>
                                    </div>
                                </b-row>
                                <b-row>
                                    <div class='form-group col-md-12'>
                                        <label htmlFor='descripcion'>
                                            Descripcion
                                        </label>
                                        <textarea
                                            id="descripcion"
                                            cols="18" rows="2"
                                            class="form-control"
                                            v-model="formData.descripcion">
                                        </textarea>
                                    </div>
                                </b-row>
                                <b-row>
                                    <div class="col-sm-12 text-center">
                                        <h3 class="text-success">Detalle Planilla</h3>
                                    </div>
                                    <div class="col-sm-12"  style="display: block; width: 100%">
                                         <b-table
                                            class="table table-striped table-bordered table-hover"
                                            :fields="fieldsSelected"
                                            :items="selectedMateriales"
                                            small
                                            responsive="sm">
                                            <!-- cantidad -->
                                            <template #cell(cantidad)="row">
                                                <b-form-input  v-model="row.item.cantidad"/>
                                            </template>
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
                        <!-- <b-row>
                            <pre>{{formData}}</pre>
                        </b-row> -->
                    </div>
                </div><!-- /.row -->
            </div><!-- /.container-fluid -->

        </section>
        <!-- /.content -->
        <!-- MODAL ADD Planilla -->
        <b-modal
            id="modal-planilla-depende"
            ref="modal-planilla-depende"
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
                    <div class="col-sm-3">
                        <b-button size="sm" @click="clearSelected">DesSeleccionar Todo</b-button>
                    </div>
                    <div class="col-sm-3">
                        <div class="text-right">
                            <label class="switch switch-primary mr-3">
                                <input type="checkbox"
                                        id="filter" v-model="padres">
                                <span class="slider"></span>
                                <span>{{ labelPadres }}</span>
                            </label>
                        </div>
                    </div>
                    <div class="col-sm-3 offset-sm- text-right">
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
                            :items="materialesDependen"
                            :filter="filter"
                            :current-page="currentPage"
                            :per-page="perPage"
                            :busy="isBusy"
                            small
                            selectable
                            show-empty
                            :select-mode="selectMode"
                            ref="selectableTablePlanilla"
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
                            <template #empty>
                                <div class="text-center text-danger my-2">
                                <b-spinner class="align-middle"></b-spinner>
                                <strong>Cargar Detalle</strong>
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
        </b-modal> <!-- MODAL ADD Planilla DEPENDIENTE -->
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
                padres: false,
                selectMode: 'multi',
                selectedMateriales: [],
                formData: {
                    planilla_numero: '',
                    fecha: '', // new Date()
                    descripcion: '',
                    proyecto_id: '',
                    detallePlantilla: [],
                },
                proyectos: [],
                planilla: {},
                materialesDependen: [],
                fields: [
                    // A virtual column that doesn't exist in items
                    {key:'selected', label:'☑', class: 'text-center', thStyle: {width: '4%'}},
                    {key:'nro_material', label:'Codigo Planilla', class: 'text-center', thStyle: {width: '5%'}, sortable: true},
					{key:'nombre', label:'Nombre', class: 'text-center', thStyle: {width: '20%'}, sortable: true},
					{key:'categoria', label:'Categoria', class: 'text-center', thStyle: {width: '8%'}, sortable: true},
                    {key:'unidad_medida', label:'Unidad Medida', class: 'text-center', thStyle: {width: '8%'}, sortable: true},
				],
                fieldsSelected: [
                    // A virtual column that doesn't exist in items
                    {key:'index', label:'N°', class: 'text-center', thStyle: {width: '1%'}},
                    {key:'nro_material', label:'Codigo Planilla', class: 'text-center', thStyle: {width: '5%'}, sortable: true},
					{key:'nombre', label:'Nombre', class: 'text-center', thStyle: {width: '20%'}, sortable: true},
					{key:'cantidad', label:'Cantidad', class: 'text-center', thStyle: {width: '8%'}, sortable: true},
                    {key:'unidad_medida', label:'Unidad Medida', class: 'text-center', thStyle: {width: '8%'}, sortable: true},
				],
                errors: []
            }
        },
        methods: {
            getData() {
                this.isBusy = true;
                axiosClient.get(
                    '/planilla/create'
                ).then(response => {
                    let respuesta = response.data.data;
                    console.log(respuesta);
                    this.proyectos = respuesta.proyectos;
                }).catch(error => {
                    console.log(error);
                    // alert(error);
                    // this.setErrorUsuario(error);
                });
            },
            getMateriales() {
                this.isBusy = true;
                const params = {
                    page: 1,
                    per_page: this.perPage,
                    es_padre: this.padres,
                    filter_key: this.filter
                };
                console.log('Params: ', params);
                axiosClient.get(
                    '/planilla/materiales',
                    {params}
                ).then(response => {
                    console.log(response);
                    let respuesta = response.data.data;
                    this.isBusy = false;
                    console.log(respuesta);
                    this.materialesDependen = respuesta.materiales;
                    this.totalRows = respuesta.total;
                }).catch(error => {
                    console.log(error);
                    // alert(error);
                    // this.setErrorUsuario(error);
                });
            },
            showModalDepepende(){
                this.getMateriales();
                this.$refs['modal-planilla-depende'].show()
            },
            onRowSelected(items){
                console.log(items);
                this.selectedMateriales = items;
            },
            clearSelected(){
                this.$refs.selectableTablePlanilla.clearSelected();
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
                        '/planilla',
                        this.formData)
                    .then((response) => {
                        console.log(response);
                        this.$router.push({name: 'planilla-index'});
                    }).catch((error) => console.log(error));
                }
            },
            cargarFormData() {
                this.selectedMateriales.forEach(planilla => {
                    this.formData.detallePlantilla.push({codigo: planilla.codigo, cantidad: planilla.cantidad});
                });
            },
            validarFormulario(){
                return true;
            },
            desencrypt(value) {
                return atob(value);
            },
            onFiltered(filteredItems) {
				this.totalRows = filteredItems.length
				this.currentPage = 1
			},

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
			labelPadres() {
				if (this.padres) {
					return 'Solo Padres';
				}
				return 'Todos';
			}

        },
        watch: {
            selectedMateriales: function(newValue, oldValue) {
                console.log(newValue);
                console.log(oldValue);
            },
            padres(new1, old) {
                this.materialesDependen =[];
                this.getMateriales();
            }
        }
    }
</script>
<style scoped>
    /*Estilo CSS*/
    .switch {
        position: relative;
        display: inline-block;
        padding-left: 50px;
        height: 16px;
    }
    .switch-primary input:checked + .slider {
        /* background-color: #f4b375; */
        background-color:#9ecdffbd;
    }

    .switch input:checked + .slider {
        /* background-color: #f4b375; */
        background-color:#9ecdffbd;
    }

    .switch .slider {
        position: absolute;
        cursor: pointer;
        width: 42px;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        border-radius: 34px;
        /* background-color: #dee2e6; */
        transition: .4s;
    }
    .switch .slider:before {
        position: absolute;
        content: "";
        height: 24px;
        width: 24px;
        left: -1px;
        bottom: -4px;
        /* background-color: #fff; */
        background-color: #007bff;
        transition: .4s;
        border-radius: 50%;
        box-shadow: 0 3px 1px -2px rgb(0 0 0 / 20%), 0 2px 2px 0 rgb(0 0 0 / 14%), 0 1px 5px 0 rgb(0 0 0 / 12%);
    }
    .switch input {
        opacity: 0;
        width: 0;
        height: 0;
    }

    input[type=checkbox], input[type=radio] {
        box-sizing: border-box;
        padding: 0;
    }
</style>