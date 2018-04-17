<template>
  <div class="cup">
      <div class="top-wrap clearfix">
          <div class="logo"></div>
          <div class="search-wrap clearfix">
              <input type="text" placeholder="请输入关键词" v-model="keyWord"/>
              <span @click="searchTaregetProducts()">搜索</span>
              <ul class="clearfix">
                <li v-for="(item,index) in recommendation"  :key="index" @click="product(item)">{{item}}</li>             
              </ul>
          </div>
          <div class="commit">
              <div class="guard1">
                <img src="./../../assets/safeguard_1.png" alt="">
                <span>正品好货</span>
              </div>
              <div class="guard2">
                <img src="./../../assets/safeguard_2.png" alt="">
                <span>人工精选</span>
              </div>
              <div class="guard3">
                <img src="./../../assets/safeguard_3.png" alt="">
                <span>专享优惠券</span>
              </div>
          </div>
      </div>
  </div>
</template>
<script>
import Bus from "./../../bus.js";
export default {
  data() {
    return {
      keyWord: "",
      currentPage: 1,
      recommendation: [
        "羽绒服",
        "卫衣",
        "保温杯",
        "加湿器",
        "打底裤",
        "良品铺子",
        "火鸡面",
        "除螨仪"
      ]
    };
  },
  created() {
    let _this = this;
    document.onkeyup = function(e) {
      if (window.event) e = window.event;
      var code = e.charCode || e.keyCode;
      if (code == 13) {
        _this.searchProducts();
      }
    };
    // if (_this.$route.path == "/") {
    //   this.searchProducts();
    // }
    Bus.$on("goTarget", target => {
      this.currentPage = target;
    });
    Bus.$on("getkeyWord", target => {
      this.keyWord = target;
    });
    this.searchProducts();
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
    window.pageYOffset = 0;
  },
  methods: {
    searchTaregetProducts: function() {
      this.currentPage = 1;
      this.searchProducts();
      Bus.$emit("pageTarget", this.currentPage);
    },
    searchProducts: function() {
      let _this = this;

      this.$http
        .get(
          "https://www.quanxiaoyou.com/public/api/qxy/tbkDgItemCouponGetRequest?pageNo=" +
            this.currentPage +
            "&pageSize=48&q=" +
            this.keyWord
        )
        .then(function(res) {
          Bus.$emit("getTarget", res.data.content);
          // if (_this.$route.path == "/detail") {
          //   _this.$router.push({
          //     path: "/"
          //   });
          // }
        })
        .catch(function(error) {
          console.log(error);
        });
      document.body.scrollTop = 600;
      document.documentElement.scrollTop = 600;
      window.pageYOffset = 600;
    },
    product: function(keyWord) {
      this.keyWord = keyWord;
      this.searchProducts();
      document.body.scrollTop = 600;
      document.documentElement.scrollTop = 600;
      window.pageYOffset = 600;
    }
  },
  watch: {
    currentPage: "searchProducts"
  }
};
</script>

<style lang="scss" scoped>
.cup {
  width: 100%;
  height: 100px;
  line-height: 100px;
  .top-wrap {
    width: 1100px;
    margin: 0 auto;
    display: flex;
    .logo {
      background-image: url("./../../assets/logo.png");
      background-size: 100% 100%;
      background-repeat: no-repeat;
      width: 162px;
      height: 48px;
      margin-top: 27px;
    }
    .search-wrap {
      margin-top: 23px;
      margin-left: 90px;
      width: 481px;
      height: 61px;
      input {
        width: 377px;
        height: 36px;
        line-height: 36px;
        border: 2px solid #ff6602;
        text-indent: 38px;
        background: url("./../../assets/search.png") 9px 10px no-repeat;
        font-size: 14px;
        color: #999999;
        letter-spacing: 0;
        padding: 0;
        float: left;
        border-top-left-radius: 5px;
        border-bottom-left-radius: 5px;
      }
      span {
        display: block;
        width: 100px;
        height: 40px;
        line-height: 40px;
        background: #ff6602;
        font-size: 16px;
        text-align: center;
        color: #ffffff;
        letter-spacing: 0;
        border-top-right-radius: 5px;
        border-bottom-right-radius: 5px;
        float: left;
      }
      span:hover {
        cursor: pointer;
      }
      ul {
        li {
          float: left;
          margin-top: 10px;
          margin-right: 24px;
          height: 15px;
          line-height: 15px;
          font-size: 12px;
          color: #999999;
          letter-spacing: 0;
        }
        li:hover {
          cursor: pointer;
        }
      }
    }
  }
  .commit {
    margin-left: 123px;
    // width: 240px;
    height: 62px;
    margin-top: 19px;
    text-align: center;
    div {
      width: 48px;
      text-align: center;
      margin: 0 auto;
      height: 62px;
      float: left;
      img {
        display: block;
        margin-left: 4px;
        width: 40px;
        height: 40px;
      }
      span {
        display: block;
        height: 15px;
        line-height: 15px;
        margin-top: 7px;
        font-size: 12px;
        color: #999999;
        letter-spacing: 0;
      }
    }
    .guard1 {
      margin-right: 46px;
    }
    .guard2 {
      margin-right: 42px;
    }
    .guard3 {
      width: 60px;
      img {
        margin-left: 10px;
      }
    }
  }
}
</style>

