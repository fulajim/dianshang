<template>
  <div class="login_container">
    <div class="login_box">
      <div class="avater_box">
        <img src="../assets/logo.png" alt="" />
      </div>
      <el-form
        :model="loginForm"
        :rules="rules"
        ref="loginRef"
        class="login_from"
      >
        <!-- 用户名 -->
        <el-form-item prop="username">
          <el-input
            v-model="loginForm.username"
            placeholder="用户名"
            prefix-icon="el-icon-user-solid"
          >
          </el-input>
        </el-form-item>
        <!-- 密码 -->
        <el-form-item prop="password">
          <el-input
            v-model="loginForm.password"
            placeholder="密码"
            prefix-icon="el-icon-lock"
            type="password"
          >
          </el-input>
        </el-form-item>
        <el-row class="btns">
          <el-button type="primary" @click="login">登录</el-button>
          <el-button type="info" @click="resetLogin">重置</el-button>
        </el-row>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  props: {},
  data() {
    return {
      //登录表单的数据绑定对象
      loginForm: {
        username: "admin",
        password: "123456",
      },
      rules: {
        //表单的验证规则
        username: [
          { required: true, message: "用户名", trigger: "blur" },
          {min: 3,max: 10,message: "长度在 3 到 10 个字符",trigger: "blur"},
        ],
        password: [
          { required: true, message: "密码", trigger: "blur" },
          { min: 6, max: 16, message: "长度在 6 到 16个字符", trigger: "blur" },
        ],
      },
    };
  },
  methods: {
    login() {
      this.$refs.loginRef.validate(async val=>{
        //    console.log(val);
           if(!val) return;
           console.log(this.loginForm);
         const res = await this.$http.post("login",this.loginForm);
         console.log(res);
      })
    },
    resetLogin() {
      this.$refs.loginRef.resetFields();
    },
  },
  components: {},
};
</script>

<style scoped lang="less">
.login_container {
  background-color: #2b4b6b;
  width: 100%;
  height: 100%;
  .login_box {
    width: 400px;
    height: 300px;
    background-color: #fff;
    border-radius: 5px;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    .avater_box {
      width: 130px;
      height: 130px;
      border: 1px solid #eee;
      border-radius: 50%;
      padding: 10px;
      box-shadow: 0 0 10px #ddd;
      position: absolute;
      left: 50%;
      transform: translate(-50%, -50%);
      background-color: #fff;
      img {
        width: 100%;
        height: 100%;
        border-radius: 50%;
        background-color: #eee;
      }
    }
  }
}
.login_from {
  position: absolute;
  bottom: 20px;
  width: 100%;
  padding: 0 20px;
  box-sizing: border-box;
}
.btns {
  display: flex;
  justify-content: flex-end;
}
</style>
