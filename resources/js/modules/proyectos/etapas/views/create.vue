<template>
    <div class="content-wrapper py-2">
        <div class='row justify-content-center'>
            <div class='col-md-6 offset-1'>
                <div class='card'>
                    <div class='card-header'>Crear nuevo sub etapa</div>
                    <div class='card-body'>
                        <div class="alert alert-danger" v-if="errors.length">
                            <b>Terdapat kesalahan dalam input data:</b>
                            <ul>
                                <li v-for="error in errors" :key="error">{{ error }}</li>
                            </ul>
                        </div>

                        <form v-on:submit.prevent="guardar">
                            <div class='form-group'>
                                <label htmlFor='usuario'>
                                    Proyecto
                                </label>
                                <select
                                    id="proyecto"
                                    required
                                    class="form-control"
                                    @change="traerEtapas"
                                    v-model="formData.id_proyecto">
                                    <option value="">Seleccione Proyecto</option>
                                    <option v-for="proyecto in proyectos" :key="proyecto.id" :value="proyecto.id">{{proyecto.nombre}}</option>
                                </select>
                            </div>
                            <div class='form-group'>
                                <label htmlFor='usuario'>
                                    Etapa
                                </label>
                                <select
                                    id="etapa"
                                    required
                                    class="form-control"
                                    v-model="formData.id_etapa">
                                    <option value="">Seleccione etapa</option>
                                    <option v-for="etapa in etapas" :key="etapa.id" :value="etapa.id">{{etapa.nombre}}</option>
                                </select>
                            </div>
                            <div class='form-group'>
                                <label htmlFor='name'>
                                    Nombre
                                </label>
                                <input
                                    id="name"
                                    required
                                    type="text"
                                    class="form-control"
                                    v-model="formData.nombre">
                            </div>
                            <div class='form-group'>
                                <label htmlFor='progreso'>
                                    Progreso
                                </label>
                                <input
                                    id="progreso"
                                    required
                                    type="text"
                                    class="form-control"
                                    v-model="formData.progreso">
                            </div>
                            <div class='form-group'>
                                <label htmlFor='fecha_inicio'>
                                    Fecha Inicio
                                </label>
                                <input
                                    required
                                    id="fecha_inicio"
                                    type="date"
                                    class="form-control"
                                    v-model="formData.fecha_inicio">
                            </div>
                            <div class='form-group'>
                                <label htmlFor='fecha_fin'>
                                    Fecha Fin
                                </label>
                                <input
                                    required
                                    id="fecha_fin"
                                    type="date"
                                    class="form-control"
                                    v-model="formData.fecha_fin">
                            </div>
                            <div class='form-group'>
                                <router-link
                                    :to="{ name: 'etapa-index' }"
                                    class="btn btn-secondary">
                                    Cancelar
                                </router-link>
                                &nbsp;
                                &nbsp;
                                <button type="submit" class='btn btn-primary'>Guardar</button>
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
    export default {
        name: 'create',
        created() {
            this.getData();
        },
        data() {
            return {
                formData: {
                    nombre: "Sub Etapa 1",
                    progreso: '',
                    fecha_inicio: '',
                    fecha_fin: '',
                    id_etapa: '',
                    id_proyecto: ''
                },
                etapas: [],
                proyectos: [],
                errors: []
            }
        },
        methods: {
            getData() {
                axiosClient.get('/etapa/create').then(response => {
                    // console.log(response);
                    let respuesta = response.data.data;
                    this.proyectos = respuesta.proyectos;
                }).catch(error => {
                    // console.log(error);
                    alert(error);
                    // this.setErrorEtapa(error);
                });

            },
            traerEtapas(){
                if(this.formData.id_proyecto != "") {
                    axiosClient.get('/etapa/'+ this.formData.id_proyecto+'/sub-etapa').then(response => {
                        // console.log(response);
                        let respuesta = response.data.data;
                        this.etapas = respuesta.etapas;
                    }).catch(error => {
                        console.log(error);
                        alert(error);
                        // this.setErrorEtapa(error);
                    });

                }else{
                    console.log('Seleccione un proyecto');
                }
            },
            guardar() {

                if( this.validarFormulario() ){
                    // console.log(this.formData);
                    this.$swal.fire({
                        title: 'Success',
                        text: "Se ha creado el sub etapa exitosamente",
                        icon: 'success',
                        timer: 1000
                    });
                    axiosClient.post(
                        '/etapa',
                        this.formData)
                    .then((response) => {
                        // console.log(response.data);
                        this.$router.push({name: 'etapa-index'});
                    });

                }

            },
            validarFormulario(){
                return true;
            }
        }
    }
</script>
<style scoped>
    /*Estilo CSS*/
</style>