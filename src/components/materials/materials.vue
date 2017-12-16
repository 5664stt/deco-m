<template>
 <div id="materials" class="materials">
   <!-- Tab -->
   <div class="tab">
     <ul class="tab-box">
       <li v-for="(tabListBox,index) in msg"
         :class="'tab-list' + ' ' + (index === tabFlag ? 'cur' : '')"
         :key="index"
         v-text="tabListBox.className"
         @click="tab(index)">
       </li>
     </ul>
   </div>

   <!-- Tab Box -->
   <swiper class="on-tab" :options="onTabSwiper" ref="onTabSwiper">
     <swiper-slide class="on-tab-list" v-for="(onTabListBox,index) in msg" :key="index.key">
       <ul class="on-tab-list-box">
         <!-- Main List -->
         <li class="on-tab-list-box-list" v-for="onTabList in onTabListBox.goodsArray" :key="onTabList.key">
           <div class="pic" :style="{backgroundImage:'url('+ onTabList.goodsPicUrl +')'}"></div>
           <div class="materials-name" v-text="onTabList.goodsName"></div>
           <div class="materials-more">
             <span class="materials-more-price">
               <span>￥</span>
               <span v-text="onTabList.goodsPrice">666</span>
             </span>
           </div>
         </li>
         <!-- Main List 为空的时候 -->
        <li class="cue-box" v-if="onTabListBox.goodsArray.length == 0">
          <div class="cue">暂无数据...</div>
        </li>
         <!-- Main List 加载更多 -->
         <infinite-loading @infinite="infiniteHandler($event,index)" spinner="circles" v-if="onTabListBox.goodsArray.length != 0">
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
 name: "materials",
 components: {
   InfiniteLoading,
 },
 props: ['serviceUrl'],
 data: () => ({
   msg:[],
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
         // url: this.serviceUrl + "app/goods_page.htm",
         url: "http://192.168.8.183:8088/app/goods_page.htm",
         method:"POST",
         params: {
           gc_id: this.msg[num].classId,//请求那个分类下的数据
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
         for(let i = 0,max = res.data.goodsArray.length; i < max; i++){
           this.msg[num].goodsArray.push(res.data.goodsArray[i]);
         }
         // console.log(JSON.stringify(this.msg));
         $state.loaded();
       },(res) => {
         console.log("error from 绿色建材List materials.vue");
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
     url: "http://192.168.8.183:8088/app/goodsList.htm",
     method:"POST",
     params: {
       pageSize: this.pageSize,
     },
     headers: {
         "Content-Type": "x-www-from-urlencoded"
     }
   }).then((res) => {
     // console.log(JSON.stringify(res.data));
     this.msg = res.data;
   },(res) => {
     console.log("error from 绿色建材materials.vue");
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
   padding: 0 0 0 $padding;
   box-sizing: border-box;
   .tab-list {
     padding: 0 $padding;
     display: inline-block;
     margin: $padding $padding 0 0;
     height: .768rem;
     line-height: .768rem;
     font-size: .448rem;
     border-radius: .096rem;
     color: #666;
     background: #f5f5f5;
     &.cur {
       color: #fff;
       background: $green;
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
       $materialsListW: 5.84rem;
       $materialsListH: 7.76rem;
       float: left;
       width: $materialsListW;
       height: $materialsListH;
       margin: 0 0 $padding 0;
       background: #fff;
       &:nth-child(2n + 1){
         margin-right: $padding;
       }
       .pic {
         @include pic-bg($materialsListW,$materialsListH - 1.92rem);
       }
       .materials-name {
         width: 100%;
         color: #333;
         font-size: .416rem;
         height: .832rem;
         line-height: .832rem;
         padding: .16rem $padding 0;
         @include text-overflow;
       }
       .materials-more {
         width: 100%;
         font-size: .512rem;
         line-height: .768rem;
         height: .768rem;
         padding: 0 $padding;
         @include text-overflow;
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
