<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
  <!-- <HelloWorld /> -->
  <router-view />
  
</template>

<script>

export default {
  name: "App",
 
  setup() {
   
  },
};
</script>

<style>
html,body,#app{
  height: 100%;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background: #f2f4f6;
  /* padding: 6px; */
  /* margin-top: 60px; */
}
/* 以640px为标准 */
@media only screen and (min-device-width: 320px) and (-webkit-min-device-pixel-ratio: 2) {
  /* 针对iPhone 4, 5c,5s, 所有iPhone6的放大模式，个别iPhone6的标准模式<br>　　html{<br>　　　　font-size:10px;<br>　　} */
  html {
    font-size: 10px;
  }
}
@media only screen and (min-device-width: 375px) and (-webkit-min-device-pixel-ratio: 2) {
  /* 　　//针对大多数iPhone6的标准模式<br>　　html{<br>　　　　font-size:12px;<br>　　},物理分辨率是750*1334,逻辑分辨率是375px，按照逻辑分辨率开发*/
  html {
    font-size: 11px;
  }
}

@media only screen and (min-device-width: 375px) and (-webkit-min-device-pixel-ratio: 3) {
  /* 　　//针对所有iPhone6+的放大模式<br>　　html{<br>　　　　font-size:16px;<br>　　} */
  html {
    font-size: 12px;
  }
}
@media only screen and (min-device-width: 412px) and (-webkit-min-device-pixel-ratio: 3) {
  /* 　　//针对所有iPhone6+的标准模式,414px写为412px是由于三星Nexus 6为412px，可一并处理<br>　　html{<br>　　　　font-size:20px;<br>　　} */
  html {
    font-size: 20px;
  }
}
</style>
