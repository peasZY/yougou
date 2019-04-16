<template>
  <div>
    <div class="mytop">
      <tophead/>
    </div>
    <div class="content">
      <nav class="nav">
        <ul>
          <li @click="getRightData(index)" :class="{active: isIndex == index}" v-for="(item,index) in menuList" :key="index">{{item.cat_name}}</li>
        </ul>
      </nav>
      <section class="goods">
          <div class="img">
            <image src="https://img.alicdn.com/simba/img/TB1JAp1LCzqK1RjSZFHSuv3CpXa.jpg" mode="aspectFill"></image>
          </div>
          <div class="cateList" v-for="(item,index) in rightList" :key="index">
            <div class="title">
              <span>/</span>
              {{item.cat_name}}
              <span>/</span>
            </div>
            <div class="itemList">
            <a :href="'/pages/search/main?query='+subitem.cat_name" class="item" v-for="(subitem,subindex) in item.children" :key="subindex">
              <image :src="'https://itjustfun.cn/'+subitem.cat_icon" mode="aspectFill"></image>
              <p class="name">{{subitem.cat_name}}</p>
            </a>
            </div>
          </div>
      </section>
    </div>
  </div>
</template>

<script>
import request from '../../utils/request.js'
import tophead from '../../components/tophead.vue'
export default {
  data() {
    return {
      menuList:[],
      isIndex:0,
      rightList:[]
    }
  },
  methods: {
    getRightData(index){
      this.isIndex = index;
      this.rightList = this.menuList[index].children;
    }
  },
  async created() {
    let res = await request('https://itjustfun.cn/api/public/v1/categories');
    console.log(res);
    this.menuList = res.data.data;
    this.rightList = res.data.data[0].children;
  },
  components:{
    tophead,
  }
}
</script>

<style lang="less">
@import 'index.less';
</style>
