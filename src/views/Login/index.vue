<template>
<div class="login">
  <el-card class="login-box">
    <el-form label-width="80px" class="login-form">
      <el-form-item label="用户名">
        <el-input v-model="user.username"></el-input>
      </el-form-item>
      <el-form-item label="密 码">
        <el-input v-model="user.password"></el-input>
      </el-form-item>
    </el-form>
    <el-button class="login-btn" type="primary" @click="submit">登录</el-button>
  </el-card>
</div>
</template>
<script lang="ts" setup>
import {reactive} from 'vue'
const user = reactive({
  username: '',
  password: ''
})
const submit = () => {
  console.log(user.username)
  console.log('模拟登录')
}
</script>
<style lang="scss" scoped>
.login {
  height: 100%;
  display: flex;
}
.login-box {
  width: 400px;
  height: 300px;
  margin: auto;
  .login-form {
    margin: 40px auto;
  }
  .login-btn {
    width: 300px;
  }
}
.el-input {
  width: 200px;
}
</style>