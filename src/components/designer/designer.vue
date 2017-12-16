<template>
<div id="designer" class="designer">
  <ul class="designer-list-box">
    <li class="designer-list" v-for="onTabList in msg.list" :key="onTabList.key">
      <div class="pic">
        <img :src="onTabList.designerPic" alt="">
      </div>
      <div class="name" v-text="onTabList.name"></div>
      <div>
      </div>
    </li>

    <!-- Main List 为空的时候 -->
    <li class="cue-box" v-if="msg.list.length == 0">
      <div class="cue">暂无数据...</div>
    </li>
    <!-- Main List 加载更多 -->
    <infinite-loading @infinite="infiniteHandler" spinner="circles" v-if="msg.list.length != 0">
      <!-- 加载更多却没有数据的时候 -->
      <div class="no-more" slot="no-more">
        该分类下没有更多了...
      </div>
      <div class="no-more" slot="no-results">
        该分类下没有更多了...
      </div>
    </infinite-loading>
  </ul>
</div>
</template>
<script>
import InfiniteLoading from 'vue-infinite-loading'
export default {
  name: "designer",
  components: {
    InfiniteLoading,
  },
  data: () => ({
    msg:[],
    pageSize: 14,//每页 数据个数
  }),
  computed: {
    //计算
  },
  methods: {
    infiniteHandler($state) {
      // if(this.msg[num].currentPage >= this.msg[num].totalPage){
      //   console.log("meiyou fen");
      //   $state.complete();
      // } else {
      //   console.log("fen");
      //
      //   //分页请求 Start
      //   this.$http({
      //     // url: this.serviceUrl + "main/works_json_list.htm",
      //     url: "http://192.168.8.53/main/works_json_list.htm",
      //     method:"POST",
      //     params: {
      //       code: this.msg[num].code,//请求那个分类下的数据
      //       currentPage: parseInt(this.msg[num].currentPage) + 1,//请求第几页的数据
      //       pageSize: this.pageSize
      //     },
      //     headers: {
      //       "Content-Type": "x-www-from-urlencoded"
      //     }
      //   }).then((res) => {
      //     console.log(JSON.stringify(res.data));
      //     //更新数据
      //     this.msg[num].currentPage = res.data.currentPage;
      //     this.msg[num].totalPage = res.data.totalPage;
      //     for(let i = 0,max = res.data.msg.length; i < max; i++){
      //       this.msg[num].msg.push(res.data.msg[i]);
      //     }
      //     // console.log(JSON.stringify(this.msg));
      //     $state.loaded();
      //   },(res) => {
      //     alert("error from 视频直播Listlive.vue");
      //   });
      //   //分页请求 End
      //
      // }
    },
  },
  mounted() {
    //do something after mounting vue instance
    //加载默认数据 Start
    this.$http({
      // url: this.serviceUrl + "main/works_json_list.htm",
      url: "http://192.168.8.160:8080/app/designerPageList.htm",
      method:"POST",
      params: {
        pageSize: this.pageSize,
      },
      headers: {
          "Content-Type": "x-www-from-urlencoded"
      }
    }).then((res) => {
      this.msg = res.data;
      console.log(JSON.stringify(this.msg));
    },(res) => {
      console.log("error from 设计师designer.vue");
    });
    //加载默认数据 Start

  }
}
</script>
<style lang="scss" scoped>
@import "./../../css/unit/common";
$padding: .32rem;
$listBar: #eeeeee;

//main Start
 .designer-list-box {
  bottom: 0;
  top: 0;
  position: fixed;
  overflow-y: auto;
  width: 100%;
  //Edit Style Start ----------↓----------↓----------
  .designer-list {
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
    .name {
    width: 100%;
    color: #333;
    font-size: .416rem;
    height: .832rem;
    line-height: .832rem;
    padding: .16rem $padding/2 0;
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
//main End
</style>
