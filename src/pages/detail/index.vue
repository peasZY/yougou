<template>
  <div>
    <!-- 轮播图 -->
    <swiper class="lunbo" indicator-dots autoplay circular>
      <block v-for="(item,index) in dataObj.pics" :key="index">
        <swiper-item>
          <image :src="item.pics_big" class="slide-image" mode="aspectFill"/>
        </swiper-item>
      </block>
    </swiper>
    <!-- 商品详情 -->
    <div class="goods_detail">
      <p class="price">¥{{dataObj.goods_price}}</p>
      <div class="info">
        <div class="text">{{dataObj.goods_name}}</div>
        <div class="collect">
          <span class="iconfont iconstar"></span>
          <span>分享</span>
          <button class="btn_share" open-type="share"></button>
        </div>
      </div>
        <p class="kuaidi">快递:免运费</p>
    </div>
    <!-- 图文介绍 -->
    <div class="introduce">
      <div class="title">图文介绍</div>
      <div class="content" v-html="dataObj.goods_introduce"></div>
    </div>
    <div class="footer">
      <div class="kefu">
        <span class="iconfont iconkefu"></span>
        <span>联系客服</span>
        <button class="btn_kefu" open-type="contact"></button>
      </div>
      <div class="cart">
        <span class="iconfont iconcart"></span>
        <span>购物车</span>
      </div>
      <div class="add">加入购物车</div>
      <div class="buy">立即购买</div>
    </div>
  </div>
</template>

<script>
import request from '../../utils/request.js'
export default {
  data() {
    return {
      dataObj:{},
      goods_id:'',
    }
  },
  async mounted() {
    //获取参数
    this.goods_id = this.$root.$mp.query.id;
    console.log(this.goods_id);
    let res = await request.get('https://itjustfun.cn/api/public/v1/goods/detail',{
      "goods_id":this.goods_id
    });
    console.log(res.data.data);
    this.dataObj = res.data.data;
  },
  //分享触发事件
  onShareAppMessage(options){
    console.log(options);
    return {
      title:'巴黎圣母院被烧',
      path:'/pages/detail/main',
      imageUrl:'https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=4235940495,2178171080&fm=85&app=2&f=JPEG?w=121&h=75&s=CAC6BC451A533E5F0A2015A30300D000'
    }
  }
};
</script>

<style lang="less">
@import './index.less';
</style>
