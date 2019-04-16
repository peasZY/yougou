<template>
<!-- 搜索 -->
   <div class="search">
      <input type="text">
      <div class="icon">
        <img src="../../static/images/icon_search@2x.png" alt>
        <span>搜索</span>
      </div>
    </div>
</template>

<script>
export default {
}
</script>

<style lang="less">
    .search{
        padding: 20rpx 16rpx;
        background-color: #eb4450;
        position: relative;
        input{
            background-color: #fff;
            height: 60rpx;
            border-radius: 4rpx;
        }
        .icon{
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%,-50%);
            img{
                width: 32rpx;
                height: 32rpx;
                margin-right: 16rpx;
            }
            span{
                font-size: 30rpx;
                color: #bbbbbb;
            }
        }
    }
</style>
