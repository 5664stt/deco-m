<template>
  <div id="live" class="live">
    <!-- Tab -->
    <div class="tab">
      <ul class="tab-box">
        <li v-for="(tabListBox,index) in msg"
          :class="'tab-list' + ' ' + (index === tabFlag ? 'cur' : '')"
          :key="index"
          v-text="tabListBox.name"
          @click="tab(index)">
        </li>
      </ul>
    </div>

    <!-- Tab Box -->
    <swiper class="on-tab" :options="onTabSwiper" ref="onTabSwiper">
      <swiper-slide class="on-tab-list" v-for="(onTabListBox,index) in msg" :key="index.key">
        <ul class="on-tab-list-box">
          <!-- Main List -->
          <li class="on-tab-list-box-list" v-for="onTabList in onTabListBox.msg" :key="onTabList.key">
            <div class="pic">
              <img :src="onTabList.imgUrl" alt="">
            </div>
            <div class="live-name" v-text="onTabList.title"></div>
            <div class="live-text">专家：<span v-text="onTabList.name"></span></div>
            <div class="live-more">
              <span class="live-more-btn btn1" v-if="index === 0"><span class="iconfont">&#xe62a;</span>正在直播</span>
              <span class="live-more-btn btn2" v-if="index === 1">预约观看</span>
              <span class="live-more-btn btn3" v-if="index === 2">播放</span>
            </div>

          </li>
          <!-- Main List 为空的时候 -->
          <li class="cue-box" v-if="onTabListBox.msg.length == 0">
            <div class="cue">暂无数据...</div>
          </li>
          <!-- Main List 加载更多 -->
          <infinite-loading @infinite="infiniteHandler($event,index)" spinner="circles" v-if="onTabListBox.msg.length != 0">
            <!-- 加载更多却没有数据的时候 -->
            <div class="no-more" slot="no-more">
              该分类下没有更多了...
            </div>
            <div class="no-more" slot="no-results">
              该分类下没有更多了...
            </div>
          </infinite-loading>
        </ul>
      </swiper-slide>
    </swiper>

  </div>
</template>
<script>
import InfiniteLoading from 'vue-infinite-loading'
export default {
  name: "live",
  components: {
    InfiniteLoading,
  },
  props: ['serviceUrl'],
  data: () => ({
    msg:[],
    userId:"32769",
    pageSize: 10,//每页 数据个数
    tabFlag: 0,//切换swiper 的index  同时也是请求的第几个（类别）数据

    onTabSwiper: {
      notNextTick: true,

      observer:true,//修改swiper自己或子元素时，自动初始化swiper
      observeParents:false,//修改swiper的父元素时，自动初始化swiper
      onSlideChangeEnd: function(swiper){
        swiper.update();
      },
    },
  }),
  computed:{
    onTabSwiperFn() {
      return this.$refs.onTabSwiper.swiper
    },
  },
  methods: {
    tab(num) {
      this.onTabSwiperFn.slideTo(num, 300, false);
      this.tabFlag = num;
    },
    infiniteHandler($state,num) {
      if(this.msg[num].currentPage >= this.msg[num].totalPage){
        $state.complete();
      } else {

        //分页请求 Start
        this.$http({
          url: this.serviceUrl + "applet/liveList.htm",
          method:"POST",
          params: {
            userId: this.userId,
            type: this.msg[num].type,//请求那个分类下的数据
            currentPage: parseInt(this.msg[num].currentPage) + 1,//请求第几页的数据
            pageSize: this.pageSize
          },
          headers: {
            "Content-Type": "x-www-from-urlencoded"
          }
        }).then((res) => {
          console.log(JSON.stringify(res.data));
          //更新数据
          this.msg[num].currentPage = res.data.currentPage;
          this.msg[num].totalPage = res.data.totalPage;
          for(let i = 0,max = res.data.msg.length; i < max; i++){
            this.msg[num].msg.push(res.data.msg[i]);
          }
          // console.log(JSON.stringify(this.msg));
          $state.loaded();
        },(res) => {
          alert("error from 视频直播Listlive.vue");
        });
        //分页请求 End

      }
    },
  },
  mounted() {
    //do something after mounting vue instancev  ----------↓----------↓----------
    var that = this;

    //加载默认数据 Start
    this.$http({
      url: this.serviceUrl + "applet/liveIndex.htm",
      method:"POST",
      params: {
        userId: this.userId,
        pageSize: this.pageSize,
      },
      headers: {
          "Content-Type": "x-www-from-urlencoded"
      }
    }).then((res) => {
      console.log(JSON.stringify(res.data));
      this.msg = res.data;
    },(res) => {
      alert("error from 视频直播live.vue");
    });
    //加载默认数据 Start

    //切换Swiper的时候 改变Tab状态
    this.onTabSwiperFn.params.onSlideChangeEnd = function(swiper){
      that.tabFlag = swiper.activeIndex;
    }
  }
}
</script>
<style lang="scss" scoped>
@import "./../../css/unit/common";
$padding: .32rem;
$listBar: #eeeeee;
//main-tab Start
.tab {
  $tabHeight: 1.408rem;
  top: 0;
  left: 0;
  width: 100%;
  position: fixed;
  overflow-x: auto;
  background: #fff;
  height: $tabHeight;
  .tab-box {
    position: absolute;
    z-index: 5;
    min-width: 100%;
    width: auto;
    font-size:0;
    height: $tabHeight;
    white-space: nowrap;
    border-bottom: .032rem solid $listBar;
    padding: 0 $padding;
    box-sizing: border-box;
    .tab-list {
      font-size: .448rem;
      height: $tabHeight;
      padding: 0 $padding;
      display: inline-block;
      margin: 0 $padding 0 0;
      line-height: $tabHeight;
      &.cur {
        color: $green;
        border-bottom: .064rem solid yellowgreen;
      }
    }
  }
}
//main-tab End


//main Start
.on-tab {
  bottom: 0;
  width: 100%;
  top: 1.408rem;
  position: fixed;
  overflow-y: auto;
  .on-tab-list {
    width: 100%;
    overflow-y: auto;
    .on-tab-list-box {
      width: 100%;
      overflow: hidden;

      //Edit Style Start ----------↓----------↓----------
      .on-tab-list-box-list {
        $liveListW: 4.896rem;
        $liveListH: 2.752rem;
        overflow: hidden;
        float: left;
        width: 100%;
        height: $liveListH + $padding;
        padding: $padding $padding 0 $padding;
        background: #fff;
        box-sizing: border-box;
        &:nth-last-child(2){
          height: $liveListH + $padding * 2;
          padding: $padding;
        }
        .pic {
          border: 1px solid #ccc;
          box-sizing: border-box;
          float: left;
          @include pic($liveListW, $liveListH);
        }
        .live-name {
          width: 6.4rem;
          color: #333;
          font-size: .512rem;
          line-height: 1.8em;
          padding: 0 0 0 $padding;
          @include text-overflow;
        }
        .live-text {
          width: 6.4rem;
          color: #666;
          font-size: .448rem;
          line-height: 1.7em;
          padding: 0 0 0 $padding;
          @include text-overflow;
          & > span {
            color: $orange;
          }
        }
        .live-more {
          width: 6.4rem;
          color: #999;
          font-size: .352rem;
          line-height: .672rem;
          hieght: .672rem;
          padding: 0 0 0 $padding;
          @include text-overflow;
          .live-more-btn {
            width: 2.72rem;
            height: 1.056rem;
            line-height: 1.056rem;
            font-size: .48rem;
            float: left;
            color: #fff;
            text-align: center;
            border-radius: 1.056rem;
            &.btn1 {
              color: #f00;
              .iconfont {
                font-size: .48rem;
              }
            }
            &.btn2 {
              background: linear-gradient(150deg,#fd8d43,#fda15f);
            }
            &.btn3 {
                background: linear-gradient(150deg,#4aab2d,#67ca16);
            }
          }
        }
      }
      //Edit Style End ----------↑----------↑----------

      //没有数据
      .cue-box {
        top: 0;
        bottom: 0;
        width: 100%;
        height: auto;
        display: flex;
        position: absolute;
        align-items: center;
        justify-content: center;
        font-size: .448rem;
        .cue {
        }
      }
    }
  }
}
//main End
</style>
