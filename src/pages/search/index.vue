<template>
  <div>
    <!-- 搜索 -->
    <div class="topSearch">
      <div class="search_input">
        <input type="text" placeholder="请输入要搜索的商品" v-model="query">
      <icon type="search" size="16"></icon>
      </div>
      <div @click="ccancel" class="btncancel" v-show="query.length == 0? false : true" >取消</div>
    </div>
    <!-- 历史记录 -->
    <div class="history">
      <div class="title">
        <p>历史搜索</p>
        <icon type="clear" size="16"></icon>
      </div>
      <div class="content">
        <div class="item">小米</div>
        <div class="item">小米电视</div>
        <div class="item">华为手机</div>
        <div class="item">iphone</div>
        <div class="item">小米音响</div>
        <div class="item">小米扫地机器人</div>
        <div class="item">口红</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      query:''
    }
  },
  methods: {
    ccancel(){
      this.query = '';
    }
  },
 created() {
    console.log('我的页面');
  },
}
</script>

<style lang="less">
@import './index.less';
</style>
