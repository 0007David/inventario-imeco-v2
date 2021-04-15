<template>
    <div class="content-wrapper py-2">
        <div class='row justify-content-center'>
            <div class='col-md-6 offset-1'>
                <div class='card'>
                    <div class='card-header'>Modificar planilla</div>
                    <div class='card-body'>
                        <div class="alert alert-danger" v-if="errors.length">
                            <b>Terdapat kesalahan dalam input data:</b>
                            <ul>
                                <li v-for="error in errors" :key="error">{{ error }}</li>
                            </ul>
                        
                        </div>
                        <form v-on:submit.prevent="modificar">
                            <div class='form-group'>
                                <label htmlFor='codigo'>
                                    Codigo
                                </label>
                                <input id="codigo" required type="text" class="form-control" v-model="formData.codigo">
                            </div>
                              <div class='form-group'>
                                <label htmlFor='fecha'>
                                    Fecha
                                </label> <input required id="fecha" type="text" class="form-control" v-model="formData.fecha">
                            </div>
                            <div class='form-group'>
                                <label htmlFor='estado'>
                                    Estado
                                </label> <select id="estado"  class="form-control" v-model="formData.estado">
                                        <option value="Espera">Espera</option>
                                        <option value="Verificado">Verificado</option>
                                        <option value="Compra">Compra</option>
                                        <option value="Enviado">Enviado</option>
                                        <option value="Entregado">Entregado</option>
                                        </select>
                            </div>
                            
                            <div class='form-group'>
                                <router-link
                                    :to="{ name: 'planilla-index' }"
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
                codigo: '',
                fecha: '',
                estado: ''
            },
            errors: []
        }
    },
    
    methods: {
        getData() {
                axiosClient.get(
                    '/planilla/'+ this.desencrypt(this.$route.params.id) + '/edit')
                .then(response => {
                    // console.log(response);
                    let respuesta = response.data.data;
                    this.cargarData(respuesta);
                })
                .catch(error => {
                    // console.log(error);
                    alert(error);
                    // this.setErrorUsuario(error);
                })
                .finally(() => {
                    // this.modalDestroyConfirmation = false;
                    // console.log('finally request');
                });

            },
            cargarData(data) {
                this.formData.codigo = data.planillas.codigo;
                this.formData.fecha = data.planillas.fecha;
                this.formData.estado = data.planillas.estado;
            },
            modificar() {

                if( this.validarFormulario() ){
                    // console.log(this.formData);
                    //this.formData.codigo =  this.desencrypt(this.formData.codigo);
                    this.$swal.fire({
                        title: 'Success',
                        text: "Se ha modificado la planilla exitosamente",
                        icon: 'success',
                        timer: 1000
                    });
                    axiosClient.put(
                        '/planilla/' +this.desencrypt(this.$route.params.id),
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
            },
            desencrypt(value) {
                return atob(value);
            }
    }
}
</script>
