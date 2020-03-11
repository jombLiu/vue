<template>
  <div>
    <Header title="我的哈希" />
    <div>Hello Movie</div>
    <Footer />
  </div>
</template>

<script>
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default {
  name: "Mine",
  components:{
    Header, Footer
  }
};
</script>

<style>
</style>