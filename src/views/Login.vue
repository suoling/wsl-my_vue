<template>
  <div class="login">
    <form v-if="!isReg">
      <div>
        <label>用户名</label>
        <input type="text" v-model="userName"/>
      </div>
      <div>
        <label>密码</label>
        <input type="password" v-model="password"/>
      </div>
      <div class="btn">
        <button type="button" @click="login()">登陆</button>
        <button type="button" @click="register()">注册</button>
      </div>
    </form>
    <form v-else>
      <div>
        <label>用户名</label>
        <input type="text" v-model="userName"/>
      </div>
      <div>
        <label>密码</label>
        <input type="password" v-model="password"/>
      </div>
      <div>
        <label>确认密码</label>
        <input type="password" v-model="confirmPwd"/>
      </div>
      <div class="btn">
        <button type="button" @click="addUser()">确定</button>
        <button type="button" @click="cancel()">取消</button>
      </div>
    </form>
  </div>
</template>

<script>

export default {
  name: 'Login',
  data () {
    return {
      userName: '',
      password: '',
      confirmPwd: '',
      isReg: true
    }
  },
  methods: {
    addUser () {
      if (this.userName === '') {
        alert('用户名不能为空')
        return
      }
      if (this.password === '') {
        alert('密码不能为空')
        return
      }
      if (this.confirmPwd === '') {
        alert('确认密码不能为空')
        return
      }
      if (this.password !== this.confirmPwd) {
        alert('两次密码输入不同')
        return
      }
      localStorage.setItem('name', this.userName)
      localStorage.setItem('password', this.password)
      this.userName = ''
      this.password = ''
      this.confirmPwd = ''
      this.isReg = false
    },
    cancel () {
      this.userName = ''
      this.password = ''
      this.confirmPwd = ''
    },
    login () {
      if (localStorage.getItem('name') === this.userName && localStorage.getItem('password') === this.password) {
        this.$router.push('/main/list')
      } else {
        alert('用户名和密码输入错误！！！')
      }
    },
    register () {
      this.userName = ''
      this.password = ''
      this.confirmPwd = ''
      this.isReg = true
    }
  }
}
</script>

<style lang="scss" scoped>

.login {
  margin-top: 20px;
}
form div {
  margin-bottom: 10px;
}
label, input {
  display: inline-block;
  height: 30px;
  line-height: 30px;
}

label {
  width: 80px;
  text-align: right;
  margin-right: 5px;
}

input {
  border: none;
  outline: none;
  width: 200px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

.btn {
  width: 200px;
  margin: 0 auto;
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
}

</style>
