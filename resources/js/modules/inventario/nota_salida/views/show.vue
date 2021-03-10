<template>
    <div class="content-wrapper">
        <!-- Content Header (Page header) -->
        <div class="content-header">
            <div class="container-fluid">
                <div class="row mb-2">
                    <div class="col-sm-6">
                        <h3 class="m-0">
                            Nota de Salida
                        </h3>
                    </div><!-- /.col -->
                    <div class="col-sm-6">
                        <ol class="breadcrumb float-sm-right">
                            <li class="breadcrumb-item"><a href="#">Admin</a></li>
                            <li class="breadcrumb-item active">Nota de Salida</li>
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
                                <router-link
                                    :to="{ name: 'nota-salida-index' }"
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
                                            value="Nota-0001">
                                    </div>
                                    <div class='form-group col-md-9'>
                                        <label htmlFor='nombre'>
                                            Destino
                                        </label>
                                        <b-form-input
                                            id="nombre" v-model="notaSalida.nombre"
                                        ></b-form-input>
                                    </div>
                                </b-row>
                                <b-row>
                                    <div class='form-group col-md-6'>
                                        <label htmlFor='fecha'>
                                            Nombre
                                        </label>
                                        <input
                                            id="fecha"
                                            required
                                            type="date"
                                            class="form-control"
                                            v-model="notaSalida.fecha">
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
                                            :items="detalleNotaSalida"
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
                isBusy: false,
                detalleNotaSalida: [],
                formData: {
                    codigo_nota: 'Nota-0001',
                    nombre: '',
                    fecha: '',
                    detalleNotaSalida: [],
                    materialesHijos: [],
                    codigoMaterialPadre: null,
                },
                notaSalida: {
                    id: 1,
                    codigo_nota: 'Nota-0001',
                    nombre: 'Pedido de Proyecto 1',
                    fecha: '2021-01-06',
                    usuario: 'Secretaria'
                },
                materialesDependen: [],
                fields: [
                    // A virtual column that doesn't exist in items
                    {key:'selected', label:'Selected ', class: 'text-center', thStyle: {width: '4%'}},
                    {key:'nro_material', label:'Codigo Material', class: 'text-center', thStyle: {width: '5%'}, sortable: true},
					{key:'nombre', label:'Nombre', class: 'text-center', thStyle: {width: '20%'}, sortable: true},
					{key:'categoria', label:'Categoria', class: 'text-center', thStyle: {width: '8%'}, sortable: true},
                    {key:'unidad_medida', label:'Unidad Medida', class: 'text-center', thStyle: {width: '8%'}, sortable: true},
				],
                // {"nro_material":"805595","codigo":3,"nombre":"Tubo SCH 10 4\" con costura ERW ASTM A795 IMPORTACI\u00d3N","id_stock":1,"cantidad":5}
                fieldsSelected: [
                    // A virtual column that doesn't exist in items
                    {key:'index', label:'N°', class: 'text-center', thStyle: {width: '1%'}},
                    {key:'nro_material', label:'Codigo Material', class: 'text-center', thStyle: {width: '5%'}, sortable: true},
					{key:'nombre', label:'Nombre', class: 'text-center', thStyle: {width: '20%'}, sortable: true},
					{key:'cantidad', label:'Cantidad', class: 'text-center', thStyle: {width: '8%'}, sortable: true},
                    // {key:'unidad_medida', label:'Unidad Medida', class: 'text-center', thStyle: {width: '8%'}, sortable: true},
				],

                errors: []
            }
        },
        computed: {
            seGuardaForm() {
                console.log( typeof this.detalleNotaSalida);
                if( typeof this.detalleNotaSalida === "undefined" ){
                    this.seGuarda = false;
                }else{
                    this.seGuarda = this.detalleNotaSalida.length > 0;
                }
                return this.seGuarda;
            }
        },
        methods: {
            getData() {
                this.isBusy = true;
                axiosClient.get(
                    '/nota_salida/'+ this.desencrypt(this.$route.params.id) + '/show'
                ).then(response => {
                    let respuesta = response.data.data;
                    console.log(response.data);
                    this.notaSalida = respuesta.notaSalida;
                    this.detalleNotaSalida = respuesta.detalle;
                }).catch(error => {
                    console.log(error);
                    alert(error);
                    // this.setErrorUsuario(error);
                });
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
                        this.$router.push({name: 'nota-salida-index'});
                    });
                }
            },
            validarFormulario(){
                return true;
            },
            desencrypt(value) {
                return atob(value);
            },
        },
        watch: {
            detalleNotaSalida: function(newValue, oldValue) {
                console.log(newValue);
                console.log(oldValue);
            },
        }
    }
</script>
<style scoped>
    /*Estilo CSS*/
</style>