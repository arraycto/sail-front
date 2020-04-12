<template>
<div class="out">
    <el-menu
            :default-active="activeIndex"
            class="el-menu-demo"
            mode="horizontal"
            @select="handleSelect"
            router
    >
        <el-menu-item>
            <i class="el-icon-ship"></i>
            <span style="font-size: 20px;color: black">
                启航工作室 | Sail Studio
            </span>
        </el-menu-item>
        <el-menu-item index="Index" :route="{path: '/index'}">
            <i class="el-icon-s-home"></i>
            首页
        </el-menu-item>
        <el-menu-item index="Display" :route="{path: '/display'}">
            <i class="el-icon-s-order"></i>
            信息展示
        </el-menu-item>
        <el-menu-item index="About" :route="{path: '/about'}">
            <i class="el-icon-info"></i>
            关于
        </el-menu-item>
        <div class="fr user">
            <el-row>
                <!-- 未登录 -->
                <div class="unlogin" v-if="token == null">
                    <router-link to="/login">
                        <el-button class="log" type="success" icon="el-icon-user"  plain>登录</el-button>
                    </router-link>
                    <router-link to="/register">
                        <el-button class="reg" type="primary" icon="el-icon-edit-outline" plain>注册</el-button>
                    </router-link>
                </div>
                <!-- 已登陆 -->
                <div class="login" v-if="token !== null">
                    <el-submenu index="">
                        <template slot="title">
                            <el-avatar class="avatar" src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"></el-avatar>
                        </template>
                        <el-menu-item index="Person">
                            <i class="el-icon-user"></i>
                            个人中心
                        </el-menu-item>
                        <el-menu-item index="2-4-3">
                            <i class="el-icon-s-management"></i>
                            后台管理
                        </el-menu-item>
                        <el-menu-item index="" @click="logout">
                            <i class="el-icon-right"></i>
                            退出登录
                        </el-menu-item>
                    </el-submenu>
                </div>
            </el-row>
        </div>
    </el-menu>
</div>
</template>

<script>
    import {RECORD_TOKEN} from "../../store/mutation-types";

    export default {
        name: "topbar",
        data() {
            return {
                activeIndex: 'Index',
                token: null,
            };
        },
        mounted() {
            this.token = this.$store.state.token;
        },
        methods: {
            handleSelect(key, keyPath) {
                console.log(key, keyPath);
            },
            logout(){
                this.$store.commit(RECORD_TOKEN, null)
                window.location.reload()
            }
        }
    }
</script>

<style scoped>
    .user{
        margin-top: 10px;
    }

    .unlogin{
       margin-right: 20px;
    }
    .unlogin .log{
        margin-right: 20px;
    }

    .login{
        margin-right: 20px;
    }
</style>