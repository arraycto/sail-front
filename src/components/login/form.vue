<template>
    <div class="out">
        <h2 class="login-title">登录</h2>
        <el-form :label-position="user" label-width="80px" :model="user">
            <el-form-item label="用户名">
                <el-input v-model="user.username"></el-input>
            </el-form-item>
            <el-form-item label="密码">
                <el-input type="password" v-model="user.password"></el-input>
            </el-form-item>
            <verify></verify>
            <el-button class="login-btn" @click="login" type="primary" native-type="submit">登录</el-button>
        </el-form>
    </div>
</template>

<script>
    import Verify from "../common/VerifyCode";
    import {CHANGE_CAN_LOGIN, RECORD_TOKEN} from "../../store/mutation-types";
    export default {
        name: "form",
        components: {Verify},
        data() {
            return {
                user: {
                    username: '',
                    password: ''
                },
                code: ''
            }
        },
        methods:{
            login(){
                const canLogin = this.$store.state.canLogin;
                if (canLogin) {
                    this.$store.commit(RECORD_TOKEN, '1234');
                    this.$store.commit(CHANGE_CAN_LOGIN, false);
                    this.$message.success('登陆成功')
                    this.$router.push('/')
                } else {
                    this.$message.error('请先进行验证')
                }
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

    .login-btn{
        margin-left: 40%;
        margin-top: 10%;
    }
</style>