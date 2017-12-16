<template>
 <div id="demo" class="demo">
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

           <div class="pic" :style="{backgroundImage:'url('+ onTabList.coverFile +')'}"></div>
           <div class="demo-name" v-text="onTabList.title"></div>
           <div class="demo-text">
             <span><span>户型：</span><span v-text="onTabList.houseType"></span></span>
             <span><span>风格：</span><span v-text="onTabList.style"></span></span>
           </div>
           <div class="demo-more">
             <span class="demo-more-look">
               <span class="iconfont">&#xe646;</span>
               <span v-text="onTabList.hits">666</span>
             </span>
             <span class="demo-more-btn" v-if="onTabList.designerId != 0">预约设计</span>
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

   <!-- Footer Start -->
   <slot name="app-footer"></slot>
   <!-- Footer End -->

 </div>
</template>
<script>
import InfiniteLoading from 'vue-infinite-loading'
export default {
 name: "demo",
 components: {
   InfiniteLoading,
 },
 props: ['serviceUrl'],
 data: () => ({
   msg:[],
   userId:"32769",
   pageSize: 14,//每页 数据个数
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
       console.log("meiyou fen");
       $state.complete();
     } else {
       console.log("fen");

       //分页请求 Start
       this.$http({
         // url: this.serviceUrl + "main/works_json_list.htm",
         url: "http://192.168.8.53/main/works_json_list.htm",
         method:"POST",
         params: {
           code: this.msg[num].code,//请求那个分类下的数据
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
     // url: this.serviceUrl + "main/works_json_list.htm",
     url: "http://192.168.8.53/main/works_json_list.htm",
     method:"POST",
     params: {
       pageSize: this.pageSize,
     },
     headers: {
         "Content-Type": "x-www-from-urlencoded"
     }
   }).then((res) => {
     console.log(JSON.stringify(res.data));
     this.msg = res.data;
   },(res) => {
     console.log("error from 视频直播live.vue");
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
     width: 5.52rem;
     font-size: .448rem;
     height: $tabHeight;
     padding: 0 $padding;
     text-align: center;
     display: inline-block;
     margin: 0 $padding 0 0;
     line-height: $tabHeight;
     &:last-child {
       margin: 0;
     }
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
 bottom: 1.6rem;
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
       $demoListW: 5.92rem;
       $demoListH: 6.272rem;
       float: left;
       width: $demoListW;
       height: $demoListH;
       margin: 0 0 $padding/2 0;
       padding: .096rem .096rem 0;
       box-sizing: border-box;
       background: #fff;
       &:nth-child(2n + 1){
         margin-right: $padding/2;
       }
       .pic {
         @include pic-bg($demoListW - .096rem - .096rem,$demoListH - 2.384rem);
       }
       .demo-name {
         width: 100%;
         color: #333;
         font-size: .416rem;
         height: .832rem;
         line-height: .832rem;
         padding: .16rem $padding/2 0;
         @include text-overflow;
       }
       .demo-text {
         width: 100%;
         color: #666;
         font-size: .384rem;
         height: .704rem;
         line-height: .704rem;
         padding: 0 $padding/2;
         @include text-overflow;
       }
       .demo-more {
         width: 100%;
         color: #999;
         font-size: .352rem;
         line-height: .672rem;
         hieght: .672rem;
         padding: 0 $padding/2;
         @include text-overflow;
         .demo-more-btn {
           width: 1.92rem;
           height: .672rem;
           float: right;
           font-size: .352rem;
           color: #fff;
           text-align: center;
           border-radius: .048rem;
           background: $orange;
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
