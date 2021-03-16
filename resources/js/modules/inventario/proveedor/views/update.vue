<template>
    <div class="content-wrapper py-2">
        <div class='row justify-content-center'>
            <div class='col-md-6 offset-1'>
                <div class='card'>
                    <div class='card-header'>Modificar proveedor</div>
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
                                <label htmlFor='direccion'>
                                    Direccion
                                </label>
                                <input required  id="direccion" type="text" class="form-control" v-model="formData.direccion">
                            </div>
                              <div class='form-group'>
                                <label htmlFor='telefono'>
                                    Telefono
                                </label> <input required id="telefono" type="text" class="form-control" v-model="formData.telefono">
                            </div>
                            <div class='form-group'>
                                <router-link
                                    :to="{ name: 'proveedor-index' }"
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
                nombre: '',
                direccion: '',
                telefono: ''
            },
            errors: []
        }
    },
    methods: {
        getData() {
                axiosClient.get(
                    '/proveedor/'+ this.desencrypt(this.$route.params.id) + '/edit')
                .then(response => {
                    // console.log(response);
                    let respuesta = response.data.data;
                    this.cargarData(respuesta);
                })
                .catch(error => {
                    console.log(error);
                    console.log(error.message);
                    // alert(error);
                    // this.setErrorUsuario(error);
                })
                .finally(() => {
                    // this.modalDestroyConfirmation = false;
                    // console.log('finally request');
                });

            },
            cargarData(data) {
                this.formData.id = this.encrypt(data.proveedores.id);
                this.formData.nombre = data.proveedores.nombre;
                this.formData.direccion = data.proveedores.direccion;
                this.formData.telefono = data.proveedores.telefono;
            },
            modificar() {

                if( this.validarFormulario() ){
                    // console.log(this.formData);
                    this.formData.id =  this.desencrypt(this.formData.id);
                    this.$swal.fire({
                        title: 'Success',
                        text: "Se ha modificado el proveedor exitosamente",
                        icon: 'success',
                        timer: 1000
                    });
                    axiosClient.put(
                        '/proveedor/' +this.desencrypt(this.$route.params.id),
                        this.formData)
                    .then((response) => {
                        // console.log(response.data);
                        this.$router.push({name: 'proveedor-index'});
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
