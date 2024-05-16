<template>
    <div class="center">
        <h1>登录账户</h1>
        <div class="logon">
            <div class="overlaylong-Signin">
                <h2 class="overlaylongH2 ">登录账户</h2>
                <div class="signin-field">
                    <span >账户：</span>
                    <input type="text" placeholder="user"> <!--placeholder设置文本框提示信息         -->
                </div>
                <div class="signin-field">
                    <span >密码：</span>
                    <input type="password" placeholder="password">
                </div>
                <h3>忘记密码了吗？</h3>
                <router-link :to="{name:'Register'}" class="inupbutton">注册</router-link>
                <router-link :to="{name:'Tables',query:{id:123}}" class="inupbutton" @click="btn">登录</router-link>
            </div>
<!--          <router-view></router-view>-->
        </div>

    </div>

</template>

<script>
    export default {
        name: "loginName",
        data() {
            return {
                username: '',
                password: '',
                overlaylong: 'overlaylong',
                overlaytitle: 'overlaytitle',
                disfiex: 0
            }
        },
        methods: {
            btn() {
                alert("登陆成功")
              this.$router.push({name:"Tables"})

            },
            Register() {
                alert("跳转到注册页面")

            }

        }
    }
</script>

<style scoped>

    .container {
        display: flex;
        justify-content: center; /* 水平居中 */
        align-items: center; /* 垂直居中 */
        height: 100vh; /* vh 是视口高度单位，100vh 等于视口的高度 */
        margin: 0; /* 去除默认的外边距 */
        padding: 0; /* 去除默认的内边距 */
        box-sizing: border-box; /* 确保 padding 和 border 不会增加元素的宽度和高度 */
    }

    .signin-field {
        display: flex; /* 使span和input在同一行 */
        align-items: center; /* 垂直居中span和input */
        margin-bottom: 10px; /* 为每个字段添加一些垂直间距 */
    }
    .logon {
        background-color: #fff;
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



    .buttongohs {
        width: 180px;
        height: 40px;
        border-radius: 50px;
        border: 1px solid #fff;
        color: #fff;
        font-size: 15px;
        text-align: center;
        line-height: 40px;
        margin-top: 40px;
    }

    .overlaylongH2 {
        font-size: 25px;
        color: black;
        /* width: 250px; */
    }

    .overlaylong-Signin {
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