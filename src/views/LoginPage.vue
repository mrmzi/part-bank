<script setup>
import LoginSection from '@/components/views/login/LoginSection.vue'
</script>
<template>
  <section class="main">
    <LoginSection></LoginSection>
  </section>
</template>
<style scoped>
.main {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 1920px;
  height: 1080px;
  background-image: url('../assets/images/login/login-bg.png');
  background-repeat: no-repeat;
}
</style>
