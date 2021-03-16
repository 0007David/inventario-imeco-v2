<template>
    <div class="content-wrapper py-2">
        <div class='row justify-content-center'>
            <div class='col-md-6 offset-1'>
                <div class='card'>
                    <div class='card-header'>Modificar usuario</div>
                    <div class='card-body'>
                        <div class="alert alert-danger" v-if="errors.length">
                            <b>Terdapat kesalahan dalam input data:</b>
                            <ul>
                                <li v-for="error in errors" :key="error">{{ error }}</li>
                            </ul>
                        </div>

                        <form v-on:submit.prevent="modificar">
                            <div class='form-group'>
                                <label htmlFor='name'>
                                    Nombre
                                </label>
                                <input
                                    id="name"
                                    required
                                    type="text"
                                    class="form-control"
                                    v-model="formData.name">
                            </div>
                            <div class='form-group'>
                                <label htmlFor='rol'>
                                    Rol
                                </label>
                                <select
                                    id="rol"
                                    required
                                    class="form-control"
                                    v-model="formData.id_rol">
                                    <option value="">Seleccione rol</option>
                                    <option v-for="rol in roles" :value="rol.id" :key="rol.id">{{rol.nombre}}</option>
                                </select>
                            </div>
                            <div class='form-group'>
                                <label htmlFor='email'>
                                    Correo Electronico
                                </label>
                                <input
                                    required
                                    id="email"
                                    type="email"
                                    class="form-control"
                                    v-model="formData.email">
                            </div>
                            <div class='form-group'>
                                <label htmlFor='password'>
                                    Password
                                </label>
                                <input
                                    required
                                    readonly
                                    id="password"
                                    type="password"
                                    class="form-control"
                                    v-model="formData.password">
                            </div>
                            <div class='form-group'>
                                <router-link
                                    :to="{ name: 'usuario-index' }"
                                    class="btn btn-secondary">
                                    Cancelar
                                </router-link>
                                &nbsp;
                                &nbsp;
                                <button type="submit" class='btn btn-primary'>Modificar</button>
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
import { atob, btoa } from '../../../../mixins/util';
    export default {
        name: 'update',
        created() {
            this.getData();
        },
        data() {
            return {
                formData: {
                    id: '',
                    name: '',
                    email: '',
                    password: '',
                    id_rol: ''
                },
                roles: [],
                errors: []
            }
        },
        methods: {
            getData() {
                axiosClient.get(
                    '/usuario/'+ this.desencrypt(this.$route.params.id) + '/edit')
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
            cargarData( data ) {
                this.formData.id =  this.encrypt(data.usuario.id);
                this.formData.id_rol = data.usuario.id_rol;
                this.formData.name = data.usuario.name;
                this.formData.email = data.usuario.email;

                this.roles = data.roles;
            },
            modificar() {

                if( this.validarFormulario() ){
                    // console.log(this.formData);
                    this.formData.id =  this.desencrypt(this.formData.id);
                    this.$swal.fire({
                        title: 'Success',
                        text: "Se ha modificado el usuario exitosamente",
                        icon: 'success',
                        timer: 1000
                    });
                    axiosClient.put(
                        '/usuario/' +this.desencrypt(this.$route.params.id),
                        this.formData)
                    .then((response) => {
                        // console.log(response.data);
                        this.$router.push({name: 'usuario-index'});
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
<style scoped>
    /*Estilo CSS*/
</style>