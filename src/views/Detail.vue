<template>
  <div>
    <div v-for="(item, index) in dataList" :key="index">
      <div v-show="item.title === curTitle">{{item.content}}</div>
    </div>
  </div>
</template>

<script>
import store from '@/store'
export default {
  name: 'Detail',
  store,
  data () {
    return {
      curTitle: this.$route.params.title,
      dataList: store.state.list
    }
  },
  created () {

  },
  methods: {

  }
}
</script>
