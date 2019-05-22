<template>
  <div>
    <form>
      <div class="title">
        <label>标题</label>
        <input type="text" v-model="title" />
      </div>
      <div class="content">
        <label>内容</label>
        <textarea v-model="content"/>
      </div>
      <button type="button" @click="add()">添加</button>
    </form>
  </div>
</template>

<script>
import store from '@/store';
export default {
  name: 'User',
  store,
  data () {
    return {
      title: '',
      content: ''
    }
  },
  methods: {
    add () {
      if (this.title === '' ||  this.content === '') {
        alert('标题和内容不得为空')
        return
      }
      store.commit('addItem', {
        title: this.title,
        content: this.content,
        nowTime: new Date()
      })
      alert('标题和内容添加成功！')
      this.$router.push('/main/list')
    }
  }
}
</script>

<style lang="scss" scoped>
.title {
  text-align: center;
  label, input {
    display: inline-block;
    width: 200px;
  }
  label {
    height: 20px;
    line-height: 20px;
    text-align: left;
  }
  input {
    outline: none;
    border: none;
    border: 1px solid #ccc;
    border-radius: 5px;
    height: 30px;
    line-height: 30px;
  }
}
.content {
  label, textarea {
    display: inline-block;
    width: 200px;
    line-height: 20px;
  }
  label {
    text-align: left;
  }
  textarea {
    outline: none;
    border: none;
    border: 1px solid #ccc;
    border-radius: 5px;
    height: 200px;
  }
}

button {
  background: none;
  border: none;
  height: 30px;
  width: 80px;
  line-height: 30px;
  text-align: center;
  border: 1px solid #42b983;
  border-radius: 5px;
  margin-right: 5px;
  outline: none;
}
</style>
