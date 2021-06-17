<template>
  <!-- 搜索 -->
  <van-search
    v-model="valueKey"
    show-action
    placeholder="请输入搜索关键词"
    @search="onSearch"
  >
    <template #action>
      <div @click="onSearch">搜索</div>
    </template>
  </van-search>
  <!--  -->
  <section class="product_lei">
    <div class="left_bar">
      <h3>南北干货</h3>
      <h3>肉干风味</h3>
      <h3>熟肉食站</h3>
      <h3>休闲食品</h3>
      <h3>乳品补给</h3>
      <h3>健康养生</h3>
    </div>
    <div class="right_bar">
      <!-- 展示卡片 -->
      <div class="card"></div>
      <h3>南北干货</h3>
      <div class="buy_cards">
        <figure class="card_items">
          <!-- <img src="../assets/img/mitao.jpg" /> -->
          <div class="container_img"></div>
          <p>新疆-冻干-枣圈</p>
          <div class="price_item">
            <strong>9.80</strong>
            <span>
              <i class="iconfont icon-gouwuche"></i>
            </span>
          </div>
        </figure>
        <figure class="card_items">
          <div class="container_img"></div>
          <p>新疆-冻干-枣圈</p>
          <div class="price_item">
            <strong>9.80</strong>
            <span>
              <i class="iconfont icon-gouwuche"></i>
            </span>
          </div>
        </figure>
        <figure class="card_items">
          <div class="container_img"></div>
          <p>新疆-冻干-枣圈</p>
          <div class="price_item">
            <strong>9.80</strong>
            <span>
              <i class="iconfont icon-gouwuche"></i>
            </span>
          </div>
        </figure>
        <figure class="card_items">
          <div class="container_img"></div>
          <p>新疆-冻干-枣圈</p>
          <div class="price_item">
            <strong>9.80</strong>
            <span>
              <i class="iconfont icon-gouwuche"></i>
            </span>
          </div>
        </figure>
        <figure class="card_items">
          <div class="container_img"></div>
          <p>新疆-冻干-枣圈</p>
          <div class="price_item">
            <strong>9.80</strong>
            <span>
              <i class="iconfont icon-gouwuche"></i>
            </span>
          </div>
        </figure>
      </div>
    </div>
  </section>
</template>
<script>
import { onMounted, ref } from "vue";
import queryResponse from '../api/sourthProduct'
export default {
  setup() {
    let valueKey = ref(null);
    let activeId = ref(1);
    let activeIndex = ref(0);

    const onSearch = () => {};
     const init=async ()=>{
      await queryResponse.getProduct().then(res=>{
        console.log(res)
      })
    }
    onMounted(()=>{
      init()
    })

    return {
      valueKey,
      activeId,
      activeIndex,
      onSearch,
    };
  },
};
</script>
<style lang="less" scoped>
.product_lei {
  height: 84vh;
  width: 100%;
  display: flex;

  .left_bar {
    flex: 1;
    height: 100%;
    margin-right: 1%;
    background: #fff;
    h3 {
      font-size: 1.2rem;
      margin: 2rem;
    }
  }
  .right_bar {
    flex: 2;
    height: 100%;
    overflow: auto;
    background: #f2f4f6;
    .card {
      height: 6.25rem;
      background: url("../assets/img/mijian.jpg");
      background-size: contain;
    }
    h3 {
      text-align: left;
    }
    .buy_cards {
      text-align: left;

      .card_items {
        width: calc(50% - 20px);
        display: inline-block;

        text-align: center;
        margin: 10px;
        .container_img {
          height: 10rem;
          background: url("../assets/img/mitao.jpg");
          background-size: cover;
        }
      }
      .price_item {
        display: flex;
        justify-content: space-between;
        align-items: center;
      }
    }
  }
}
</style>