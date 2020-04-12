<template>
    <Verify
            @success="changeLoginStatus()"
            :vOffset="5" @error="alert('error')"
            :type="3"
            :barSize="{width:'350px',height:'30px'}"
            :showButton="false"
    ></Verify>
</template>

<script>
    import Verify from 'vue2-verify'
    import {CHANGE_CAN_LOGIN} from "../../store/mutation-types";
    export default {
        name: 'verify',
        methods: {
            changeLoginStatus() {
                this.$store.commit(CHANGE_CAN_LOGIN, true);
            }
        },
        components: {
            Verify
        }
    }
</script>

<style scoped>

</style>