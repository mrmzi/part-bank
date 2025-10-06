<template>
  <section class="login__container">
    <section class="login__section">
      <LoginForm></LoginForm>
      <LoginImage></LoginImage>
    </section>
  </section>
</template>

<script setup>
import LoginForm from '@/components/pages/login/LoginForm.vue'
import LoginImage from '@/components/pages/login/LoginImage.vue'
</script>

<style scoped lang="scss">
.login__container {
  position: relative;
  @include flex-center;
  width: 1920px;
  height: 1080px;
  background-image: url('../assets/images/login/login-bg.png');
  background-repeat: no-repeat;
  background-size: cover;

  .login__section {
    width: 1200px;
    height: 840px;
    @include flex-center;
    padding: 20px;
    background-color: $color-white;
    overflow: hidden;
    border-radius: $radius-lg;
  }
}
</style>
