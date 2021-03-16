<template>
    <div class="content-wrapper">
        <section class="content">
            <div class="container-fluid">
                <div class='row'>
                    <div class='col-md-6 offset-1'>
                        <div class='card'>
                            <div class='card-header'>Crear nuevo rol</div>
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
                                        <router-link
                                            :to="{ name: 'rol-index' }"
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
        </section>
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
                    nombre: '',
                },
                errors: []
            }
        },
        methods: {
            getData() {
                console.log('No necesitas mas datos! zzzz...');
            },
            guardar() {
                if( this.validarFormulario() ) {
                    this.$swal.fire({
                        title: 'Success',
                        text: "Se ha creado el rol exitosamente",
                        icon: 'success',
                        timer: 1000
                    });
                    axiosClient.post(
                        '/rol',
                        this.formData)
                    .then((response) => {
                        // console.log(response.data);
                        this.$router.push({name: 'rol-index'});
                    }).catch(error =>{
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