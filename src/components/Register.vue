<template>
  <div class="center">
    <h1> 注册账户</h1>
    <div class="logon">
      <div class="overlaylong-Signup">
        <h2 class="overlaylongH2">注册账户</h2>
        <div class="signin-field">
          <!--           placeholder设置文本框提示信息         -->
          <span>账户：</span>
          <input type="text" placeholder="user" ref="username">
        </div>
        <div class="signin-field">
          <span>密码：</span>
          <input type="text" placeholder="password" ref="password">
        </div>
        <h3>请输入注册账户信息</h3>
        <router-link :to="{name:'login'}" class="inupbutton">注册</router-link>
      </div>

    </div>

  </div>

</template>

<script>
export default {
  name: "login",
  methods: {
    btn() {
      alert("登陆成功")
    },
    btnRegister() {
      console.log("注册账号：", this.$refs.username.value, "注册密码", this.$refs.password.value)
      alert("注册成功")
    }

  }
}
</script>

<style scoped>
.logon {
  background-color: rgb(255, 255, 255);
  border-radius: 10px;
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  width: 768px;
  max-width: 100%;
  min-height: 480px;
  margin-top: 20px;
  display: flex;
  /*background: -webkit-linear-gradient(right, #4284db, #29eac4);*/
  display: flex;
  align-items: center; /*垂直居中*/
  justify-content: center; /*水平居中*/
  flex-direction: column; /*设置子项垂直排列*/
}


.center {
  width: 1920px;
  height: 1080px;
  background-image: url('https://gd-hbimg.huaban.com/9165dc3c0f8279ae5402d1f47212847bff68b49f3cb547-QEli8R');
  background-size: 100% 100%;
  background-repeat: no-repeat;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

}


h1 {
  font-size: 30px;
  color: black;
}


.overlaylongH2 {
  font-size: 25px;
  color: black;
  /* width: 250px; */
}

.overlaylong-Signup {
  display: flex;
  align-items: center; /*垂直居中*/
  justify-content: center; /*水平居中*/
  flex-direction: column; /*设置子项垂直排列*/
}

input {
  background-color: #eee;
  border: none;
  padding: 12px 15px;
  margin: 10px 0;
  width: 240px;
}

h3 {
  font-size: 10px;
  margin-top: 10px;
  cursor: pointer;
}

.inupbutton {
  background-color: #29eac4;
  border: none;
  width: 180px;
  height: 40px;
  border-radius: 50px;
  font-size: 15px;
  color: #fff;
  text-align: center;
  line-height: 40px;
  margin-top: 30px;
}

</style>