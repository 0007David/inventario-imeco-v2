<template>
    <div class="content-wrapper py-2">
        <div class='row'>
            <div class='col-12'>
                <div class='card'>
                    <div class='card-header'>Crear nueva planilla</div>
                    <div class='card-body'>
                        <div class="alert alert-danger" v-if="errors.length">
                            <b>Terdapat kesalahan dalam input data:</b>
                            <ul>
                                <li v-for="error in errors" :key="error">{{ error }}</li>
                            </ul>
                        </div>

                        <form v-on:submit.prevent="guardar">

                            <div class='form-group'>
                                <label htmlFor='codigo'>
                                    Codigo
                                </label>
                                <input id="codigo" required type="text" class="form-control" v-model="formData.codigo">
                            </div>

                            <div class='form-group'>
                                <label htmlFor='fecha'>
                                    Fecha
                                </label>
                                <input id="fecha" required type="date" class="form-control" v-model="formData.fecha">
                            </div>

                            <div class='form-group'>
                                <router-link
                                    :to="{ name: 'planilla-index' }"
                                    class="btn btn-secondary">
                                    Cancelar
                                </router-link>
                                &nbsp; &nbsp;
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
                    codigo: '',
                    fecha: ''
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
                    this.$swal.fire({
                        title: 'Success',
                        text: "Se ha creado una planilla exitosamente",
                        icon: 'success',
                        timer: 1000
                    });
                    axiosClient.post(
                        '/planilla',
                        this.formData)
                    .then((response) => {
                        //console.log(response.data);
                        this.$router.push({name: 'planilla-index'});
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
