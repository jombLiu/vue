<template>
  <div class="header">{{title}}</div>
</template>

<script>
export default {
  name: "Header",
  props:{
    title:{
      type: String,
      default: "哈希电影"
    }
  }
}
</script>

<style scoped>
  .header{
    background-color: #f03d37;
    color: #fff;
    width: 100%;
    height: 45px;
    line-height: 45px;
    text-align: center;
    font-size: 16px;
    /* position: fixed;
    top: 0; */
  }
</style>