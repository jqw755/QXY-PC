<template>
  <div class="commodity-list">
      <div class="nav">
          <span class="nav-border"></span>
          <span class='navSelected'>猜你喜欢</span>
      </div>
      <div class="list">
        <commodity v-for="(item,index) in commodityListLike" :key="index" :commodity="item"></commodity>
      </div>
  </div>
</template>
<script>
import Bus from "./../../bus.js";
import commodity from "./../home/commodity.vue";
export default {
  data() {
    return {
      commodityListLike: []
    };
  },
  created() {
    Bus.$on("getTarget", target => {
      this.commodityListLike = target;
    });
  },
  methods: {},
  components: {
    commodity
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
    span:hover {
      cursor: pointer;
    }
    .navSelected {
      width: 72px;
      font-size: 14px;
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
