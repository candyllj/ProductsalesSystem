<template>
  <section class="personal">
    <div class="personal_msg">
      <!-- 头像 -->
      <van-skeleton
        title
        avatar
        avatar-size="50"
        row-width="50"
        :loading="loading"
      >
        <div class="pic_image">
          <img src="../assets/img/cat.jpg" class="personal_pic" />
          <div class="name">绕月的云</div>
        </div>
      </van-skeleton>
      <!-- 类目 -->
      <van-row class="apply_ord">
        <van-col span="24" class="myorder"><strong>我的订单</strong></van-col>
        <van-col span="8">
          <div>
            <i class="iconfont icon-dingdan"></i>
          </div>
          <p>全部订单</p>
        </van-col>
        <van-col span="8">
          <div>
            <i class="iconfont icon-daifukuan"></i>
          </div>
          <p>待付款</p>
        </van-col>
        <van-col span="8">
          <div>
            <i class="iconfont icon-daishouhuo"></i>
          </div>
          <p>待收货</p>
        </van-col>
      </van-row>
    </div>
    <!-- <van-skeleton title avatar :row="3" row-width="100%" :loading="loading">
         <div>实际内容</div>
     </van-skeleton> -->
  </section>
  <!-- 列表类 -->
  <van-row class="apply_ord second_ord">
    <van-col span="24" class="myorder"><strong>更多服务</strong></van-col>
    <van-col span="24">
      <div class="row_item">
        <div><i class="iconfont icon-youhuiquan"></i><span style="vertical-align: top;">优惠券</span></div>
        <div>
          <i class="iconfont icon-xiangyoujiantou"></i>
        </div>
      </div>
    </van-col>
   <van-col span="24">
      <div class="row_item">
        <div><i class="iconfont icon-yaoqingyouli"></i><span style="vertical-align: top;">邀请有礼</span></div>
        <div>
          <i class="iconfont icon-xiangyoujiantou"></i>
        </div>
      </div>
    </van-col>
     <van-col span="24">
      <div class="row_item">
        <div><i class="iconfont icon-dizhiguanli"></i><span style="vertical-align: top;">地址管理</span></div>
        <div>
          <i class="iconfont icon-xiangyoujiantou"></i>
        </div>
      </div>
    </van-col>
      <van-col span="24">
      <div class="row_item">
        <div><i class="iconfont icon-icon_xinyong_xianxing_jijin-"></i><span style="vertical-align: top;">客服帮助</span></div>
        <div>
          <i class="iconfont icon-xiangyoujiantou"></i>
        </div>
      </div>
    </van-col>
     <van-col span="24">
      <div class="row_item">
        <div><i class="iconfont icon-xitongshezhipx"></i><span style="vertical-align: top;">系统设置</span></div>
        <div>
          <i class="iconfont icon-xiangyoujiantou"></i>
        </div>
      </div>
    </van-col>
  </van-row>
</template>
<script>
export default {
  setup() {
    let loading = false;

    return {
      loading,
    };
  },
};
</script>
<style lang="less" scoped>
.personal {
  background: #fff;
}
.personal_msg {
  background: url("../assets/img/bg.jpg");
  background-size: cover;
  padding-top: 10vh;
  padding-bottom: 5px;
  .pic_image {
    position: relative;
    padding: 0 30px;
    height: 60px;
    text-align: left;
    .personal_pic {
      width: 50px;
      height: 50px;
      border-radius: 50%;
    }
    .name {
      display: inline-block;
      position: relative;
      top: -14px;
      left: 15px;
      font-size: 1.5rem;
    }
  }
}

.apply_ord {
  background: #fff;
  width: 93%;
  margin: auto;
  border-radius: 4px;
  padding: 5px;
  .myorder {
    // margin: 5px 0;
    text-align: left;
    font-size: 1.5rem;
  }
  .van-col--8 {
    i {
      font-size: 2.5rem;
      font-weight: bolder;
    }
    .icon-dingdan {
      color: purple;
    }
    .icon-daifukuan {
      color: blue;
    }
    .icon-daishouhuo {
      color: orange;
    }
  }
}
// .second_ord{
//   height:39vh

// }
.van-col--24 {
  height: 30px;
  margin: 5px 0;
  .row_item {
    height: 30px;
    display: flex;
    justify-content: space-between;
       line-height: 30px;
    font-size: 1.4rem;
        padding: 0 5px;
    i{
      font-size: 2.4rem;
      margin-right: 10px;
    }
    .icon-xiangyoujiantou{
      font-size: 1.5rem;
    }
  }
}
</style>