<template>
    <div class="container">
        <Techaer class="teacher"></Techaer>
        <Student class="student"></Student>
    </div>
</template>

<script>
    import Techaer from "../../components/display/techaer";
    import Student from "../../components/display/student";
    export default {
        name: "Display",
        components: {Student, Techaer}
    }
</script>

<style scoped>
    .student{
        margin-top: 5%;
    }
</style>