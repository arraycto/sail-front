<template>
    <div class="out">
        <el-menu
        default-active="complete"
        class="el-menu-vertical-demo"
        @open="handleOpen"
        @close="handleClose"
        router
        >
            <el-menu-item index="complete" route="/person/complete">
                <i class="el-icon-document"></i>
                <span slot="title">完善资料</span>
            </el-menu-item>
            <el-menu-item  index="password" route="/person/password">
                <i class="el-icon-key"></i>
                修改密码
            </el-menu-item>
            <el-menu-item  index="photo" route="/person/photo">
                <i class="el-icon-camera"></i>
                修改认证照片
            </el-menu-item>
            <el-menu-item index="setting" route="/person/setting">
                <i class="el-icon-setting"></i>
                <span slot="title">设置</span>
            </el-menu-item>
        </el-menu>
    </div>
</template>

<script>
    export default {
        name: "sidebar",
        methods: {
            handleOpen(key, keyPath) {
                console.log(key, keyPath);
            },
            handleClose(key, keyPath) {
                console.log(key, keyPath);
            }
        }
    }
</script>

<style scoped>
    .transition-box {
        margin-bottom: 10px;
        width: 200px;
        height: 100px;
        border-radius: 4px;
        background-color: #409EFF;
        text-align: center;
        color: #fff;
        padding: 40px 20px;
        box-sizing: border-box;
        margin-right: 20px;
    }
</style>