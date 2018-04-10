<template>
  <div class="nav">
    <div class="nav-header">      
        <div class="nav-top">
            <span class="new">今日上新</span>
            <span class="index">首页</span>
            <!-- <span class="mall">金币商城</span> -->
        </div>
    </div>
    <div class="nav-content">
        <div class="nav-main">
            <div class="nav-list">
                <ul>
                    <li class="nav1">女装</li>
                    <li class="nav2">男装</li>
                    <li class="nav3">鞋子</li>
                    <li class="nav4">箱包</li>
                    <li class="nav5">母婴</li>
                    <li class="nav6">内衣</li>
                    <li class="nav7">美妆</li>
                    <li class="nav8">配饰</li>
                    <li class="nav9">居家</li>
                    <li class="nav10">文体</li>
                    <li class="nav11">数码</li>
                    <li class="nav12">电器</li>
                    <li class="nav13">美食</li>
                    <li class="nav14">其他</li>                    
                </ul>
            </div>
        </div>
    </div>

  </div>
</template>
<style lang="scss" scoped>
.nav {
  width: 100%;
  height: 448px;
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
  .nav-content {
    width: 100%;
    height: 408px;
    line-height: 408px;
    // background: url("./../../assets/banner.png");
    background: blue;
    .nav-main {
      width: 1100px;
      height: 408px;
      margin: 0 auto;
      .nav-list {
        width: 220px;
        height: 408px;
        line-height: 408px;
        background: rgba($color: #000000, $alpha: 0.1);
        ul {
          width: 100%;
          height: 408px;
          line-height: 408px;
          padding-top: 33px;
          li {
            float: left;
            width: 50%;
            height: 46px;
            line-height: 46px;
            font-size: 14px;
            color: #ffffff;
            letter-spacing: 0;
            text-indent: 55px;
          }
          li:hover {
            cursor: pointer;
          }
          .nav1 {
            background: url("./../../assets/nav1.png") 25px center no-repeat;
          }
          .nav2 {
            background: url("./../../assets/nav2.png") 25px center no-repeat;
          }
          .nav3 {
            background: url("./../../assets/nav3.png") 25px center no-repeat;
          }
          .nav4 {
            background: url("./../../assets/nav4.png") 25px center no-repeat;
          }
          .nav5 {
            background: url("./../../assets/nav5.png") 25px center no-repeat;
          }
          .nav6 {
            background: url("./../../assets/nav6.png") 25px center no-repeat;
          }
          .nav7 {
            background: url("./../../assets/nav7.png") 25px center no-repeat;
          }
          .nav8 {
            background: url("./../../assets/nav8.png") 25px center no-repeat;
          }
          .nav9 {
            background: url("./../../assets/nav9.png") 25px center no-repeat;
          }
          .nav10 {
            background: url("./../../assets/nav10.png") 25px center no-repeat;
          }
          .nav11 {
            background: url("./../../assets/nav11.png") 25px center no-repeat;
          }
          .nav12 {
            background: url("./../../assets/nav12.png") 25px center no-repeat;
          }
          .nav13 {
            background: url("./../../assets/nav13.png") 25px center no-repeat;
          }
          .nav14 {
            background: url("./../../assets/nav14.png") 25px center no-repeat;
          }
        }
      }
    }
  }
}
</style>

