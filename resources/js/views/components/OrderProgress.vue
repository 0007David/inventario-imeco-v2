<template>
<div>
   <div class="progress">
  <progressbar :now="porcen" label type="primary" striped></progressbar> 
  </div>
  <br>
   <div class="order-status">
     <strong> Estado:</strong> {{this.status}}
     <br>
     <br>
   </div>
</div>
</template>
<script>
import{progressbar} from 'vue-strap';

  export default {
    components: {
        progressbar
    },

    props: ['id','status','porcen'],


    mounted(){
      console.log('mounted component'); console.log(this.id);

      window.Echo.channel('imeco-realtime').listen('OrderStatusChangedEvent',(planilla)=>
       {
        this.status=planilla.name;

        switch (this.status) {
            case "Espera":
              this.porcen=5;
            break;
            case "Verificado":
              this.porcen=33;
            break;
            case "Compra":
              this.porcen=33;
            break;
            case "Enviado":
              this.porcen=66;
            break;
              case "Entregado":
              this.porcen=100;
            break;
       }

        //this.porcen=planilla.percent;
       
        console.log(this.status);
        //this.porcentaje=this.calculatePercent(this.status);
        

        });
    },
  }
</script>
