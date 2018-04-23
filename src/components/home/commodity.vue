<template> 
  <div class="coomodity" :data-id='commodity.num_iid'  @click="showDetail"> 
    <img v-lazy="commodity.pict_url" alt="" srcset="">
    <span class="price">券后价： ¥{{commodity.zk_coupon_price}}</span>
    <span class="default-price">原价：¥{{commodity.zk_final_price}}</span>
    <h2>{{commodity.title}}</h2>
    <p class="saleNumber">销量 {{commodity.volume}}</p>
    <div class="information">
      <span class="tmall" v-if="commodity.user_type == 1"></span>
      <span class="tb tmall" v-if="commodity.user_type == 0"></span> 
      <div class="ticket">券 ¥{{commodity.coupon_price}}</div>
    </div>
  </div>
</template>
<script>
import Bus from "./../../bus.js";
export default {
  data() {
    return {};
  },
  props: ["commodity"],
  methods: {
    showDetail: function(e) {
      let routeData = this.$router.resolve({
        name: "detail",
        query: { iid: this.commodity.num_iid }
      });
      window.open(routeData.href, "_blank");
      // this.$router.push({
      //   path: "/detail?iid=" + this.commodity.num_iid
      // });
      localStorage.setItem("commodity", JSON.stringify(this.commodity));
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
      window.pageYOffset = 0;
    }
  }
};
</script>

<style lang="scss" scoped>
.coomodity {
  display: inline-block;
  width: 261px;
  height: 385px;
  margin-right: 10px;
  margin-bottom: 20px;
  background: #ffffff;
  border: 1px solid #ffffff;
  img {
    width: 221px;
    height: 221px;
    margin: 20px 20px 10px 20px;
  }
  .price {
    font-size: 14px;
    color: #ff2b22;
    letter-spacing: 0;
    margin-left: 20px;
    font-weight: bolder;
  }
  .default-price {
    font-size: 12px;
    color: #999999;
    letter-spacing: 0;
    margin-left: 10px;
  }
  h2 {
    font-size: 12px;
    color: #333333;
    letter-spacing: 0;
    width: 194px;
    margin-left: 20px;
    margin-top: 10px;
    overflow: hidden; /*内容超出后隐藏*/
    text-overflow: ellipsis; /* 超出内容显示为省略号*/
    white-space: nowrap; /*文本不进行换行*/
  }
  .saleNumber {
    font-size: 12px;
    color: #999999;
    letter-spacing: 0;
    margin-left: 20px;
    margin-top: 10px;
  }
  .information {
    width: 221px;
    display: flex;
    align-items: center;
    margin: 15px auto 0;
    text-align: center;
    .tmall {
      display: inline-block;
      width: 22px;
      height: 22px;
      background: url("./../../assets/tmall.png");
    }
    .tb {
      background: url("./../../assets/taobao.png");
    }
    .baoyou {
      display: inline-block;
      width: 28px;
      height: 16px;
      line-height: 16px;
      text-align: center;
      font-size: 12px;
      color: #ffffff;
      letter-spacing: 0;
      background: #ffa248;
      margin-left: 5px;
    }
    .ticket {
      margin-left: 118px;
      width: 78px;
      height: 22px;
      line-height: 22px;
      background-image: url("./../../assets/ticket.png");
      border-radius: 2px;
      text-align: center;
      font-size: 12px;
      color: #ffffff;
      letter-spacing: 0;
    }
  }
}
.coomodity:hover {
  cursor: pointer;
  border: 1px solid #ff6602;
}
</style>

