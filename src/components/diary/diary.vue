<template>
  <div id="diary" class="diary">
    <div class="diary-tab">
      <span class="edit"><span class="iconfont">&#xe674;</span>写日记</span>
      <span class="del">删除</span>
    </div>
    <ul class="diary-list-box">
      <li class="diary-list" v-for="(diaryList,index) in msg" :key="diaryList.key">
        <div class="pic" :style="{backgroundImage:'url('+ diaryList.src +')'}"></div>
        <div class="name" v-text="diaryList.name"></div>
        <div class="category" v-text="diaryList.category"></div>
        <div class="day"><span v-text="diaryList.day"></span><span class="iconfont">&#xe602;</span></div>
      </li>
    </ul>
    <slot name="app-footer"></slot>
  </div>
</template>
<script>
export default {
  name: "diary",
  props: ['serviceUrl'],
  data: () => ({
    msg: [
      {
        "src":"http://124.204.40.11:8088/download/tokenfile.htm?token=749CD5952C7E16058A5A473BAA36AB6369D18AACCE570218846B247A39122EF0D43FFE6495374E928E78D69DD5135C106117754C17940E65",
        "name": "日记名称1日记名称1日记名称1日记名称1日记名称1日记名称1日记名称1日记名称1",
        "category": "类别",
        "day": "11-11"
      },
      {
        "src":"http://124.204.40.11:8088/download/tokenfile.htm?token=749CD5952C7E16058A5A473BAA36AB6369D18AACCE570218846B247A39122EF0D43FFE6495374E928E78D69DD5135C106117754C17940E65",
        "name": "日记名称2",
        "category": "类别",
        "day": "11-11"
      },
      {
        "src":"http://124.204.40.11:8088/download/tokenfile.htm?token=749CD5952C7E16058A5A473BAA36AB6369D18AACCE570218846B247A39122EF0D43FFE6495374E928E78D69DD5135C106117754C17940E65",
        "name": "日记名称3",
        "category": "类别",
        "day": "11-11"
      },
      {
        "src":"http://124.204.40.11:8088/download/tokenfile.htm?token=749CD5952C7E16058A5A473BAA36AB6369D18AACCE570218846B247A39122EF0D43FFE6495374E928E78D69DD5135C106117754C17940E65",
        "name": "日记名称4",
        "category": "类别",
        "day": "11-11"
      }
    ]
  }),
  mounted(){
    // this.$http({
    //   url: this.serviceUrl + "index.htm",
    //   method: "POST",
    //   // 请求后台发送的数据
    //   params: {
    //   },
    //   // 设置请求头
    //   headers: {
    //       "Content-Type": "x-www-from-urlencoded"
    //   }
    // }).then(function (res) {
    //   // 请求成功回调
    // }, function (res) {
    //   // 请求失败回调
    //   alert("error from home.vue");
    // });
  }
}
</script>
<style lang="scss" scoped>
@import "./../../css/unit/common";
.diary {
  $padding: .32rem;
  position: fixed;
  top: 0;
  width: 100%;
  bottom: 0;
  overflow-y: auto;
  .diary-tab {
    width: 100%;
    height: 1.44rem;
    padding: 0 $padding;
    font-size: .416rem;
    background: #fff;
    border-bottom: 1px solid #c8c7cc;
    .edit {
      float: left;
      line-height: 1.44rem;
      .iconfont {
        color: $green;
        margin: 0 $padding/2 0 0;
      }
    }
    .del {
      float: right;
      height: .672rem;
      line-height: .672rem;
      color: $orange;
      border: 1px solid $orange;
      border-radius: .672rem;
      width: 1.664rem;
      text-align: center;
      margin: .384rem 0 0 0;
    }
  }
  .diary-list-box {
    .diary-list {
      background: #fff;
      width: 100%;
      height: 1.888rem;
      overflow: hidden;
      position: relative;
      padding: 0 0 0 $padding;
      &:after {
        content: "";
        position: absolute;
        bottom: 0;
        right: 0;
        left: $padding;
        border-bottom: 1px solid #c8c7cc;
      }
      &:last-child:after {
        left: 0;
      }
      .pic {
        float: left;
        margin: $padding/2 $padding/2 0 0;
        @include pic-bg(2.048rem,1.888rem - $padding);
      }
      .name {
        float: left;
        width: 7rem;
        color: #333;
        margin: .12rem 0 0 0;
        font-size: .512rem;
        line-height: 1.8em;
        @include text-overflow;
      }
      .category {
        float: left;
        width: 7rem;
        color: #999;
        font-size: .448rem;
        line-height: 1.5em;
        @include text-overflow;
      }
      .day {
        position: absolute;
        right: .32rem;
        top: 0;
        color: #999;
        height: 1.888rem;
        line-height: 1.888rem;
        font-size: .416rem;
        .iconfont {
          color: #c7c7cc;
        }
      }
    }
  }
}
</style>
