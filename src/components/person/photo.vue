<template>
    <div class="photo">
        <el-card>
            <el-upload
                    class="upload-verify"
                    drag
                    action="https://jsonplaceholder.typicode.com/posts/"
                    multiple>
                <i class="el-icon-upload"></i>
                <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
                <div class="el-upload__tip" slot="tip">只能上传jpg/png文件，且不超过500kb</div>
            </el-upload>
        </el-card>
    </div>
</template>

<script>
    export default {
        name: "photo"
    }
</script>

<style scoped>
    .upload-verify{
        margin-left: 30%;
    }
</style>