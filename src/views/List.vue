<template>
  <div>
    <div class="item" v-for="(item, index) in data" :key="index">
      <div class="show-title">{{item.title}}</div>
      <div class="show-content">{{item.content}}</div>
      <div class="show-other">
        <div>{{item.nowTime | timeTrans}}</div>
        <div @click="queryDetail(item.title)">查看详情</div>
      </div>
    </div>
  </div>
</template>

<script>
import moment from 'moment'
import store from '@/store'
export default {
  name: 'List',
  store,
  data () {
    return {
      data: store.state.list,
    }
  },
  created () {
    // console.log('list created')
  },
  filters: {
    timeTrans: function (value) {
      return moment(value).format('YYYY-MM-DD hh:mm:ss')
    }
  },
  methods: {
    queryDetail (title) {
      this.$router.push({
        name: 'detail',
        params: {title: title} 
      })
    }
  }
}
</script>

<style lang="scss" scoped>
  .item {
    margin: 5px;
    padding: 5px 10px;
    border: 1px solid #ccc;
    .show-title, .show-content {
      line-height: 20px;
      text-align: left;
    }
    .show-other {
      display: flex;
      justify-content: space-between;
    }
  }
</style>
