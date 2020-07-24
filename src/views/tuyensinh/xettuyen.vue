<template>
  <div class="col-md-3 col-sm-6 mb-2 p-1 d-flex">
    <form class="xettuyen  d-flex align-items-stretch">
      <div class="card shadow text-center bg-light">
        <div class="m-3">
          <h5 class="p-4 rounded-top" style="background-color: gainsboro; ">{{xettuyen.tittle}}</h5>
          <p>Ngày bắt đầu: {{xettuyen.start_date}}</p>
          <hr />
          <p>Hạn đăng ký: {{xettuyen.end_date}}</p>
          <hr />
          <p>Chỉ tiêu: {{xettuyen.target}}</p>
          <hr />
          <p>Điều kiện: {{xettuyen.condition}}</p>
          <hr />
          <input
          d-flex align-items-end
            type="submit"
            class="btn btn-primary my-3 align-self-center"
            name="DangKy"
            style="font-size: 15px; width:90px"
            value="Đăng ký"
          />
        </div>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  props:['xettuyen']
};
</script>

<style scoped>
.card.shadow.text-center.bg-light:hover {
  background-color: white !important;
}
</style>