<template>
  <div class="header">
     <div class="welcome">Hi，欢迎来到券小优</div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      isShowList: false
    };
  },
  created() {},
  methods: {}
};
</script>
<style lang="scss" scoped>
.header {
  width: 100%;
  height: 36px;
  line-height: 36px;
  background: #f2f2f2;
  .welcome {
    width: 1100px;
    margin: 0 auto;
    font-size: 12px;
    color: #999999;
    letter-spacing: 0;
  }
}
</style>



