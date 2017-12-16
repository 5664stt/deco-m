<template>
  <div id="hotNew" class="hotNew">
    <div class="hotNew-banner-box">
      <div class="hotNew-banner hotNew-cont">
        <swiper class="hotNew-banner-banner" :options="bannerSwiperOption">
            <swiper-slide
              class="hotNew-banner-list"
              v-for="bannerList in msg.hotNews"
              :key="bannerList.key"
              :style="{backgroundImage: 'url(' +bannerList.hotNewsPic+ ')'}">
              <p class="hotNew-banner-title" v-text="bannerList.title"></p>
            </swiper-slide>
            <!--<div class="swiper-pagination" slot="pagination"></div>-->
            <div class="swiper-scrollbar" slot="scrollbar"></div>
        </swiper>
      </div>
    </div>
    <ul class="hotNew-box">
    	<li class="hotNew-chunk" v-for="hotNew in msg.hotNewsList" :key="hotNew.key">
    		<p class="hot-title">
    			<span v-text="hotNew.classTitle"></span>
    			<!--<a data-id="hotNew.Id" href="javascript:;">更多&gt;</a>-->
    			<router-link class="iconfont" to="" tag="a">更多&#xe602;</router-link>
    		</p>
    		<ul>
    			<li class="hot-list" v-for="hotList in hotNew.articles">
    				<p class="hot-name" v-text="hotList.articleTitle"></p>
	          <p class="hot-intro" v-text="hotList.intro"></p>
    			</li>
    		</ul>
    	</li>
    </ul>
  </div>
</template>
<script>
export default {
  name: "hotNew",
  props: ['serviceUrl'],
  data: () => ({
		msg:{},
		bannerSwiperOption: {
      notNextTick: true,
      autoplay: 4000,
      direction : 'horizontal',//vertical垂直
      grabCursor : true,
      setWrapperSize :true,
      autoHeight: true,
//    loop: true,
//    pagination: '.hotNew-banner .swiper-pagination',
      observeParents:true,
      scrollbar:'.swiper-scrollbar',
      observeParents:true,
    }
  }),
  mounted: function(){
    beforeCreate: {
      this.$http({
        url: this.serviceUrl + "app/article_all_list.htm",
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
//      console.log(JSON.stringify(res.data));
        this.msg = res.data;
      }, function (res) {
        // 请求失败回调
        alert("error from hotNew.vue");
      });
    }
  }
}
</script>
<style lang="scss" scoped>
@import "./../../css/unit/common";
.swiper-container {
  overflow: initial;
}

.count {
  position: fixed;
  top: 0;
  width: 100%;
  bottom: 1.6rem;
  overflow-y: auto;
  .hotNew-banner-box {
    $height: 7.504rem;
    width: 12rem;
    height: $height;
    .hotNew-banner {
      top: 0;
      left: 0;
      width: 12rem;
      height: $height;
      font-size: .576rem;
      &:after {
        content: "";
        width: 12rem;
        display: block;
        height: $height;
      }
      .hotNew-banner-banner {
        width: 100%;
        height: $height;
        background: #fff;
        overflow: hidden;
        font-size: 0;
        .hotNew-banner-list {
          @include pic-bg(100%,$height);
        }
      }
    }
  }
}
.hotNew-banner-title {
	position: absolute;
	width: 100%;
	height: 1.28rem;
	line-height: 1.28rem;
	left: 0;
	bottom: 0;
	background: rgba(0,0,0,.5);
	color: #fff;
	font-size: 0.448rem;
	padding: 0 0.32rem;
	@include text-overflow;
}
.hotNew-box {
	background-color: #EEEEEE;
}
.hotNew-chunk {
	margin-bottom: 0.32rem;
	background-color:#fff;
	.hot-title {
		height: 1.28rem;
		line-height: 1.28rem;
		border-left: 0.32rem solid #4AAB2D;
		padding: 0 0.4rem;
		font-size: .608rem;
		border-bottom:0.016rem solid #eee;
		a {
			float: right;
			font-size: 0.448rem;
			color: #999;
		}
	}
}
.hot-list {
	padding: 0.25rem 0.32rem;
	border-bottom:0.016rem solid #eee;
}
.hot-name {
	height: 1rem;
  line-height: 1rem;
	font-size: .576rem;
	@include text-overflow;
}
.hot-intro{
	text-indent:2em;
	line-height: 0.56rem;
	color: #B3B3B3;
	font-size: 0.448rem;
}
</style>
