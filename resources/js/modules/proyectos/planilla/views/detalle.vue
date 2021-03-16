<template>
  
    <div class="content-wrapper py-2">
        <div class="col-sm-6">
                        <h1 class="m-0">Creando Planilla</h1>
                    </div>
        <div class='row '>
            <div class='col-12'>
                <div class='card'>
                    <div class='card-header'>Crear nueva planilla - detalle</div>
                    <div class='card-body'>
                        <div class="alert alert-danger" v-if="errors.length">
                            <b>Terdapat kesalahan dalam input data:</b>
                            <ul>
                                <li v-for="error in errors" :key="error">{{ error }}</li>
                            </ul>
                        </div>
                        <div class="container-fluid"></div>
                        <form v-on:submit.prevent="guardar">

                             <div class='form-group'>
                                <label htmlFor='categoria'>
                                    Categoria 
                                </label> 
                                <select class="form-control" id="categoria" >
                                    <option v-for="categoria in categorias" :key="categoria.id">{{ categoria.nombre }}</option>
                                </select>
                            </div>
                            
                            <div class ='col-sm-12'>
                                <table class="table table-bordered table-hover dataTable" role="grid">
                                                <thead>
                                                    <tr role="row">
                                                        <th>Codigo</th>
                                                        <th>Nombre</th>
                                                         <th>Unidad de medida</th>
                                                        <th>Editar dependientes</th>
                                                        <th>Agregar</th>
                                                    </tr>
                                                </thead>
                                                <tbody>

                                                    <tr role="row" v-for="material in materiales" :key="material.codigo">
                                                        <td> {{ material.codigo }}</td>
                                                        <td> {{ material.nombre }} </td>
                                                        <td> {{ material.id_unidad }} </td>
                                                        <td>
                                                            <router-link
                                                                class="btn btn-warning"
                                                                :to="'/planilla/' + encrypt(material.codigo) + '/editmaterial'"
                                                                data-toggle="tooltip"
                                                                data-placement="top"
                                                                title="Editar">
                                                                <i class="fa fa-edit"></i>
                                                            </router-link>
                                                          
                                                        </td>
                                                        <td>
                                                               <router-link
                                                                class="btn btn-success"
                                                                :to="'/planilla/' + encrypt(material.codigo) + '/addmaterial'"
                                                                data-toggle="tooltip"
                                                                data-placement="top"
                                                                title="Adicionar">
                                                                <i class="fa fa-edit"></i>
                                                            </router-link>
                            
                                                        </td>
                                                    </tr>

                                                </tbody>
                                            </table>
                                </div>
                            
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axiosClient from '../../../../utils/axiosClient';
import { btoa } from '../../../../mixins/util';

    export default {
        name: 'create',
        created() {
            this.getData();
            //this.getData2();
        },
        data() {
            return {
                
                materiales:[],
                categorias:[],

                formData: {
                    fecha: '',
                    categoria:'',

                },
                errors: [],
            }
        },
        methods: {

            getData() {
              axiosClient.get('/planilla/create').then(response => {
                    // console.log(response);
                    let respuesta = response.data.data;
                    this.materiales = respuesta.materiales;
                     this.categorias = respuesta.categorias;
                }).catch(error => {
                    // console.log(error);
                    alert(error);
                    // this.setErrorAlmacen(error);
                })
                .finally(() => {
                    // this.modalDestroyConfirmation = false;
                    // console.log('finally request');
                });
            },

            getData2() {
              axiosClient.get('/planilla/create').then(response => {
                    // console.log(response);
                    let respuesta = response.data.data;
                    this.categorias = respuesta.categorias;
                }).catch(error => {
                    // console.log(error);
                    alert(error);
                    // this.setErrorAlmacen(error);
                })
                .finally(() => {
                    // this.modalDestroyConfirmation = false;
                    // console.log('finally request');
                });
            },

            guardar() {

                if( this.validarFormulario() ){
                    this.$swal.fire({
                        title: 'Success',
                        text: "Se ha creado la planilla exitosamente",
                        icon: 'success',
                        timer: 1000
                    });
                    axiosClient.post(
                        '/planillas',
                        this.formData)
                    .then((response) => {
                        // console.log(response.data);
                        this.$router.push({name: 'planilla-index'});
                    });

                }

            },
            validarFormulario(){
                return true;
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
