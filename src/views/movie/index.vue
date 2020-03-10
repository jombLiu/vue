<template>
  <div>
    <Header title="哈希电影" />
    <ol class="movie-nav">
      <router-link tag="li" to="/movie/city">西安</router-link>
      <router-link tag="li" to="/movie/nowPlaying">正在热映</router-link >
      <router-link tag="li" to="/movie/comingSoon">即将上映</router-link >
      <router-link tag="li" to="/movie/searchMovie">搜索</router-link >
    </ol>
    <keep-alive>
      <router-view />
    </keep-alive>
    <Footer />
  </div>
</template>

<script>
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default {
  name: "Movie",
  components: {
    Header,
    Footer
  }
};
</script>

<style scoped>
.movie-nav {
  display: flex;
  align-items: center;
  justify-content: space-around;
  border-bottom: 1px solid #f1f1f1;
}
.movie-nav li {
  border-bottom: 2px solid transparent;
  height: 35px;
  line-height: 35px;
  padding: 0 10px;
}
.movie-nav li.router-link-active {
  border-bottom-color: #f03d37;
}
</style>