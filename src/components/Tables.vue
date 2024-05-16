<template>

  <div class="container">
    <div class="sidebar">
      <nav>
        <ul>
          <li><router-link to="/Result">结果</router-link></li>
          <li><router-link to="/Result">原始数据</router-link></li>
          <li><router-link to="/Calculation">计算</router-link></li>
        </ul>
      </nav>
    </div>
    <div class="content">
      <h1>欢迎来到我们的网站</h1>
      <p>这里展示一些数据或内容。</p>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: "TablesName"
}
</script>

<style scoped>
.sidebar {
  width: 200px; /* 设置导航栏宽度 */
  height: 100vh; /* 使导航栏高度与视口高度相同 */
  background-color: #333; /* 设置背景色 */
  color: #fff; /* 设置文本颜色 */
  padding: 20px; /* 设置内边距 */
}

.sidebar ul {
  list-style-type: none; /* 移除列表标记 */
  padding: 0; /* 移除默认的内边距 */
  margin: 0; /* 移除默认的外边距 */

}

.sidebar li a {
  display: block; /* 将链接转换为块级元素，使其占据整行 */
  padding: 20px 0; /* 设置链接的上下内边距 */
  text-decoration: none; /* 移除下划线 */
  color: inherit; /* 继承父元素的文本颜色 */
  font-size: 20px;  /*设置字体大小*/
}

.sidebar li:hover {
  background-color: #555; /* 链接悬停时的背景色 */
}

.content {
  flex-grow: 1; /* 使内容区域占据剩余空间 */
  padding: 20px; /* 设置内边距 */
  width: 200px; /* 设置导航栏宽度 */
  height: 100vh; /* 使导航栏高度与视口高度相同 */
  padding: 20px; /* 设置内边距 */
}
</style>