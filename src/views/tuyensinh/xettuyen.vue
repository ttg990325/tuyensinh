<template>
  <div class="col-md-3 col-sm-6 mb-2 p-1 d-flex">
    <form class="xettuyen  d-flex align-items-stretch">
      <div class="card shadow text-center bg-light">
        <div class="m-3">
          <h5 class="p-4 rounded-top" style="background-color: gainsboro; ">{{xettuyen.title}}</h5>
          <p>Ngày bắt đầu: {{xettuyen.start_date | convertIntToDate}}</p>
          <hr />
          <p>Hạn đăng ký: {{xettuyen.end_date | convertIntToDate}}</p>
          <hr />
          <p>Chỉ tiêu: {{xettuyen.target}}</p>
          <hr />
          <p>Điều kiện: {{xettuyen.condition}}</p>
          <hr />
          <button
          d-flex align-items-end
            type="button"
            class="btn btn-primary my-3 align-self-center"
            name="edit"
            style="font-size: 15px; width:90px"
            @click="$emit('evenEdit', xettuyen.id)"
          >Sửa</button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
// import moment from 'moment';
export default {
  props:['xettuyen'],
  filters: {
    convertIntToDate: function(date) {
       var d = new Date(date),
          month = '' + (d.getMonth() + 1),
          day = '' + d.getDate(),
          year = d.getFullYear();

      if (month.length < 2) 
          month = '0' + month;
      if (day.length < 2) 
          day = '0' + day;

      return [year, month, day].join('-');
    }
  },
  methods: {
    editxt() {
      this.$emit('evenEdit', this.xettuyen.id);
    }
  },
}
</script>

<style scoped>
.card.shadow.text-center.bg-light:hover {
  background-color: white !important;
}
</style>