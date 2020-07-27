<template>
  <div class="content-tuyensinh">
    <h2 style="background-color: gainsboro;">ĐĂNG KÝ XÉT TUYỂN
      <!-- <button>+</button>
       -->
       <i class="fas fa-plus-circle" @click="showFormAdd" style="cursor: pointer;"></i>
       <themsua-xettuyen 
        :show="show" 
        @hideForm="hideForm"
        :add="add"
        :edit="edit"
        :xettuyen_id ="suaxettuyen_id"
      ></themsua-xettuyen>
    </h2>
    <div class="container-fluid">
      <div class="row">
        <xet-tuyen v-for="xettuyen in xettuyens" 
          :key="xettuyen.id" 
          :xettuyen="xettuyen"
           @evenEdit="editForm"
        ></xet-tuyen>
      </div>
    </div>
  </div>
</template>
<script>
import Xettuyen from "./xettuyen.vue";
import axios from "axios";
import themsuaxettuyen from "./themsuaxettuyen.vue"
export default {
  components: {
    "xet-tuyen": Xettuyen,
    "themsua-xettuyen": themsuaxettuyen
  },
  data() {
    return {
      xettuyens: [],
      show: false,
      add: false,
      edit: false, 
      suaxettuyen_id: ""
    };
  },
  methods:{ 
    showFormAdd(){
      this.show = true;
      this.add = true;
      this.edit = false;
    },
    hideForm(){
      this.show = false; 
      this.add = false; 
      this.edit = false;
      this.xettuyen_id = "";
    },
    editForm(id){
      this.show = true;
      this.edit=true;
      this.add=false;
      this.suaxettuyen_id = id;
    }
  }, 
  created () {
    axios.get(`${process.env.VUE_APP_URL}${process.env.VUE_APP_HINHTHUC}`)
    .then(response =>{
      if(response.status===200){
        this.xettuyens=response.data
      }
    })
    .catch(error => console.log(error))
  },
};
</script>

<style scoped>
</style>