<template>
  <div class="movie_content">
    <div class="box" v-for="item in movieList" :key="item.id">
      <img :src="item.img | replaceUrl('128.180')" />
      <div class="box_right">
        <p>{{item.nm}}</p>
        <p>评分: {{item.sc}}</p>
        <p>主演: {{item.star}}</p>
        <p>上映时间: {{item.rt}}</p>
      </div>
      <button>购买</button>
    </div>
  </div>
</template>

<script>
export default {
    name: "NowPlaying",
    data(){
      return{
        movieList: []
      }
    },
    mounted() {
    this.axios.get("/api/movieOnInfoList?cityId=10").then(res => {
      const msg = res.data.msg;
      if (msg === "ok") {
        const movieList = res.data.data.movieList;
        this.movieList = movieList;
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
    position: relative;
    
  }
  .box img{
    width: 80px;
  }
  .box_right{
    flex: 1;
    padding-left: 12px;
    line-height: 30px;
  }
  .box button{
    border: 0;
    outline: 0;
    background-color: tomato;
    color: #fff;
    width: 60px;
    height: 24px;
    border-radius: 12px;
    position: absolute;
    right: 12px;
    top: 48px;
  }
</style>