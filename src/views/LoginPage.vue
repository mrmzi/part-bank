<script setup>
import LoginSection from '@/components/views/login/LoginSection.vue'
</script>
<template>
  <section class="main">
    <LoginSection></LoginSection>
  </section>
</template>
<style scoped lang="scss">
.main {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  /* width: 1920px; */
  width: $dashboard-width;
  /* height: 1080px; */
  height: $dashboard-height;
  background-image: url('../assets/images/login/login-bg.png');
  background-repeat: no-repeat;
}
</style>
