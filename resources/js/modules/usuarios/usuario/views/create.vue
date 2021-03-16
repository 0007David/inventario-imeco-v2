<template>
    <div class="content-wrapper py-2">
        <div class='row justify-content-center'>
            <div class='col-md-6 offset-1'>
                <div class='card'>
                    <div class='card-header'>Crear nuevo usuario</div>
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
                                    <option v-for="rol in roles" :key="rol.id" :value="rol.id">{{rol.nombre}}</option>
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
                    name: 'Test1',
                    email: 'test1@gmail.com',
                    password: '12345678',
                    id_rol: ''
                },
                roles: [],
                errors: []
            }
        },
        methods: {
            getData() {
                axiosClient.get('/usuario/create').then(response => {
                    // console.log(response);
                    let respuesta = response.data.data;
                    this.roles = respuesta.roles;
                }).catch(error => {
                    console.log(error);
                    // alert(error);
                    // this.setErrorUsuario(error);
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
                        text: "Se ha creado el usuario exitosamente",
                        icon: 'success',
                        timer: 1000
                    });
                    axiosClient.post(
                        '/usuario',
                        this.formData)
                    .then((response) => {
                        // console.log(response.data);
                        this.$router.push({name: 'usuario-index'});
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