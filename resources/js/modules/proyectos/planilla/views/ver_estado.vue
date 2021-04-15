<template>
    <div class="content-wrapper py-2">
        <div class='row justify-content-center'>
            <div class='col-md-6 offset-1'>
                <div class='card'>
                    <div class='card-header'>Datos planilla</div>
                    <div class='card-body'>
                        <div class="alert alert-danger" v-if="errors.length">
                            <b>Terdapat kesalahan dalam input data:</b>
                            <ul>
                                <li v-for="error in errors" :key="error">{{ error }}</li>
                            </ul>
                        
                        </div>
                        <!--<order-progress id="1" status="Espera" porcen="100"> </order-progress>  -->
                        <order-progress :id="codigo2" :status="estado" :porcen="percent"> </order-progress>
                        
                        <form v-on:submit.prevent="modificar">
                            <div class='form-group'>
                                <label htmlFor='codigo'>
                                    Codigo:
                                </label>
                                {{this.codigo}}
                            </div>
                              <div class='form-group'>
                                <label htmlFor='fecha'>
                                    Fecha:
                                </label> 
                                {{this.fecha}}
                            </div>
                            
                            <div class='form-group'>
                                <router-link
                                    :to="{ name: 'planilla-index' }"
                                    class="btn btn-secondary">
                                    Volver
                                </router-link>
                                &nbsp; &nbsp;
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
    name: 'ver_estado',
    created() {
        this.getData();
    },
    data() {
        return {
            codigo: '0', ///planilla_numero
            codigo2:'0', //codigo (primary key)
            percent:10,
            estado: 'no estado',
            fecha: '',
            errors: []
        }
    },

    /*mounted(){
      console.log('mounted component1'); console.log(this.codigo2);

      window.Echo.channel('imeco-realtime.'+this.codigo2).listen('OrderStatusChangedEvent',(planilla)=>
       {
         console.log('primera entrada');
        });
    },*/
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
                /*this.formData.codigo = data.planillas.codigo;
                this.formData.fecha = data.planillas.fecha;
                this.formData.estado = data.planillas.estado;*/
                this.codigo=data.planillas.planilla_numero;
                this.codigo2=data.planillas.codigo;
                this.estado=data.planillas.estado;
                this.cargarPorcen(this.estado);
                this.fecha=data.planillas.fecha;
            },

            cargarPorcen(st1){
                 switch (st1) {
                    case "Espera":
                    this.percent=5;
                    break;
                    case "Verificado":
                    this.percent=33;
                    break;
                    case "Compra":
                    this.percent=33;
                    break;
                    case "Enviado":
                    this.percent=66;
                    break;
                    case "Entregado":
                    this.percent=100;
                    break;
            }
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
