<template>
    <div class="out">
        <h2 class="login-title">登录</h2>
        <el-form :label-position="user" label-width="80px" :model="formLabelAlign">
            <el-form-item label="用户名">
                <el-input v-model="user.username"></el-input>
            </el-form-item>
            <el-form-item label="密码">
                <el-input type="password" v-model="user.password"></el-input>
            </el-form-item>
            <el-form-item label="确认密码">
                <el-input type="password" v-model="confirmPassword"></el-input>
            </el-form-item>
            <el-form-item label="验证码">
                <el-input v-model="code"></el-input>
            </el-form-item>
            <el-button type="submit">注册</el-button>
        </el-form>
    </div>
</template>

<script>
    export default {
        name: "register",
        data() {
            return {
                user: {
                    username: '',
                    password: ''
                },
                confirmPassword: '',
                code: ''
            }
        }
    }
</script>

<style scoped>
    /* 标题 */
    .login-title {
        color: #303133;
        text-align: center;
        margin-bottom: 10px;
    }
</style>