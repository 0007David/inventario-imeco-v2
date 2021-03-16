<template>
    <div class="content-wrapper py-2">
        <div class='row justify-content-center'>
            <div class='col-md-6 offset-1'>
                <div class='card'>
                    <div class='card-header'>Crear nuevo proyecto</div>
                    <div class='card-body'>
                        <div class="alert alert-danger" v-if="errors.length">
                            <b>Terdapat kesalahan dalam input data:</b>
                            <ul>
                                <li v-for="error in errors" :key="error">{{ error }}</li>
                            </ul>
                        </div>

                        <form v-on:submit.prevent="guardar">
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
                                <label htmlFor='nombre_corto'>
                                    Nombre corto
                                </label>
                                <input
                                    id="nombre_corto"
                                    required
                                    type="text"
                                    class="form-control"
                                    v-model="formData.nombre_corto">
                            </div>
                            <div class='form-group'>
                                <label htmlFor='usuario'>
                                    Usuario Encargado
                                </label>
                                <select
                                    id="usuario"
                                    required
                                    class="form-control"
                                    v-model="formData.id_user">
                                    <option value="">Seleccione rol</option>
                                    <option v-for="usuario in usuarios" :key="usuario.id" :value="usuario.id">{{usuario.name}}</option>
                                </select>
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
                                    :to="{ name: 'proyecto-index' }"
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
                    nombre: "Proyecto 1",
                    nombre_corto: "Proy1",
                    fecha_inicio: "",
                    fecha_fin: "",
                    id_user: '',
                },
                usuarios: [],
                errors: []
            }
        },
        methods: {
            getData() {
                axiosClient.get('/proyecto/create').then(response => {
                    // console.log(response);
                    let respuesta = response.data.data;
                    this.usuarios = respuesta.usuarios;
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
            guardar() {

                if( this.validarFormulario() ){
                    // console.log(this.formData);
                    this.$swal.fire({
                        title: 'Success',
                        text: "Se ha creado el proyecto exitosamente",
                        icon: 'success',
                        timer: 1000
                    });
                    axiosClient.post(
                        '/proyecto',
                        this.formData)
                    .then((response) => {
                        // console.log(response.data);
                        this.$router.push({name: 'proyecto-index'});
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