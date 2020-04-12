<template>
    <div class="setting">
        <el-card class="setting-item">
            <div slot="header" class="clearfix">
                <span>修改邮箱</span>
            </div>
            <el-form ref="form" :model="email" label-width="80px">
                <el-form-item label="邮箱">
                    <el-input v-model="email"></el-input>
                </el-form-item>
                <el-form-item label="验证码">
                    <el-row>
                        <el-col :span="12">
                            <el-input v-model="vcode1"></el-input>
                        </el-col>
                        <el-col :span="12">
                            <el-button class="send-btn" type="plain">发送</el-button>
                        </el-col>
                    </el-row>
                </el-form-item>
            </el-form>
            <el-button type="primary" class="email-btn fr">保存</el-button>
        </el-card>

        <el-card class="setting-item">
            <div slot="header" class="clearfix">
                <span>修改手机号</span>
            </div>
            <el-form ref="form" :model="phone" label-width="80px">
                <el-form-item label="手机号">
                    <el-input v-model="phone"></el-input>
                </el-form-item>
                <el-form-item label="验证码">
                    <el-row>
                        <el-col :span="12">
                            <el-input v-model="vcode2"></el-input>
                        </el-col>
                        <el-col :span="12">
                            <el-button class="send-btn" type="plain">发送</el-button>
                        </el-col>
                    </el-row>
                </el-form-item>
            </el-form>
            <el-button type="primary" class="phone-btn fr">保存</el-button>
        </el-card>
    </div>
</template>

<script>
    export default {
        name: "setting",
        data(){
            return{
                email: '',
                phone: '',
                vcode1: '',
                vcode2: ''
            }
        }
    }
</script>

<style scoped>
    .setting-item{
        margin-top: 20px;
    }

    .email-btn, .phone-btn{
        margin-bottom: 20px;
    }
    .send-btn{
        margin-left: 10%;
    }
</style>