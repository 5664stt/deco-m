<template>
  <div id="home" class="home">
    <!-- banner Start -->
    <div class="banner-box">
      <div class="banner cont">
        <router-link class="iconfont search" to="/search" tag="div">&#xe635; 搜索</router-link>
        <swiper class="banner-banner" :options="bannerSwiperOption">
            <swiper-slide
              class="banner-list"
              v-for="bannerList in msg.lunbo"
              :key="bannerList.key"
              :style="{backgroundImage: 'url(' +bannerList.picUrl+ ')'}">
            </swiper-slide>
            <div class="swiper-pagination"  slot="pagination"></div>
        </swiper>
      </div>
    </div>
    <!-- banner End -->

    <!-- 按钮集合 Start -->
    <div class="btn-box">
      <ul>
        <router-link to="/hotNew" tag="li">
          <span class="iconfont btn-icon">&#xe63d;</span>
          <span class="btn-text">装修头条</span>
        </router-link>
        <router-link to="/live" tag="li">
          <span class="iconfont btn-icon">&#xe6b8;</span>
          <span class="btn-text">视频·直播</span>
        </router-link>
        <router-link to="/encyclopedias" tag="li">
          <span class="iconfont btn-icon">&#xe640;</span>
          <span class="btn-text">装修百科</span>
        </router-link>
        <router-link to="/materials" tag="li">
          <span class="iconfont btn-icon">&#xe654;</span>
          <span class="btn-text">绿色建材</span>
        </router-link>
        <router-link to="/capacity" tag="li">
          <span class="iconfont btn-icon">&#xe62b;</span>
          <span class="btn-text">智能家居</span>
        </router-link>
        <router-link to="/detection" tag="li">
          <span class="iconfont btn-icon">&#xe9d2;</span>
          <span class="btn-text">家居检测</span>
        </router-link>
        <router-link to="/enterprise" tag="li">
          <span class="iconfont btn-icon">&#xe65a;</span>
          <span class="btn-text">知名企业</span>
        </router-link>
        <router-link to="/designer" tag="li">
          <span class="iconfont btn-icon">&#xe69c;</span>
          <span class="btn-text">设计师</span>
        </router-link>
        <router-link to="/vr" tag="li">
          <span class="iconfont btn-icon">&#xe66f;</span>
          <span class="btn-text">VR体验</span>
        </router-link>
        <router-link to="/fitment" tag="li">
          <span class="iconfont btn-icon">&#xe65b;</span>
          <span class="btn-text">装修平台</span>
        </router-link>
      </ul>
    </div>
    <!-- 按钮集合 End -->

    <!-- 知名企业 Start -->
    <div class="enterprise">
      <div class="tit">
        <span>知名企业</span>
        <router-link class="iconfont" to="/enterprise" tag="a">更多&#xe602;</router-link>
      </div>
      <swiper class="enterprise-count" :options="enterpriseSwiperOption">
        <swiper-slide
          v-for="enterpriseList in msg.company"
          :key="enterpriseList.key"
          class="enterprise-list">
          <div class="pic"><img :src="enterpriseList.picUrl" alt=""></div>
          <div class="company-text">
            <div class="company-name" v-text="enterpriseList.companyName"></div>
            <div class="company-phone">
              电话：<span v-text="enterpriseList.companyPhone"></span>
            </div>
          </div>
        </swiper-slide>
      </swiper>
    </div>
    <!-- 知名企业 End -->

    <!-- VR Start -->
    <div class="vr">
      <div class="tit">
        <span>V R 体验</span>
        <router-link class="iconfont" to="/vr" tag="a">更多&#xe602;</router-link>
      </div>
      <swiper class="vr-count" :options="vrSwiperOption">
        <swiper-slide class="vr-list" v-for="vrList in msg.vrList" :key="vrList.key">
          <div class="pic" :style="{backgroundImage: 'url(' + vrList.vePic + ')'}"></div>
          <div class="vr-name" v-text="vrList.vrName"></div>
          <span class="iconfont position">&#xe87f;</span>
        </swiper-slide>
      </swiper>
    </div>
    <!-- VR End -->

    <!-- 案例 Start -->
    <div class="demo">
      <div class="tit">
        <span>案例赏析</span>
        <router-link class="iconfont" to="/demo" tag="a">更多&#xe602;</router-link>
      </div>
      <ul class="demo-count">
        <li class="demo-list"
          v-for="demoList in msg.works"
          :key="demoList.key">
          <a href="javascript:;">
            <div class="pic" :style="{backgroundImage: 'url(' + demoList.picUrl + ')'}"></div>
            <div class="demo-text">
              <div class="demo-name" v-text="demoList.workName"></div>
              <div class="demo-style" v-text="demoList.style"></div>
            </div>
          </a>
        </li>
      </ul>
    </div>
    <!-- 案例 End -->

    <!-- 登录 Start -->
    <div class="login">
      <router-link class="login-btn" to="/login" tag="div">立即登录</router-link>
      <div class="login-text">登录后，推荐可以更准确哦~</div>
    </div>
    <!-- 登录 End -->

    <slot name="app-footer"></slot>
  </div>
</template>
<script>
export default {
  name: "home",
  props: ['serviceUrl'],
  data: () => ({
    msg:{},
    enterpriseSwiperOption: {
      slidesPerView: "auto",
      spaceBetween: 25,
      freeMode: true
    },
    vrSwiperOption: {
      slidesPerView: "auto",
      spaceBetween: 25,
      freeMode: true
    },
    bannerSwiperOption: {
      notNextTick: true,
      autoplay: 4000,
      direction : 'horizontal',
      grabCursor : true,
      setWrapperSize :true,
      autoHeight: true,
      loop: true,
      pagination: '.banner .swiper-pagination',
      observeParents:true,
    }
  }),
  // mounted: function(){//模板编译完成
  //   beforeCreate: {
  //     this.$http({
  //       url: this.serviceUrl + "index.htm",
  //       method: "POST",
  //       // 请求后台发送的数据
  //       data: {
  //       },
  //       // 设置请求头
  //       headers: {
  //           "Content-Type": "x-www-from-urlencoded"
  //       }
  //     }).then(function (res) {
  //       // 请求成功回调
  //       console.log(JSON.stringify(res.data));
  //       this.msg = res.data;
  //     }, function (res) {
  //       // 请求失败回调
  //       alert("error from home.vue");
  //     });
  //   }
  // },
  mounted(){//模板编译完成
    this.$http({
      url: this.serviceUrl + "app/index.htm",
      method: "POST",
      // 请求后台发送的数据
      params: {
      },
      // 设置请求头
      headers: {
          "Content-Type": "x-www-from-urlencoded"
      }
    }).then(function (res) {
      // 请求成功回调
      console.log(JSON.stringify(res.data));
      this.msg = res.data;
    }, function (res) {
      // 请求失败回调
      alert("error from home.vue");
    });
  }
}
</script>
<style lang="scss" scoped>
@import "./../../css/unit/common";
.swiper-container {
  overflow: initial;
}

.home {
  position: fixed;
  top: 0;
  width: 100%;
  bottom: 1.6rem;
  overflow-y: auto;
  //banner Start
  .banner-box {
    $height: 5.44rem;
    width: 12rem;
    height: $height;
    .banner {
      top: 0;
      left: 0;
      width: 12rem;
      height: $height;
      //position: fixed;
      font-size: .576rem;
      &:after {
        content: "";
        width: 12rem;
        display: block;
        height: $height;
      }
      .search {
        top: .256rem;
        left: .64rem;
        z-index: 5;
        right: .64rem;
        height: .896rem;
        color: #8e8e93;
        font-size: .448rem;
        line-height: .896rem;
        border-radius: .192rem;
        text-align: center;
        position: absolute;
        background: rgba(255,255,255,1);
        box-shadow: 0 0.032rem 0.096rem rgba(0,0,0,.25);
      }
      .banner-banner {
        width: 100%;
        height: $height;
        background: #fff;
        overflow: hidden;
        font-size: 0;
        .banner-list {
          @include pic-bg(100%,$height);
        }
      }
    }
  }
  //banner End

  //banner下按钮小集合 Start
  .btn-box {
    $height: 5.12rem;
    $padding: .32rem;
    width: 100%;
    height: $height;
    padding: $padding;
    margin: 0 0 $padding;
    background: #fff;
    ul {
      overflow: hidden;
      height: $height - 2 * $padding;
      li {
        width: 20%;
        text-align: center;
        padding: $padding/2 0 0 0;
        height: $height / 2 - $padding;
        float: left;
        & > .btn-icon{
          height: 1.12rem;
          font-size: .8rem;
          color: $green;
          line-height: 1.12rem;
          display: block;
        }
        & > .btn-text{
          height: .8rem;
          line-height: .8rem;
          font-size: .384rem;
          color: #222;
          display: block;
        }
        &:nth-child(1),
        &:nth-child(8) {
          & > .btn-icon {
            font-size: .96rem;
          }
        }
      }
    }
  }
  //banner下按钮小集合 End

  //本页面通用tit Start
  .tit {
    $height: 1.408rem;
    width: 100%;
    height: $height;
    line-height: $height;
    & > span {
      color: #333;
      font-size: .608rem;
    }
    & > a.iconfont {
      float: right;
      color: #999;
      font-size: .384rem;
    }

  }
  //本页面通用tit End

  //知名企业&&VR Start
  .enterprise,.vr,.demo {
    background: #fff;
    padding: .32rem .32rem .64rem;
    margin: 0 0 .32rem;
    overflow: hidden;
    $width: 5.12rem;
    .enterprise-count {
      //$enterpriseHeight: 5.152rem;
      $enterpriseHeight: 6.624rem;
      height: $enterpriseHeight;
      .enterprise-list {
        width: $width;
        height: $enterpriseHeight;
        box-shadow: 0 .032rem .192rem rgba(0,0,0,.3);
        .pic {
          @include pic($width,($enterpriseHeight - 1.504rem));
        }
        .company-text {
          padding: 0 .224rem;
          .company-name {
            color: #666;
            width: 100%;
            height: .768rem;
            padding: .096rem 0 0 0;
            line-height: .768rem;
            font-size: .48rem;
            @include text-overflow;
          }
          .company-phone {
            color: #999;
            font-size: .384rem;
            height: .512rem;
            line-height: .512rem;
          }
        }
      }

    }
    .vr-count {
      $vrHeight: 4.752rem;
      height: $vrHeight;
      .vr-list {
        width: $width;
        height: $vrHeight;
        position: relative;
        box-shadow: 0 .032rem .192rem rgba(0,0,0,.3);
        .pic {
          @include pic-bg($width,$vrHeight - 1.12rem);
        }
        .vr-name {
          height: 1.12rem;
          line-height: 1.12rem;
          font-size: .48rem;
          padding: 0 .224rem;
          color: #666;
        }
        .position {
          position: absolute;
          top: .32rem;
          left: .32rem;
          font-size: .8rem;
          text-shadow: 0 0 15px rgba(255,255,255,1);
        }
      }
    }
  }
  //知名企业&&VR End

  //案例 Start
  .demo {
    $height: 5.44rem;
    padding: .32rem 0 .64rem .32rem;
    overflow: hidden;
    .tit {
      padding: 0 .32rem 0 0;
    }
    .demo-count {
      width: 100%;
      .demo-list {
        float: left;
        width: 50%;
        height: $height;
        padding: 0 .32rem 0 0;
        margin: 0 0 .32rem 0;
        &:nth-last-child(1),
        &:nth-last-child(2) {
          margin: 0;
        }
        & > a {
          display: block;
          height: $height;
          box-shadow: 0 .032rem .192rem rgba(0,0,0,.3);
          .pic {
            @include pic-bg(100%,($height - 1.78rem));
          }
          .demo-text {
            padding: .288rem .224rem 0;
            .demo-name {
              font-size: .448rem;
              height: .64rem;
              line-height: .64rem;
              @include text-overflow;
            }
            .demo-style {
              font-size: .384rem;
              height: .576rem;
              line-height: .576rem;
              @include text-overflow;
            }
          }
        }
      }
    }
  }
  //案例 End

  //登录 Start
  .login {
    padding: .32rem 0;
    .login-btn {
      height: 1.424rem;
      width: 10.4rem;
      border: .032rem solid #e2e2e2;
      border-radius: .096rem;
      margin: 0 auto;
      background: #fff;
      color: #333;
      font-size: .48rem;
      text-align: center;
      line-height: 1.424rem;
    }
    .login-text {
      height: 1.376rem;
      line-height: 1.376rem;
      text-align: center;
      color: #999999;
      font-size: .48rem;
    }
  }
  //登录 End
}
</style>
