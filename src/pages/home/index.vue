<template>
  <div class="home">
    <!-- 搜索 -->
    <tophead></tophead>
    <!-- 轮播图 -->
    <swiper indicator-dots autoplay circular>
      <block v-for="(item,index) in imgUrls" :key="index">
        <swiper-item>
          <image :src="item.image_src" class="slide-image" mode="aspectFill"/>
        </swiper-item>
      </block>
    </swiper>
    <!-- 分类 -->
    <div class="category">
      <div class="item" v-for="(item,index) in cateList" :key="index">
        <image :src="item.image_src" mode="aspectFit"></image>
      </div>
    </div>
  <!-- 楼层 -->
  <section class="floor" v-for="(item,index) in floorList" :key="index">
    <div class="title">
      <image :src="item.floor_title.image_src" class="slide-image"/>
    </div>
    <div class="content">
      <div class="left">
          <image :src="item.product_list[0].image_src" mode="aspectFit"></image>
        </div>
        <div class="right">
          <image v-if="subindex != 0" v-for="(subItem,subindex) in item.product_list" :key="subindex" :src="subItem.image_src" mode="aspectFit"></image>
        </div>
    </div>
  </section>
  </div>
</template>

<script>
import request from '../../utils/request.js'
import tophead from '../../components/tophead.vue'
export default {
  data() {
    return {
      imgUrls: [
        "//gw.alicdn.com/imgextra/i3/81/O1CN016MsYGX1CT8b7PTtvM_!!81-0-lubanu.jpg",
        "//img.alicdn.com/imgextra/i1/137/O1CN016ZkEYT1CsmmB9Dq3Q_!!137-0-luban.jpg"
      ],
      cateList:[],
      floorList:[],
    };
  },
  async created(){
    //获取轮播图数据
    let res = await request('https://itjustfun.cn/api/public/v1/home/swiperdata');
    // console.log(res);
    this.imgUrls = res.data.data;

    //获取分类列表数据
    let resCate = await request('https://itjustfun.cn/api/public/v1/home/catitems');
    // console.log(resCate);
    this.cateList = resCate.data.data;
    //获取楼层数据
    let resFloor = await request('https://itjustfun.cn/api/public/v1/home/floordata');
    // console.log(resFloor);
    this.floorList = resFloor.data.data;
  },
  components:{
    tophead,
  }
};
</script>

<style lang="less">
@import './index.less';
</style>
