<template>
    <div class="content-wrapper py-2">
        <div class='row justify-content-center'>
            <div class='col-md-6 offset-1'>
                <div class='card'>
                    <div class='card-header'>Crear Material</div>
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
                                <input
                                    id="codigo"
                                    required
                                    type="text"
                                    class="form-control"
                                    v-model="formData.nro_material">
                            </div>
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
                                <label htmlFor='precio'>
                                    Precio
                                </label>
                                <input
                                    id="precio"
                                    required
                                    type="text"
                                    class="form-control"
                                    v-model="formData.precio">
                            </div>
                            <div class='form-group'>
                                <label htmlFor='categoria'>
                                    Categoria
                                </label>
                                <b-form-select
                                    id="categoria"
                                    required
                                    v-model="formData.id_categoria"
                                    :options="categoriaSelectOpcions"
                                ></b-form-select>
                            </div>
                            <div class='form-group'>
                                <label htmlFor='unidad'>
                                    Unidad de Medida
                                </label>
                                <b-form-select
                                    id="unidad"
                                    required
                                    v-model="formData.id_unidad"
                                    :options="unidadMedidaSelectOpcions"
                                ></b-form-select>
                            </div>
                            <div class='form-group'>
                                <label htmlFor='descripcion'>
                                    Descripcion
                                </label>
                                <input
                                    id="descripcion"
                                    required
                                    type="text"
                                    class="form-control"
                                    v-model="formData.descripcion">
                            </div>
                            <div class="form-group form-check">
                                <input type="checkbox" class="form-check-input" v-model="formData.es_padre" id="es_padre">
                                <label htmlFor='es_padre' class="form-check-label" for="es_padre">
                                    <strong>Es padre</strong>
                                </label>

                            </div>

                            <div class='form-group'>
                                <router-link
                                    :to="{ name: 'material-index' }"
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
                    nro_material: '',
                    nombre: '',
                    precio: '',
                    descripcion: '',
                    es_padre: '',
                    id_unidad: '',
                    id_categoria: '',
                },
                categorias: [],
                unidadesMedidas: [],
                errors: []
            }
        },
        computed: {
            categoriaSelectOpcions() {
                let selectOptions = [{value: '', text: "Seleccione una Categoria"}];
                this.categorias.forEach(categoria => {
                    selectOptions.push({value: categoria.id, text: categoria.nombre});
                });
                return selectOptions;
            },
            unidadMedidaSelectOpcions() {
                let selectOptions = [{value: '', text: "Seleccione una Unidad de Medida"}];
                this.unidadesMedidas.forEach(unidad => {
                    selectOptions.push({value: unidad.id, text: unidad.nombre});
                });
                return selectOptions;
            },
        },
        methods: {
            getData() {
                axiosClient.get(
                    '/material/'+ this.desencrypt(this.$route.params.id) + '/edit'
                ).then(response => {
                    let respuesta = response.data.data;
                    // console.log(respuesta);
                    this.formData = respuesta.material;
                    this.unidadesMedidas = respuesta.unidadesMedidas;
                    this.categorias = respuesta.categorias;
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
            modificar() {
                if( this.validarFormulario() ){
                    // console.log(this.formData);
                    this.$swal.fire({
                        title: 'Success',
                        text: "Se ha creado exitosamente",
                        icon: 'success',
                        timer: 1000
                    });
                    axiosClient.put(
                        '/material/' +this.desencrypt(this.$route.params.id),
                        this.formData)
                    .then((response) => {
                        console.log(response.data);
                        this.$router.push({name: 'material-index'});
                    });
                }
            },
            validarFormulario(){
                return true;
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