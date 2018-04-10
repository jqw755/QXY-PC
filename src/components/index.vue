<template>
  <div class="container">
    <Header></Header>
    <Cup></Cup>
    <Nav></Nav>
    <CommondityList></CommondityList>
    <Footer></Footer>
  </div>
</template>
<script>
import Header from "./home/header.vue";
import Cup from "./home/cup.vue";
import Nav from "./home/nav.vue";
import CommondityList from "./home/commodityList.vue";
import Footer from "./home/footer.vue";
export default {
  data() {
    return {};
  },
  created() {},
  components: { Header, Cup, Nav, CommondityList, Footer }
};
</script>

<style scoped>
.container {
  width: 100%;
  height: auto;
  box-sizing: border-box;
}
</style>


