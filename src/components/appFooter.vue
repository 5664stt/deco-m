<template>
  <div id="footer" class="footer">
    <ul class="foot cont">
      <router-link to="/home" tag="li" class="foot-list">
        <!-- <span class="iconfont foot-btn-icon default">&#xe66e;</span>
        <span class="iconfont foot-btn-icon cur">&#xe65f;</span> -->
        <span class="iconfont foot-btn-icon default">&#xe705;</span>
        <span class="iconfont foot-btn-icon cur">&#xe702;</span>
        <span class="foot-btn-text">首页</span>
      </router-link>
      <router-link to="/demo" tag="li" class="foot-list">
        <span class="iconfont foot-btn-icon default">&#xe704;</span>
        <span class="iconfont foot-btn-icon cur">&#xe703;</span>
        <span class="foot-btn-text">案例</span>
      </router-link>
      <router-link to="/diary" tag="li" class="foot-list">
        <span class="iconfont foot-btn-icon default">&#xe6f3;</span>
        <span class="iconfont foot-btn-icon cur">&#xe6f7;</span>
        <span class="foot-btn-text">日记</span>
      </router-link>
      <router-link to="/shoppingCar" tag="li" class="foot-list">
        <span class="iconfont foot-btn-icon default">&#xe887;</span>
        <span class="iconfont foot-btn-icon cur">&#xe888;</span>
        <span class="foot-btn-text">购物车</span>
      </router-link>
      <router-link to="/my" tag="li" class="foot-list">
        <span class="iconfont foot-btn-icon default">&#xe70f;</span>
        <span class="iconfont foot-btn-icon cur">&#xe710;</span>
        <span class="foot-btn-text">我的</span>
      </router-link>
    </ul>
  </div>
</template>
<script>
export default {
  name: "footer",
  data: () => ({
    flag: ""
  })
}
</script>
<style lang="scss" scoped type="text/css">
  @import "../css/unit/common";
  .footer {
    width: 100%;
    /* height: 1.6rem; */
    .foot {
      left: 0;
      bottom: 0;
      z-index: 5;
      width: 100%;
      color: #666;
      height: 1.6rem;
      position: fixed;
      font-size: .576rem;
      background: #fff;
      overflow: hidden;
      box-shadow: 0 -.032rem .192rem rgba(0,0,0,.3);
      /* &:after {
        content: "";
        width: 100%;
        height: 1.6rem;
        display: block;
      } */
      .foot-list {
        width: 20%;
        float: left;
        height: 1.6rem;
        padding: .16rem 0;
        text-align: center;
        .foot-btn-icon {
          height: .8rem;
          display: block;
          font-size: .768rem;
          line-height: .8rem;
        }
        .foot-btn-text {
          height: .48rem;
          display: block;
          font-size: .32rem;
          line-height: .48rem;
        }
        .foot-btn-icon {
          &.default {
            display: block;
          }
          &.cur {
            display: none;
          }
        }
        &.cur {
          color: $green;
          .foot-btn-icon {
            &.default {
              display: none;
            }
            &.cur {
              display: block;
            }
          }
        }
      }
    }
  }

</style>
