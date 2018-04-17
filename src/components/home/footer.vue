<template>
  <div class="footer">
    <div class="qrcode">
      <div class="qrcode-content">
        <div class="qrcodeleft"> 
          <div class="web_logo" ></div>
          <div class="i1">聪明的人，都会省钱</div>
          <div class="i2">购物省钱神器</div>
        </div>
        <div class="qrcoderight">
          <img src="./../../assets/qrcode.png">
        </div>
      </div>
    </div>
    <div class="copyright">
      <a href="http://www.miitbeian.gov.cn/">沪ICP备18011736号-1</a>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.footer {
  width: 100%;
  height: 194px;
  text-align: center;
  .qrcode {
    height: 155px;
    line-height: 155px;
    background: #434446;
    position: relative;
    .qrcode-content {
      width: 250px;
      height: 100px;
      line-height: 100px;
      position: absolute;
      left: 66.8%;
      top: 39px;
      display: flex;
      justify-content: space-between;
      .qrcodeleft {
        width: 130px;
        height: 100px;
        line-height: 100px;
        .web_logo {
          position: absolute;
          width: 130px;
          height: 41px;
          background: url("./../../assets/quanxiaoyou_web_logo.png");
        }
        div {
          text-align: right;
          width: 130px;
          height: 18px;
          line-height: 18px;
          font-size: 14px;
          color: #ffffff;
          letter-spacing: 0;
        }
        .i1 {
          position: absolute;
          top: 47px;
        }
        .i2 {
          position: absolute;
          top: 71px;
          font-size: 12px;
        }
      }
      .qrcoderight {
        width: 100px;
        height: 100px;
      }
    }
  }
  .copyright {
    height: 39px;
    line-height: 39px;
    background: #38383a;
    a {
      font-size: 12px;
      color: #ffffff;
      letter-spacing: 0;
    }
  }
}
</style>