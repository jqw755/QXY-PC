<template>
  <div class="nav">
    <div class="nav-header">      
        <div class="nav-top">
            <span class="new">今日上新</span>
            <span class="index"><router-link to="/">首页</router-link></span>
            <!-- <span class="mall">金币商城</span> -->
        </div>
    </div>
    <div class="product-content">
        <div class="product-main">
           <div class="bread">
               券小优->商品详情
           </div>
           <div class="product">
               <img :src="commodity.pict_url" alt="">
               <div class="introduce">
                   <h2>{{commodity.title}}</h2>
                   <p>{{commodity.item_description}}</p>
                   <div class="price">
                       <div class="current-price">¥{{commodity.zk_coupon_price}}</div>
                       <div class="original-price">¥{{commodity.zk_final_price}}</div>
                       <span class="blank"></span>
                       <span class="salesnumber">销量</span>
                       <span class="number">{{commodity.volume}}</span>
                   </div>
                   <p class="tooltip">{{tooltip}}</p>
                   <div class="ticket">
                       <div class="ticket-price">券 ¥{{commodity.coupon_price}}</div>
                       <button @click="gotoProduct()">立即领券</button>
                   </div>
               </div>
           </div>
        </div>
    </div>

  </div>
</template>
<script>
import { mapState, mapGetters, mapMutations, mapActions } from "vuex";
import Bus from "./../../bus.js";
export default {
  data() {
    return {
      tooltip:
        "此处价格和优惠券面额可能显示有错，请点下面立即领券查看价格为准～～",
      commodity: [],
      iid: ""
    };
  },
  created() {
    let iid = this.$utils.getUrlKey("iid");
    this.iid = iid;
    this.commodity = JSON.parse(localStorage.getItem("commodity"));
  },
  watch: {
    "$route.query.iid": function(id) {
      let _this = this;
      _this.iid = id;
      _this.commodity = JSON.parse(localStorage.getItem("commodity"));
      this.$http
        .get(
          "https://www.quanxiaoyou.com/public/api/qxy/tbkCouponInfoByNum?numid=" +
            id
        )
        .then(function(res) {
          _this.commodity = res.data.content;
          document.body.scrollTop = 0;
          document.documentElement.scrollTop = 0;
          window.pageYOffset = 0;
        })
        .catch(function(error) {
          console.log(error);
        });
    }
  },
  methods: {
    gotoProduct: function() {
      window.open(this.commodity.coupon_click_url);
    }
  }
};
</script>

<style lang="scss" scoped>
.nav {
  width: 100%;
  .nav-header {
    width: 100%;
    height: 40px;
    line-height: 40px;
    background: #ff6602;
    .nav-top {
      width: 1100px;
      margin: 0 auto;
      font-size: 16px;
      color: #ffffff;
      letter-spacing: 0;
      span:hover {
        cursor: pointer;
      }
      .new {
        display: inline-block;
        width: 220px;
        text-align: center;
        background: rgba($color: #000000, $alpha: 0.1);
      }
      .index {
        margin-left: 44px;
      }
      .mall {
        margin-left: 40px;
      }
    }
  }
  .product-content {
    width: 100%;
    padding-top: 20px;
    height: 434px;
    line-height: 434px;
    background: #f2f2f2;
    .product-main {
      width: 1100px;
      padding: 0px 20px 20px 20px;
      height: 434px;
      background: #ffffff;
      margin: 0px auto;
      .bread {
        height: 64px;
        line-height: 64px;
        font-size: 18px;
        color: #333333;
      }
      .product {
        display: flex;
        img {
          width: 350px;
          height: 350px;
        }
        .introduce {
          width: 648px;
          height: 350px;
          margin-left: 32px;
          h2 {
            // height: 26px;
            line-height: 26px;
            margin-top: 8px;
            font-size: 20px;
            color: #333333;
            overflow: hidden; /*内容超出后隐藏*/
            text-overflow: ellipsis; /* 超出内容显示为省略号*/
          }
          p {
            height: 48px;
            line-height: 24px;
            margin-top: 10px;
            font-size: 18px;
            color: #333333;
            overflow: hidden; /*内容超出后隐藏*/
            text-overflow: ellipsis; /* 超出内容显示为省略号*/
          }
          .price {
            width: 408px;
            height: 80px;
            line-height: 80px;
            margin-top: 20px;
            background: #f2f2f2;
            display: flex;
            .current-price {
              margin-left: 40px;
              font-size: 20px;
              color: #333333;
            }
            .original-price {
              margin-left: 20px;
              font-size: 16px;
              color: #999999;
              text-decoration: line-through;
            }
            .blank {
              display: block;
              margin-left: 22px;
              margin-top: 20px;
              width: 1px;
              height: 40px;
              line-height: 80px;
              background: #dddddd;
            }
            .salesnumber {
              margin-left: 60px;
              font-size: 16px;
              color: #333333;
            }
            .number {
              margin-left: 10px;
              font-size: 16px;
              color: #ff6602;
            }
          }
          .tooltip {
            margin-top: 20px;
            height: 19px;
            line-height: 19px;
            margin-top: 10px;
            font-size: 14px;
            color: #333333;
          }
          .ticket {
            width: 232px;
            height: 60px;
            line-height: 60px;
            margin-top: 30px;
            display: flex;
            .ticket-price {
              width: 116px;
              height: 56px;
              line-height: 56px;
              border: 2px solid #ff6602;
              font-size: 18px;
              color: #ff6602;
              text-align: center;
            }
            button {
              width: 116px;
              height: 60px;
              line-height: 60px;
              background: #ff6602;
              border: none;
              outline: none;
              font-size: 16px;
              color: #ffffff;
            }
            .ticket-price:hover,
            button:hover {
              cursor: pointer;
            }
          }
        }
      }
    }
  }
}
</style>

