<template>
    <div>
        <el-card class="box-card">
            <div slot="header" class="clearfix">
                <span>实验室成员</span>
            </div>
            <div class="content">
                <el-row>
                    <el-col  :span="4" v-for="(o) in 24" :key="o" >
                        <el-card class="student-content" :body-style="{ padding: '0px' }"   >
                            <div class="student-img">
                                <el-image :src="src"></el-image>
                            </div>
                            <div class="student-info">
                                <el-row>
                                    <el-col :span="12">
                                        <p class="student-name">{{name}}</p>
                                    </el-col>
                                    <el-col :span="12">
                                        <p class="student-grade">{{grade}}级</p>
                                    </el-col>
                                </el-row>
                                <el-divider></el-divider>
                                <span class="student-desc">{{desc}}</span>
                            </div>
                        </el-card>
                    </el-col>
                </el-row>
            </div>
        </el-card>
    </div>
</template>

<script>
    export default {
        name: "student",
        data() {
            return{
                currentDate: '2020-12-12',
                src: 'https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg',
                name: '王欣盛',
                grade: '2017',
                desc: '一只很弱的菜鸡'
            }
        }
    }
</script>

<style scoped>
    .student-desc{
        font-size: 13px;
        color: #999;
    }
    .student-info{
        margin-top: 10%;
    }

    .student-img {
        width: 100%;
        display: block;
    }
    .student-content{
        padding: 5%;
        margin: 5%;
    }
</style>