<template>
    <div class="outer" v-bind:style="{minHeight: Height+'px'}">
        <div class="login-container">
            <Form class="login-form"></Form>
        </div>
    </div>
</template>

<script>
    import Form from "@/components/login/form";
    export default {
        name: "Login",
        components: {
            Form
        },
        data(){
            return{
                Height: 0
            }
        },
        created() {

        },
        methods:{

        },
        mounted() {
            //动态设置内容高度 让footer始终居底   header+footer的高度是100
            this.Height = document.documentElement.clientHeight;
            //监听浏览器窗口变化
            window.onresize = ()=> {this.Height = document.documentElement.clientHeight}
        }
    }
</script>

<style scoped>
    .login-form {
        width: 350px;
        margin: 160px auto; /* 上下间距160px，左右自动居中*/
        background-color: rgb(255, 255, 255, 0.8); /* 透明背景色 */
        padding: 30px;
        border-radius: 20px; /* 圆角 */
    }

    /* 背景 */
    .login-container {
        position: absolute;
        width: 100%;
        height: 100%;
        background: url("http://attach.bbs.miui.com/forum/201404/01/141958ecd21euizj4iiiez.jpg");
    }

</style>