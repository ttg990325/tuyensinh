<template>
  <vodal :show="show" animation="rotate" @hide="$emit('hideForm')" :width="820" :height="600">
      <div class="form-group">
        <label for="inputAddress">Tiêu đề:</label>
        <input type="text" class="form-control" id="inputAddress" placeholder />
      </div>
      <div class="form-group">
        <label for="inputAddress2">Ngày bắt đầu:</label>
        <input type="text" class="form-control" id="inputAddress2" placeholder />
      </div>
      <div class="form-group">
        <label for="inputAddress2">Hạn đăng ký:</label>
        <input type="text" class="form-control" id="inputAddress2" placeholder />
      </div>
      <div class="form-group">
        <label for="inputAddress2">Chỉ tiêu:</label>
        <input type="text" class="form-control" id="inputAddress2" placeholder />
      </div>
      <div class="form-group">
        <label for="inputAddress2">Điều kiện:</label>
        <input type="text" class="form-control" id="inputAddress2" placeholder />
      </div>
      <button type="submit" name="add" class="btn btn-primary" @click="addxettuyen" v-if = "add">Thêm</button>
      <button type="submit" name="edit" class="btn btn-primary" @click="editxettuyen" v-if = "edit">Sửa</button>
  </vodal>
</template>

<script>
export default {
  data() {
    return {
      
    };
  },
  props: ["show", "add", "edit", "xettuyen_id"],
  methods: {
    addxettuyen(){
      this.add = true;
      this.edit = false;
    },
    editxettuyen(){
      this.edit = true;
      this.add = false;
    }
  },
  created () {
  },
  watch: {
    xettuyen_id(value) {
      console.log(value, "this.xettuyen_id")
    }
  },

};
</script>

<style  scoped>
</style>