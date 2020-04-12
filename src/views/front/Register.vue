<template>
    <div class="outer" v-bind:style="{minHeight: Height+'px'}">
        <div class="register-container">
            <register class="register-form"></register>
        </div>
    </div>
</template>

<script>
    import register from '@/components/login/register.vue'
    export default {
        name: "Register",
        components: {
            register
        }
    }
</script>

<style scoped>
    .register-form {
        width: 350px;
        margin: 160px auto; /* 上下间距160px，左右自动居中*/
        background-color: rgba(255, 255, 255, 0.8); /* 透明背景色 */
        padding: 30px;
        border-radius: 20px; /* 圆角 */
    }

    /* 背景 */
    .register-container {
        position: absolute;
        width: 100%;
        height: 100%;
        background: url("http://attach.bbs.miui.com/forum/201404/01/141958ecd21euizj4iiiez.jpg");
    }
</style>