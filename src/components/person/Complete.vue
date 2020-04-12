<template>
    <div class="wapper">
        <el-card>
            <el-row>
                <el-col :span=4>
                    <div class="avatar">
                        <el-avatar  :size="100" src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"></el-avatar>
                        <el-link style="margin-left: 5%" type="primary" @click="uploadAvatar">点击更换头像</el-link>
                        <el-upload
                                class="avatar-uploader"
                                :action="'http://www.baidu.com'"
                                name="images"
                                :show-file-list="false"
                                :on-success="uploadSuccess"
                                >
                        </el-upload>
                    </div>
                </el-col>
                <el-col :span="20">
                    <el-form ref="form" label-position="left" :model="userInfo" label-width="80px">
                        <div slot="header" class="clearfix">
                            <span>完善资料</span>
                        </div>
                        <ul class="profile-box">
                            <li>
                                <span class="username">wangx &nbsp;</span>
                                <el-tag class="level-label" :type="userLevelType[userInfo.level]">{{userLevelLabel[userInfo.level]}}</el-tag>
                            </li>

                            <li>
                                <el-form-item label="邮箱">
                                    <el-input
                                            disabled
                                            placeholder="请输入内容"
                                            v-model="userInfo.email">
                                    </el-input>
                                </el-form-item>
                            </li>

                            <li>
                                <el-form-item label="手机号">
                                    <el-input
                                            disabled
                                            placeholder="请输入内容"
                                            v-model="userInfo.phone">
                                    </el-input>
                                </el-form-item>
                            </li>

                            <li>
                                <el-form-item label="真实姓名">
                                    <el-input
                                            placeholder="请输入内容"
                                            v-model="userInfo.realName">
                                    </el-input>
                                </el-form-item>
                            </li>
                            <li>
                                <el-form-item label="学号">
                                    <el-input
                                            placeholder="请输入内容"
                                            v-model="userInfo.sid">
                                    </el-input>
                                </el-form-item>
                            </li>
                            <li>
                                <el-form-item label="年级">
                                    <el-select v-model="userInfo.grade" placeholder="请选择">
                                    <el-option
                                            v-for="item in gradesOptions"
                                            :key="item.value"
                                            :label="item.label"
                                            :value="item.value">
                                    </el-option>
                                    </el-select>
                                </el-form-item>
                            </li>

                            <li>
                                <el-form-item label="班级">
                                    <el-select v-model="userInfo.class" placeholder="请选择">
                                        <el-option
                                                v-for="item in classCptions"
                                                :key="item.value"
                                                :label="item.label"
                                                :value="item.value">
                                        </el-option>
                                    </el-select>
                                </el-form-item>
                            </li>
                        </ul>

                        <el-button class="save-btn" type="primary">保存</el-button>
                    </el-form>
                </el-col>

            </el-row>

        </el-card>
    </div>
</template>

<script>
    export default {
        name: "Complete",
        data() {
            return{
                userInfo: {
                    username: 'wangx',
                    email: 'wangx_0102@126.com',
                    phone: '177****1624',
                    level: '1',
                    realName: '王五',
                    grade: '2017',
                    class: '1',
                    sid: '2017421012'
                },
                userLevelLabel:[
                    '普通用户',
                    '实验室成员',
                    '实验室管理员',
                    '封停账户'
                ],
                userLevelType:[
                    '',
                    'success',
                    'info',
                    'warning'
                ],
                gradesOptions: [{
                    value: '2017',
                    label: '2017'
                }, {
                    value: '2018',
                    label: '2018'
                }, {
                    value: '2019',
                    label: '2019'
                }, {
                    value: '2020',
                    label: '2020'
                }, {
                    value: '2021',
                    label: '2021'
                }],
                classCptions: [{
                    value: '1',
                    label: '一班'
                }, {
                    value: '2',
                    label: '二班'
                }, {
                    value: '3',
                    label: '三班'
                }, {
                    value: '4',
                    label: '四班'
                }, {
                    value: '5',
                    label: '五班'
                }],
            }
        },
        methods: {
            uploadSuccess(res) {
                const loading = this.$loading({
                    lock: true,
                    text: '上传中请等待...',
                    spinner: 'el-icon-loading',
                    background: 'rgba(0, 0, 0, 0.7)'
                })
                if (res.code === '2000'){
                    loading.close()
                } else {
                    this.$message.error('错误')
                }
            },
            uploadAvatar(){
                document.querySelector('.avatar-uploader input').click()
            }
        }
    }
</script>

<style scoped>
    .username{
        font-size: 24px;
        color: #188ae2;
    }
    .avatar {
        margin-right: 10%;
    }
    .profile-box li{
        margin-top: 20px;
    }
    .level-label{
        margin-left: 2%;
    }

    .save-btn{
        margin-left: 40%;
    }
</style>