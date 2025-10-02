<script setup>
import LoginSection from '@/components/views/login/LoginSection.vue'
</script>
<template>
  <section class="main">
    <LoginSection />
  </section>
</template>
<style scoped lang="scss">
.main {
  position: relative;
  @include flex-center();
  width: $dashboard-width;
  height: $dashboard-height;
  background-image: url('../assets/images/login/login-bg.png');
  background-repeat: no-repeat;
}
</style>
