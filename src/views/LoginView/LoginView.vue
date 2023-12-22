<template>
  <div class="logo-page">
    <div class="login-container">
      <div class="login-img"></div>
      <div class="login-content">
        <img src="/images/vue-mastery-logo.png" width="150" />
        <div class="f24 mt16 mb32">后台管理系统</div>
        <el-form
          ref="ruleFormRef"
          label-position="top"
          size="large"
          :model="ruleForm"
          :rules="rules"
          style="width: 100%"
        >
          <el-form-item label="用户名" prop="username">
            <el-input v-model="ruleForm.username" :prefix-icon="User" placeholder="请输入用户名" />
          </el-form-item>
          <el-form-item label="密码" prop="passsword">
            <el-input
              v-model="ruleForm.passsword"
              :prefix-icon="Lock"
              type="password"
              placeholder="请输入密码"
              show-password
            />
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="onLogin(ruleFormRef)" style="width: 100%"
              >登录</el-button
            >
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'
import { useRouter } from 'vue-router'
import { User, Lock } from '@element-plus/icons-vue'

const router = useRouter()

const ruleFormRef = ref()
const ruleForm = reactive({
  username: '',
  passsword: ''
})
const rules = reactive({
  username: [{ required: true, message: '请输入用户名', trigger: 'blur' }],
  passsword: [{ required: true, message: '请输入密码', trigger: 'blur' }]
})

const onLogin = async (formEl) => {
  if (!formEl) return
  await formEl.validate((valid, fields) => {
    if (valid) {
      console.log('submit!')
      router.push('/')
    } else {
      console.log('error submit!', fields)
    }
  })
}
</script>

<style lang="scss" scoped>
.logo-page {
  height: 100vh;
  background-image: url(/images/background.webp);
  display: flex;
  justify-content: center;
  align-items: center;
  .login-container {
    width: 1200px;
    height: 600px;
    background-color: #fff;
    border-radius: 8px;
    overflow: hidden;
    display: flex;
    .login-img {
      width: 700px;
      background: #e2e9ff url(/images/login-img.webp) center / cover no-repeat;
    }
    .login-content {
      flex: 1;
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 32px;
      :deep(label) {
        font-size: 16px;
      }
    }
  }
}
</style>
