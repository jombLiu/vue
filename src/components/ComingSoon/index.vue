<template>
  <div class="movie_content">
    <div class="box" v-for="item in comingList" :key="item.id">
      <img :src="item.img | replaceUrl('128.180')" />
      <div class="box_right">
        <p>{{item.nm}}</p>
        <p>评分: {{item.sc}}</p>
        <p>主演: {{item.star}}</p>
        <p>上映时间: {{item.rt}}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    name: "ComingSoon",
    data(){
      return{
        comingList: []
      }
    },
    mounted() {
    this.axios.get("/api/movieComingList?cityId=10").then(res => {
      const msg = res.data.msg;
      if (msg === "ok") {
        const comingList = res.data.data.comingList;
        this.comingList = comingList;
      }
    });
  },
}
</script>

<style scoped>
  .movie_content{
    height: 600px;
    overflow: auto;
  }
  .box{
    display: flex;
    padding: 6px 12px;
  }
  .box img{
    width: 80px;
  }
  .box_right{
    flex: 1;
    padding-left: 12px;
    line-height: 30px;
  }
</style>