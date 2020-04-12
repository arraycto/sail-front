<template>
    <div class="container">
        <el-carousel :interval="4000" height="400px">
            <el-carousel-item v-for="item in carouselItems" :key="item">
                <el-image :src="item.image" fit="cover"></el-image>
            </el-carousel-item>
        </el-carousel>
        <el-row class="content">
            <el-col span="12">
                <el-card class="box-card">
                    <div slot="header" class="clearfix">
                        <span>近期新闻</span>
                    </div>
                    <div v-for="o in 4" :key="o" class="text item">
                        {{'列表内容 ' + o }}
                    </div>
                </el-card>
            </el-col>
            <el-col span="12">
                <el-card class="box-card">
                    <div slot="header" class="clearfix">
                        <span>文件分享</span>
                    </div>
                    <div v-for="o in 4" :key="o" class="text item">
                        {{'列表内容 ' + o }}
                    </div>
                </el-card>
            </el-col>
        </el-row>

    </div>
</template>

<script>
    export default {
        name: "Index",
        data() {
            return {
                carouselItems:[
                    {
                        image: 'https://cdn.wispx.cn/wallpaper/bing/2019/01/09/0bd2e13ac2f943e7ae2925e5480be0a7.jpg',
                        alt: '你好世界'
                    },
                    {
                        image: 'https://cdn.wispx.cn/wallpaper/bing/2019/02/12/d4f42aedc672561334500d26f3f846f5.jpg',
                        alt: '哈哈哈哈'
                    },
                    {
                        image: 'https://cdn.wispx.cn/wallpaper/bing/2019/02/22/1bfc2c31f74e4a2664f135dad5af6c29.jpg',
                        alt: '123'
                    }
                ],
            }
        },
    }
</script>

<style scoped>
    .text {
        font-size: 14px;
    }
    .item {
        margin-bottom: 18px;
    }
    .box-card {
        width: 480px;
    }
    .content{
        margin-top: 50px;
    }

</style>