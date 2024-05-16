<template>
  <div>
<!--    直接显示试图-->
    <router-view></router-view>
  </div>

</template>

<script>
    export default {
        name: 'App',
    }
</script>

<style>
.header {
  background-color: #333;
  color: #fff;
  padding: 10px;
  text-align: center;
}

.container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 100vh; /* 占据视口高度 */
}

.left, .right {
  flex: 1; /* 占据相等空间 */
  /*height: 200px; !* 你可以根据需要调整高度 *!*/
  /*background-color: #f0f0f0; !* 灰色背景 *!*/
  text-align: center; /* 文字居中 */
  /*line-height: 200px; !* 垂直居中文字 *!*/
}
.approuter {
        display: flex;
        align-items: center; /*垂直居中*/
        justify-content: center; /*水平居中*/
        flex-direction: column; /*设置子项垂直排列*/
    }
    .approuters{
        display: grid;
        /*align-items: center; !*垂直居中*!*/
        /*justify-content: center; !*水平居中*!*/
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