<template>
  <div class="search_content">
    <div class="search_box">
      <input type="text" placeholder="电影名..." v-model="message">
    </div>
  </div>
</template>

<script>
export default {
    name: "SearchMovie",
    data(){
      return{
        message: "",
        movieList: []
      }
    },
    watch:{
      message(newVal){
        console.log(newVal);
      }
    }
}
</script>

<style scoped>
  .search_content{
    height: 600px;
    overflow: auto;
  }
  .search_content input{
    outline: 0;
    border: 1px solid #e5e5e5;
    padding: 6px 12px;
    border-radius: 3px;
    background-color: #fff;
    width: 93%;
  }
  .search_box{
    padding: 12px;
    background-color: #f5f5f5;
  }
</style>