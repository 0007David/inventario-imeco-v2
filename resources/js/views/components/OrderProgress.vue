<template>
<div>
   <div class="progress">
  <progressbar now="50" label type="warning" striped></progressbar>
  </div>
</div>
</template>
<script>
import{progressbar} from 'vue-strap'
export default {
   components: {
       progressbar
  },
  mounted(){
      console.log('Component');
  }
}
</script>
