<template>
  <section class="login_page">
    <van-form @submit="onSubmit" class="login_form">
      <van-field class="username"
        v-model="username"
        name="用户名"
        label="用户名"
        placeholder="用户名"
        :rules="[{ required: true, message: '请填写用户名' }]"
      />
      <van-field class="password"
        v-model="password"
        type="password"
        name="密码"
        label="密码"
        placeholder="密码"
        :rules="[{ required: true, message: '请填写密码' }]"
      />
      <div style="margin: 16px">
        <van-button round block type="primary" native-type="submit"
          >提交</van-button
        >
      </div>
    </van-form>
  </section>
</template>
<script>
import { ref } from "vue";
import { useRouter } from "vue-router";
import queryResponse from '../api/sourthProduct'
export default {
  setup() {
      const router = useRouter();
    let username = ref(null);
    let password = ref(null);
     const onSubmit = () => {
        queryResponse.setLogin({userName:username,passWord:password}).then(res=>{
            console.log(res,"登录信息");
            if(res.access){
                localStorage.setItem("loginId",res.data._id);
                router.push({
                    path:'/home/index'
                })
            }
        })
    };
    return {
      onSubmit,
      username,
      password,
    };
  },
};
</script>
<style lang="less" scoped>
.login_page {
  height: 100%;
  width: 100%;
  background: url("../assets/img/login.jpg") no-repeat;
  background-size: contain;
  .login_form {
    width: 80%;
    margin: auto;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
   
    .van-cell:nth-child(1){
        border-radius: 10px 10px 0 0 ;
    }
    .van-cell:nth-child(2){
         border-radius: 0 0 10px 10px;
    }
  }
}
</style>