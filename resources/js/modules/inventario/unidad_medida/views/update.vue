<template>
    <div class="content-wrapper py-2">
        <div class='row justify-content-center'>
            <div class='col-md-6 offset-1'>
                <div class='card'>
                    <div class='card-header'>Modificar unidad de medida</div>
                    <div class='card-body'>
                        <div class="alert alert-danger" v-if="errors.length">
                            <b>Terdapat kesalahan dalam input data:</b>
                            <ul>
                                <li v-for="error in errors" :key="error">{{ error }}</li>
                            </ul>
                        </div>

                        <form v-on:submit.prevent="modificar">
                            <div class='form-group'>
                                <label htmlFor='nombre'>
                                    Nombre
                                </label>
                                <input id="nombre" required type="text" class="form-control" v-model="formData.nombre">
                            </div>
                            <div class='form-group'>
                                <router-link
                                    :to="{ name: 'unidadmedida-index' }"
                                    class="btn btn-secondary">
                                    Cancelar
                                </router-link>
                                &nbsp; &nbsp;
                                <button
                                    type="submit"
                                    class='btn btn-primary'>
                                    Modificar
                                </button>
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
import { atob } from '../../../../mixins/util';
export default {
    name: 'update',
    created() {
        this.getData();
    },
    data() {
        return {
            formData: {
                id: '',
                nombre: ''
            },
            errors: []
        }
    },
    methods: {
        getData() {
                axiosClient.get(
                    '/unidadmedida/'+ this.desencrypt(this.$route.params.id) + '/edit')
                .then(response => {
                    // console.log(response);
                    let respuesta = response.data.data;
                    this.cargarData(respuesta);
                })
                .catch(error => {
                    console.log(error);
                    // alert(error);
                    // this.setErrorUsuario(error);
                })
                .finally(() => {
                    // this.modalDestroyConfirmation = false;
                    // console.log('finally request');
                });

            },
            cargarData(data) {
                this.formData.id = this.encrypt(data.unidadmedidas.id);
                this.formData.nombre = data.unidadmedidas.nombre;
            },
            modificar() {

                if( this.validarFormulario() ){
                    // console.log(this.formData);
                    this.formData.id =  this.desencrypt(this.formData.id);
                    this.$swal.fire({
                        title: 'Success',
                        text: "Se ha modificado la unidad de medida exitosamente",
                        icon: 'success',
                        timer: 1000
                    });
                    axiosClient.put(
                        '/unidadmedida/' +this.desencrypt(this.$route.params.id),
                        this.formData)
                    .then((response) => {
                        // console.log(response.data);
                        this.$router.push({name: 'unidadmedida-index'});
                    });
                }
            },
            validarFormulario(){
                return true;
            },
            encrypt(value){
                return btoa(value);
            },
            desencrypt(value) {
                return atob(value);
            }
    }
}
</script>
