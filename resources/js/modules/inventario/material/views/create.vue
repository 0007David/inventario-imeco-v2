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
                        <form v-on:submit.prevent="guardar">
                            <div class='form-group'>
                                <label htmlFor='nro_material'>
                                    Codigo
                                </label>
                                <input
                                    id="nro_material"
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
                                    type="text"
                                    class="form-control"
                                    v-model="formData.descripcion">
                            </div>
                            <div class="form-group form-check">
                                <input type="checkbox" class="form-check-input" v-model="formData.es_padre" id="exampleCheck1">
                                <label htmlFor='exampleCheck1' class="form-check-label" for="exampleCheck1">
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
    export default {
        name: 'create',
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
                axiosClient.get('/material/create').then(response => {
                    // console.log(response);
                    let respuesta = response.data.data;
                    this.unidadesMedidas = respuesta.unidadesMedidas;
                    this.categorias = respuesta.categorias;
                }).catch(error => {
                    // console.log(error);
                    alert(error);
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
                        text: "Se ha creado exitosamente",
                        icon: 'success',
                        timer: 1000
                    });
                    axiosClient.post(
                        '/material',
                        this.formData)
                    .then((response) => {
                        console.log(response.data);
                        this.$router.push({name: 'material-index'});
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