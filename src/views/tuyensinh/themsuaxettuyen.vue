<template>
  <vodal :show="show" animation="rotate" @hide="hideForm" :height="600">
    <ValidationObserver v-slot="{ handleSubmit, reset  }">
      <form
        @submit.prevent="add ? handleSubmit(addXetTuyen) : handleSubmit(editXetTuyen)"
        @reset.prevent="reset"
      >
        <div class="form-group">
          <label for="inputAddress">Tiêu đề:</label>
          <validation-provider rules="required" v-slot="{ errors }">
            <input type="text" class="form-control" id="inputAddress" v-model="ndxettuyen.title" />
            <span class="text-danger" style="font-size:15px;">{{ errors[0] }}</span>
          </validation-provider>
        </div>
        <div class="form-group">
          <label for="inputAddress2">Ngày bắt đầu:</label>
          <validation-provider rules="required" v-slot="{ errors }">
            <input
              type="date"
              class="form-control"
              id="inputAddress2"
              v-model="ndxettuyen.start_date"
            />
            <span class="text-danger" style="font-size:15px;">{{ errors[0] }}</span>
          </validation-provider>
        </div>
        <div class="form-group">
          <label for="inputAddress2">Hạn đăng ký:</label>
          <validation-provider rules="required" v-slot="{ errors }">
            <input
              type="date"
              class="form-control"
              id="inputAddress2"
              v-model="ndxettuyen.end_date"
            />
            <span class="text-danger" style="font-size:15px;">{{ errors[0] }}</span>
          </validation-provider>
        </div>
        <div class="form-group">
          <label for="inputAddress2">Chỉ tiêu:</label>
          <validation-provider rules="required" v-slot="{ errors }">
            <input
              type="number"
              min="0"
              class="form-control"
              id="inputAddress2"
              v-model="ndxettuyen.target"
            />
            <span class="text-danger" style="font-size:15px;">{{ errors[0] }}</span>
          </validation-provider>
        </div>
        <div class="form-group">
          <label for="inputAddress2">Điều kiện:</label>
          <validation-provider rules="required" v-slot="{ errors }">
            <input
              type="text"
              class="form-control"
              id="inputAddress2"
              v-model="ndxettuyen.condition"
            />
            <span class="text-danger" style="font-size:15px;">{{ errors[0] }}</span>
          </validation-provider>
        </div>
        <button type="submit" name="add" class="btn btn-primary" v-if="add">Thêm</button>
        <button type="submit" name="edit" class="btn btn-primary" v-if="edit">Sửa</button>
      </form>
    </ValidationObserver>
  </vodal>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      ndxettuyen: {
        title: "",
        start_date: "",
        end_date: "",
        target: 0,
        condition: "",
      },
    };
  },
  props: ["show", "add", "edit", "xettuyen_id"],
  methods: {
    addXetTuyen() {
      this.add = true;
      this.edit = false;
      axios
        .post(
          `${process.env.VUE_APP_URL}${process.env.VUE_APP_HINHTHUC}`,
          this.ndxettuyen
        )
        .then((response) => {
          if (response.status === 201) {
            alert("Thêm thành công");
          }
        })
        .catch((err) => {
          err.message;
        });
    },
    editXetTuyen() {
      this.edit = true;
      this.add = false;
      axios
        .put(
          `${process.env.VUE_APP_URL}${process.env.VUE_APP_HINHTHUC}/${this.xettuyen_id}`, this.ndxettuyen
        )
        .then((response) => {
          if (response.status === 200) {
            alert("Sua thanh cong")
          }
        })
        .catch((err) => {
          return err.message;
        });
    },
    hideForm() {
      // this.$refs.observer.reset();
      this.$emit("hideForm");
    },
  },
  created() {},
  watch: {
    xettuyen_id(value) {
      if (value != "") {
        axios
          .get(
            `${process.env.VUE_APP_URL}${process.env.VUE_APP_HINHTHUC}/${value}`
          )
          .then((response) => {
            if (response.status === 200) {
              this.ndxettuyen = response.data;
            }
          })
          .catch((err) => {
            return err.message;
          });
      }
    },
  },
};
</script>

<style  scoped>
</style>