<template>
  <ul class="footer">
      <router-link tag="li" to="/movie"><i class="iconfont icon-dianying"></i><div>电影</div></router-link>
      <router-link tag="li" to="/cinema"><i class="iconfont icon-yingyuan"></i><div>影院</div></router-link>
      <router-link tag="li" to="/mine"><i class="iconfont icon-wode"></i><div>我的</div></router-link>
  </ul>
</template>

<script>
export default {
  name: "Footer"
}
</script>

<style scoped>
  .footer{
    display: flex;
    width: 100%;
    height: 45px;
    position: fixed;
    left: 0;
    bottom: 0;
    align-items: center;
    justify-content: space-around;
    border-top: 1px solid #f1f1f1;
  }
  .footer li{
    text-align: center;
  }
  .footer li.router-link-active{
    color: #f03d37;
  }
  .footer li div{
    padding-top: 6px;
  }
</style>