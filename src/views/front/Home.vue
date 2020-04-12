<template>
  <div class="out">
      <vue-particle-line id="back">
          <topbar class="topbar"></topbar>
          <div id="v-content" v-bind:style="{minHeight: Height+'px'}"><router-view /></div>
          <Footer class="foot"></Footer>
      </vue-particle-line>
  </div>
</template>

<script>
import Topbar from "@/components/common/topbar";
import Footer from "@/components/common/footer";


export default {
  name: 'Home',
  components: {
        Footer,
        Topbar
  },
  data() {
    return {
      Height: 0
    }
  },
  mounted() {
    //动态设置内容高度 让footer始终居底   header+footer的高度是100
    this.Height = document.documentElement.clientHeight - 130;
    //监听浏览器窗口变化
    window.onresize = ()=> {this.Height = document.documentElement.clientHeight -130}
  }
}
</script>

<style scoped>
    #back{
        position:absolute;z-index:0;
        background-color: #eee;
    }
    #v-content, .topbar{
        position:relative;z-index:9999;
    }
    #v-content{
        margin-top: 30px;
    }
    .foot{
        text-align: center;
    }
</style>
