<template>
    <div class="content-wrapper py-2">
        <div class='row justify-content-center'>
            <div class='col-md-6 offset-1'>
                <div class='card'>
                    <div class='card-header'>Crear nuevo almacen</div>
                    <div class='card-body'>
                        <div class="alert alert-danger" v-if="errors.length">
                            <b>Terdapat kesalahan dalam input data:</b>
                            <ul>
                                <li v-for="error in errors" :key="error">{{ error }}</li>
                            </ul>
                        </div>

                        <form v-on:submit.prevent="guardar">
                            <div class='form-group'>
                                <label htmlFor='nombre'>
                                    Nombre
                                </label>
                                <input
                                    id="nombre"
                                    required
                                    type="text"
                                    class="form-control"
                                    v-model="formData.nombre">
                            </div>
                            <div class='form-group'>
                                <label htmlFor='ubicacion'>
                                    Ubicacion
                                </label>
                                <input
                                    required
                                    id="ubicacion"
                                    type="text"
                                    class="form-control"
                                    v-model="formData.ubicacion">
                            </div>
                            <div class='form-group'>
                                <router-link
                                    :to="{ name: 'almacen-index' }"
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
                    name: '',
                    ubicacion: ''
                },
                errors: []
            }
        },
        methods: {
            getData() {
                console.log('No necesita mas datos! zzzz...');
            },
            guardar() {

                if( this.validarFormulario() ){
                    // console.log(this.formData);
                    this.$swal.fire({
                        title: 'Success',
                        text: "Se ha creado el almacen exitosamente",
                        icon: 'success',
                        timer: 1000
                    });
                    axiosClient.post(
                        '/almacen',
                        this.formData)
                    .then((response) => {
                        // console.log(response.data);
                        this.$router.push({name: 'almacen-index'});
                    })
                    .catch(error => {
                        console.log(error);
                        console.log(error.message);
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
