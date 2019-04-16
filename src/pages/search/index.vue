<template>
  <div>
    <div class="box">
      <!-- 头部搜索 -->
      <div class="search">
        <input type="text" v-model="query">
        <div class="icon">
          <img src="../../../static/images/icon_search@2x.png" alt=""/>
        </div>
      </div>
      <!-- tab栏 -->
      <div class="nav">
        <div
          :class="{active:selectedIndex == index}"
          @click="selectedIndex = index"
          v-for="(item,index) in navList"
          :key="index"
        >{{item}}</div>
      </div>
    </div>
    <!-- 商品数据列表 -->
    <div class="itemList">
      <div class="item" v-for="(item,index) in goodsList" :key="index">
        <div class="left">
          <image :src="item.goods_small_logo" mode="aspectFill"/>
        </div>
        <div class="right">
          <p class="info">{{item.goods_name}}</p>
          <div class="price">
            <span>¥</span>
            {{item.goods_price}}
          </div>
        </div>
      </div>
      <p class="footer" v-if="isShow">我是有底线的哦~</p>
    </div>
  </div>
</template>

<script>
import request from "../../utils/request.js";
export default {
  data() {
    return {
      navList: ["综合", "销量", "价格"],
      //是否被选中
      selectedIndex: 0,
      //商品数据列表
      goodsList: [],
      //关键字
      query: "",
      //每页的加载量
      pagesize: 10,
      //页数
      pagenum: 1,
      //是否显示底线
      isShow:false
    };
  },
  methods: {
    async getGoodsList() {
      // 在导航条中添加加载动画
      // wx.showNavigationBarLoading();
      if (this.isShow) {
        // 提示用户数据已经全部加载
        wx.showToast({
          title: '数据已经加载完毕',
          icon: 'none',
          duration: 2000
        })
        return
      }
      // 打开加载动画
      wx.showLoading({
        title: '加载中'
      });
      let res = await request.get(
        "https://itjustfun.cn/api/public/v1/goods/search",
        {
          query: this.query,
          pagenum: this.pagenum,
          pagesize: this.pagesize
        }
      );
      console.log(res);
      //判断是否商品数据是否全部加载完
      if(res.data.data.goods.length == 0){
        this.isShow = true;
         // 关闭加载框
        wx.hideLoading()
        return;
      }
      //判断是否是首次加载数据
      if (this.goodsList.length == 0) {
        this.goodsList = res.data.data.goods;
      } else {
        this.goodsList = this.goodsList.concat(res.data.data.goods);
      }
      // 关闭加载框
      wx.hideLoading();
      // 关闭下拉框
      wx.stopPullDownRefresh();
       // 关闭导航中的加载框
      // wx.hideNavigationBarLoading();
    }
  },
  mounted() {
    this.goodsList = [];
    //获取url的参数
    let query = this.$root.$mp.query.query;
    this.query = query;
    this.getGoodsList();
  },
  //监听用户上拉触底事件
  onReachBottom() {
    this.pagenum += 1;
    this.getGoodsList();
  },
  //监听用户下拉刷新事件
  onPullDownRefresh(){
    console.log('下拉');
    this.pagenum = 1;
    this.isShow = false;
    this.goodsList = [];
    this.getGoodsList();
  }
};
</script>

<style scoped lang="less">
@import "./index.less";
</style>
