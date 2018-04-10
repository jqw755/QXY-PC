<template>
  <div class="commodity-list">
      <div class="nav">
          <span class="nav-border"></span>
          <span class="navSelected">精选推荐</span>
          <span  >好货推荐</span>
      </div>
      <div class="list">
        <commodity v-for="(item,index) in commodityList" :key="index" :commodity="item"></commodity>
        <!-- <commodity></commodity>
        <commodity></commodity>
        <commodity></commodity>
        <commodity></commodity>
        <commodity></commodity>
        <commodity></commodity>
        <commodity></commodity>
        <commodity></commodity> -->
      </div>
      <pagenation @targetPage="getTargetPage"></pagenation>
  </div>
</template>
<script>
import Bus from "./../../bus.js";
import commodity from "./commodity.vue";
import pagenation from "./pagenation.vue";
export default {
  data() {
    return {
      commodityList: [],
      page: 1
    };
  },
  created() {
    Bus.$on("getTarget", target => {
      this.commodityList = target;
    });
  },
  methods: {
    getTargetPage: function(data) {
      this.page = data;
      Bus.$emit("goTarget", data);
    }
  },
  components: {
    commodity,
    pagenation
  }
};
</script>

<style lang="scss" scoped>
.commodity-list {
  width: 100%;
  padding-top: 23px;
  padding-bottom: 30px;
  background-color: #f2f2f2;
  .nav {
    width: 1100px;
    height: 23px;
    line-height: 23px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    span {
      width: 56px;
      height: 18px;
      line-height: 18px;
      font-size: 14px;
      color: #333333;
      letter-spacing: 0;
      margin-right: 29px;
    }
    .nav-border {
      width: 4px;
      background: #ff6602;
      margin-right: 12px;
    }
    .nav-border:hover {
      cursor: default;
    }
    .navSelected {
      width: 72px;
      font-size: 18px;
      color: #ff6602;
      letter-spacing: 0;
    }
  }
  .list {
    width: 1100px;
    margin: 20px auto 0;
  }
}
</style>
