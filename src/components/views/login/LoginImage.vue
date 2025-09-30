<script setup>
    // export default{
        
    // };
</script>
<template>
    <!-- Login Left Part -->
    <section class="login-left-part">
        <div class="login-img">
            <img src="../../../assets/images/login/login-image.jpg" alt="عکس صفحه لاگین">
        </div>
    </section>
</template>
<style scoped lang="scss">
    /* ------------------------------ Start of left part ------------------------------ */
.login-left-part {
    width: 600px;
    height: 840px;
    @include flex-center();
    border-top-left-radius: 20px;
    border-bottom-left-radius: 20px;
}

.login-img {
    width: 100%;
    height: 100%;
    @include flex-center();
    background-size: cover;
}

.login-img img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: $radius-lg;
}
</style>