<template>
 <router-view />
    <van-tabbar v-model="active" @change="changeTabs">
    <van-tabbar-item icon="home-o">首页</van-tabbar-item>
    <van-tabbar-item icon="search">分类</van-tabbar-item>
    <van-tabbar-item icon="friends-o">购物车</van-tabbar-item>
    <van-tabbar-item icon="setting-o">管理页</van-tabbar-item>
  </van-tabbar>
</template>
<script>
import { ref } from "vue";
import { useRouter } from "vue-router";
export default {
  name: "App",
  // components: {
  //   HelloWorld
  // }
  setup() {
    const router = useRouter();
    let active = ref(0);

    const changeTabs = (e) => {
      console.log(e, "点击了什么");
      if (e == "1") {
        router.push({
          path:'/home/Clasify'
        })
      } else if (e == "3") {
        router.push({
          path: "/home/admin",
        });
      }else if(e=="0"){
         router.push({
          path: "/home/index",
        });
      }
    };

    return {
      active,
      changeTabs,
    };
  },
};
</script>
