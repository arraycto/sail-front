<template>
    <div class="outter">
        <el-row>
            <transition name="el-fade-in-linear">
                <el-col :span="6">
                    <div class="sidebar">
                        <sidebar v-show="show"></sidebar>
                    </div>
                </el-col>
            </transition>
            <transition  name="el-fade-in-linear">
                <el-col :span="18">
                    <div class="content">
                        <router-view />
                    </div>
                </el-col>
            </transition>
        </el-row>
    </div>
</template>

<script>
    import Sidebar from "../../components/common/sidebar";
    export default {
        name: "Person",
        components: {Sidebar},
        data() {
            return{
                show: false
            }
        },
        mounted() {
            this.show = true
        }
    }
</script>

<style scoped>
    .sidebar{
        width: 50%;
        margin-left: 50%;
        margin-top: 5%;
    }

    .content{
        margin-top: 2%;
        width: 70%;
        margin-left: 12.5%;
    }

</style>