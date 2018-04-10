<template>
        <div class="show-page">
        <button class="prev" :disabled="this.currentPage == 1" @click="showPrevPage()">上一页</button>
        <span v-if="preClipped" class="page-index">...</span>
        <span v-for="index in pages" :class="{pageActive:index==currentPage}" :key="index" @click="goTargetPage(index)">{{index}}</span>
        <span v-if="backClipped" class="page-index">...</span>
        <button class="next" @click="showNextPage()">下一页</button>
        <p>转到</p>
        <input type="text" :placeholder="goPage" v-model="goPage"/>
        <p>页</p>
        <button class="go-page" @click="showPage(goPage)">确定</button>
    </div>
</template>
<script>
export default {
  data() {
    return {
      preClipped: false,
      backClipped: true,
      pages: [1, 2, 3, 4, 5],
      index: 1,
      currentPage: 1,
      goPage: 1
    };
  },
  watch: {
    currentPage: "changePages"
  },
  methods: {
    changePages: function() {
      if (this.currentPage >= 5) {
        this.preClipped = true;
      }
      if (this.currentPage > 2) {
        this.pages.splice(0, this.pages.length);
        this.pages.push(
          this.currentPage - 2,
          this.currentPage - 1,
          this.currentPage,
          this.currentPage + 1,
          this.currentPage + 2
        );
      }
    },
    goTargetPage: function(index) {
      if (index !== this.currentPage) {
        this.currentPage = index;
        this.$emit("targetPage", this.currentPage);
      }
    },
    showNextPage: function() {
      this.goTargetPage(this.currentPage + 1);
    },
    showPrevPage: function() {
      this.goTargetPage(this.currentPage - 1);
    }
  }
};
</script>

<style lang="scss" scoped>
.show-page {
  width: 1100px;
  height: 37px;
  line-height: 37px;
  margin: 10px auto 0;
  display: flex;
  .prev,
  .next,
  .go-page {
    width: 72px;
    height: 37px;
    line-height: 37px;
    background: #ffffff;
    border: 1px solid #dddddd;
  }
  .prev {
    margin-left: 284px;
    margin-right: 5px;
  }
  .next {
    margin-left: 5px;
  }
  span {
    width: 37px;
    height: 37px;
    line-height: 37px;
    text-align: center;
    border: 1px solid #dddddd;
    background: #ffffff;
    font-size: 14px;
    color: #333333;
    letter-spacing: 0;
    margin-right: 1px;
  }
  span:hover {
    cursor: pointer;
  }
  .pageActive {
    background: #ff4400;
    color: #ffffff;
  }
  p {
    font-size: 12px;
    color: #333333;
    letter-spacing: 0;
    margin-left: 10px;
    margin-right: 10px;
  }
  input {
    width: 42px;
    background: #f2f2f2;
    border: 1px solid #dddddd;
    text-align: center;
    font-size: 12px;
    color: #333333;
    letter-spacing: 0;
  }
}
</style>

