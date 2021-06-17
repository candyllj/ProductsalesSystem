<template>
  <van-search
    v-model="value"
    show-action
    placeholder="请输入搜索关键词"
    @search="onSearch"
  >
    <template #action>
      <div @click="onSearch">搜索</div>
    </template>
  </van-search>
  <!-- 轮播图 -->
  <section class="swiper_cards">
    <swiper />
  </section>
  <!-- 优惠列表 -->
  <section class="discount_product">
    <h3>限时优惠<span>机不可失，失不再来</span></h3>
    <div class="home_title">
      <a>
        <img src="../assets/img/product.jpg" class="product_pic" />
        <div class="end_time">
          <span>距结束</span>
          <span>77:07:16</span>
        </div>
        <van-card price="2.00" origin-price="10.00" :centered="true" />
      </a>
      <a>
        <img src="../assets/img/product.jpg" class="product_pic" />
        <div class="end_time">
          <span>距结束</span>
          <span>77:07:16</span>
        </div>
        <van-card price="2.00" origin-price="10.00" :centered="true" />
      </a>
      <a>
        <img src="../assets/img/product.jpg" class="product_pic" />
        <div class="end_time">
          <span>距结束</span>
          <span>77:07:16</span>
        </div>
        <van-card price="2.00" origin-price="10.00" :centered="true" />
      </a>
    </div>
  </section>
  <!-- 发现好物 -->
  <section class="find_goods">
    <h3>发现好物</h3>
    <div class="find_goods_item">
      <div class="good_wrap">
        <video
          :width="halfContainerWidth"
          :height="halfContainerHeight"
          controls="controls"
        >
          <source src="../assets/vedio/vedio.mp4" type="video/mp4" />
        </video>
      </div>
      <div class="good_wrap">
        <video
          :width="halfContainerWidth"
          :height="halfContainerHeight"
          controls="controls"
        >
          <source src="../assets/vedio/vedio.mp4" type="video/mp4" />
        </video>
      </div>
      <div class="good_wrap">
        <video
          :width="halfContainerWidth"
          :height="halfContainerHeight"
          controls="controls"
        >
          <source src="../assets/vedio/vedio.mp4" type="video/mp4" />
        </video>
      </div>
      <div class="good_wrap">
        <video
          :width="halfContainerWidth"
          :height="halfContainerHeight"
          controls="controls"
        >
          <source src="../assets/vedio/vedio.mp4" type="video/mp4" />
        </video>
      </div>
    </div>
  </section>
  <!-- 南北干货店 -->
  <section class="store_push">
    <h3>南北干货店</h3>
    <van-card
     class="product_north"
      price="2.00"
      :centered="false"
      title="湖南新田县-黑子炒花生-350g/袋"
      thumb="https://img01.yzcdn.cn/vant/ipad.jpeg"
    >
      <template #footer>
        <van-button size="mini"><i class="iconfont icon-gouwuche"></i></van-button>
      </template>
    </van-card>
    <van-card
     class="product_north"
      price="2.00"
      title="内蒙古-沙棘糕-250g/袋"
      thumb="https://img01.yzcdn.cn/vant/ipad.jpeg"
    >
      <template #footer>
        <van-button size="mini"><i class="iconfont icon-gouwuche"></i></van-button>
      </template></van-card
    >
   
    <van-card
     class="product_north"
      price="2.00"
      title="甘肃庆阳-冻干苹果脆-28g"
      thumb="https://img01.yzcdn.cn/vant/ipad.jpeg"
    >
      <template #footer>
        <van-button size="mini"><i class="iconfont icon-gouwuche"></i></van-button>
      </template>
    </van-card>
    <van-card
     class="product_north"
      price="2.00"
      title="新建-叶城有机核桃-500g/袋"
      thumb="https://img01.yzcdn.cn/vant/ipad.jpeg"
    >
      <template #footer>
        <van-button size="mini"><i class="iconfont icon-gouwuche"></i></van-button>
      </template>
    </van-card>
    <van-card
     class="product_north"
      price="2.00"
      title="新疆-英吉沙杏肉-120g/罐"
      thumb="https://img01.yzcdn.cn/vant/ipad.jpeg"
    >
      <template #footer>
        <van-button size="mini"><i class="iconfont icon-gouwuche"></i></van-button>
      </template>
    </van-card>
  </section>
  <!-- 肉干风味铺 -->
  <section class="meat_store">
     <h3>肉干风味铺</h3>
      <van-card
     class="product_north"
      price="2.00"
      :centered="false"
      title="湖北-恩施土家牛肉-90g/袋"
      thumb="https://img01.yzcdn.cn/vant/ipad.jpeg"
    >
      <template #footer>
        <van-button size="mini"><i class="iconfont icon-gouwuche"></i></van-button>
      </template>
    </van-card>
    <van-card
     class="product_north"
      price="2.00"
      title="内蒙古-精品碳烤长条-250g/袋"
      thumb="https://img01.yzcdn.cn/vant/ipad.jpeg"
    >
      <template #footer>
        <van-button size="mini"><i class="iconfont icon-gouwuche"></i></van-button>
      </template></van-card
    >
   
    <van-card
     class="product_north"
      price="2.00"
      title="内蒙古-牛筋蹄-28g"
      thumb="https://img01.yzcdn.cn/vant/ipad.jpeg"
    >
      <template #footer>
        <van-button size="mini"><i class="iconfont icon-gouwuche"></i></van-button>
      </template>
    </van-card>
 
  </section>
 

</template>
<script>
import swiper from "../components/swiper/swipe.vue";
import { ref } from "vue";

export default {
  components: {
    swiper,
  },
  setup() {
    let keyWords = "";
    let halfContainerWidth = ref(window.innerWidth * 0.3);
    let halfContainerHeight = ref((160 * window.innerWidth) / 640);

    return { keyWords, halfContainerWidth, halfContainerHeight };
  },
};
</script>
<style>
@import "../assets/style/swiperStyle.css";
</style>