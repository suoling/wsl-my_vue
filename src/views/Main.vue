<template>
  <div>
    <router-view />
    <ul>
      <li><router-link :to="{name: 'user'}">个人中心</router-link></li>
      <li><router-link :to="{name: 'list'}">新闻列表</router-link></li>
    </ul>
  </div>
</template>

<script>

export default {
  name: 'Main',
  method: {
  }
}
</script>

<style lang="scss" scoped>
ul {
  position: fixed;
  width: 100%;
  height: 50px;
  left: 0;
  bottom: 0;
  line-height: 50px;
  display: flex;
  justify-content: space-around;
  li {
    list-style: none;
    flex: 1;
    text-align: center;
    a {
      display: block;
      text-decoration: none;
      &.active {
        background: #42b983;
        color: #fff;
      }
    }
  }
}
</style>

