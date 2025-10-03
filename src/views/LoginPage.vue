<template>
  <section class="login__container">
    <LoginSection />
  </section>
</template>

<script setup>
import LoginSection from '@/components/pages/login/LoginSection.vue'
</script>

<style scoped lang="scss">
.login__container {
  position: relative;
  @include flex-center();
  width: $dashboard-width;
  height: $dashboard-height;
  background-image: url('../assets/images/login/login-bg.png');
  background-repeat: no-repeat;
}
</style>
