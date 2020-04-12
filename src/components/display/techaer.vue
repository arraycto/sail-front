<template>
    <div>
        <el-card class="box-card">
            <div slot="header" class="clearfix">
                <span>指导老师</span>
            </div>
            <div class="content">
                <el-row>
                    <el-col :span="9">
                        <el-image :src="src">
                            <div slot="placeholder" class="image-slot">
                                加载中<span class="dot">...</span>
                            </div>
                        </el-image>
                    </el-col>
                    <el-col :span="12">
                        <p class="teacher-name">{{name}}</p>
                        <span class="teacher-desc">
                            {{desc}}
                        </span>
                    </el-col>
                </el-row>
            </div>
        </el-card>
    </div>
</template>

<script>
    export default {
        name: "techaer",
        data() {
            return{
                src: 'https://rjxy.jsu.edu.cn/images/19/11/26/4wdf1gx622/D220383DA267DBDF4E03E7EE359959EE.jpg',
                desc: '副教授、中山大学博士、国家高级程序员，\n' +
                    '                            吉首大学软件学院院长助理。主要从事软件工程专业教学与研究，\n' +
                    '                            主讲数据库技术和Java语言等课程，主持湖南省教育厅教学改革项目，\n' +
                    '                            参与国家自科基金及省部级多项科研项目、吉首大学教学改革重点项目、\n' +
                    '                            吉首大学《Java程序设计》精品课程等，\n' +
                    '                            在清华大学出版社出版了《利用案例轻松学习Java语言》（十一五规划教材、吉首大学精品教材）、\n' +
                    '                            《利用案例轻松学习Java语言习题大全及实验指导》等教材，荣获吉首大学“教学能手”称号，是吉首大学教学督导专家组成员，\n' +
                    '                            在中国高等教育、高等理科教育和计算机教育等核心杂志发表教改论文20余篇，发表20余篇科研论文，其中EI、CSCD检索10余篇。',
                name: '覃遵跃'
            }
        }
    }
</script>

<style scoped>
    .teacher-name{
        font-size: 26px;
        font-weight: bold;
    }
</style>