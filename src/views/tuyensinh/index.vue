<template>
  <div class="content">
    <div class="row">
      <div class="col-sm-12" style="background-color: gainsboro;">
          <h2>ĐĂNG KÝ XÉT TUYỂN</h2>
      </div>
    </div>
    <div class="row">
      <div class="col-sm-12" style="background-color: white" >
          <xet-tuyen></xet-tuyen>
      </div>
    </div>
  </div>
</template>
<script>
import Xettuyen from './xettuyen.vue'
export default {
  components:{
    'xet-tuyen': Xettuyen
  }
};
</script>

<style scoped>
</style>