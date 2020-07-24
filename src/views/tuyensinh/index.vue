<template>
  <div class="content-tuyensinh">
    <h2 style="background-color: gainsboro;">ĐĂNG KÝ XÉT TUYỂN</h2>
    <div class="container-fluid">
      <div class="row">
        <xet-tuyen v-for="xettuyen in xettuyens" :key="xettuyen.id" :xettuyen="xettuyen"></xet-tuyen>
      </div>
    </div>
  </div>
</template>
<script>
import Xettuyen from "./xettuyen.vue";
export default {
  components: {
    "xet-tuyen": Xettuyen,
  },
  data() {
    return {
      xettuyens: [
        {
          id: "1",
          tittle: "XÉT HỌC BẠ THEO 5 HỌC KỲ ĐỢT 3",
          "start_date": "27-06-2020",
          "end_date": "30-07-2020",
          target: "45%",
          condition: "",
        },
        {
          id: "2",
          tittle: "XÉT HỌC BẠ ĐTB CẢ NĂM LỚP 10, 11 & HK 1 LỚP 12 ĐỢT 3",
          "start_date": "27-06-2020",
          "end_date": "30-07-2020",
          target: "",
          condition: "",
        },
        {
          id: "3",
          tittle: "XÉT HỌC BẠ LỚP 12 THEO TỔ HỢP 3 MÔN ĐỢT 3",
          "start_date": "27-06-2020",
          "end_date": "30-07-2020",
          target: "",
          condition: "",
        },
        {
          id: "4",
          tittle: "XÉT KẾT QUẢ THI TỐT NGHIỆP THPT",
          "start_date": "27-06-2020",
          "end_date": "30-07-2020",
          target: "40%",
          condition: "Theo ngưỡng điểm quy định của Bộ GDĐT",
        },
        {
          id: "5",
          tittle: "XÉT TUYỂN THÍ SINH BẰNG ĐIỂM KỲ THI SAT ĐỢT 3",
          "start_date": "27-06-2020",
          "end_date": "30-07-2020",
          target: "2%",
          condition: "Từ 800 điểm trở lên",
        },
        {
          id: "6",
          tittle: "XÉT TUYỂN HỌC SINH TỐT NGHIỆP CHƯƠNG TRÌNH THPT QUỐC TẾ",
          "start_date": "27-06-2020",
          "end_date": "30-07-2020",
          target: "2%",
          condition: "Thí sinh tốt nghiệp hoặc hoàn thành chương trình THPT quốc tế",
        },
        {
          id: "7",
          tittle: "XÉT KẾT QUẢ THI ĐÁNH GIÁ NĂNG LỰC ĐHQG TP HCM",
          "start_date": "27-06-2020",
          "end_date": "30-07-2020",
          target: "6%",
          condition: "Thí sinh điểm thi năng lực>= 600 điểm",
        },
      ],
    };
  },
};
</script>

<style scoped>
</style>