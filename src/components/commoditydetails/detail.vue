<template>
  <div class="container">
    <Header></Header>
    <Cup></Cup>
    <commoditydetail></commoditydetail>
    <commodityListLike></commodityListLike>
    <Footer></Footer>
  </div>
</template>
<script>
import Header from "./../home/header.vue";
import Cup from "./../home/cup.vue";
import commodityListLike from "./commodityListLike.vue";
import commoditydetail from "./commoditydetail.vue";
import Footer from "./../home/footer.vue";
export default {
  data() {
    return {};
  },
  created() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
    window.pageYOffset = 0;
  }, 
  components: {
    Header,
    Cup,
    commoditydetail,
    commodityListLike,
    Footer
  }
};
</script>
<style lang="scss" scoped>

</style>


