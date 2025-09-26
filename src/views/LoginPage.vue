<script setup>
import LoginSection from '@/components/views/login/LoginSection.vue';
</script>
<template>
    <section class="main">
        <LoginSection></LoginSection>
    </section>
</template>
<style scoped>
    .main{
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        height: 100%;
        background-image: url('../assets/images/login-bg.jpg') no-repeat;
        background-size: cover;
        background-position: center;
    }
</style>