<template>
  <div
    class="scroll_pic"
    :style="{ 'transform': 'translate(-' + XtransPoint + 'px,0px)' }"
  >
    <img src="../../assets/img/swiper_img.jpg" />
  </div>
  <div class="scroll_pic">
    <img src="../../assets/img/swiper_img1.jpg" />
  </div>
</template>
<script>
import { onMounted,ref } from "vue";
export default {
  setup() {
    let XtransPoint = ref(0),//起始位移
      xViewPointWidth=0,//当前视图宽度
    swiperScroll = null;

    onMounted(() => {
      xViewPointWidth = window.innerWidth;
      // swiperScroll = setInterval(() => {
      //   XtransPoint.value += xViewPointWidth;
      // }, 3000);
    });

    return {
      xViewPointWidth,
      XtransPoint,
      swiperScroll,
    };
  },
};
</script>