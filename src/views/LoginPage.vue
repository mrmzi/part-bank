<script setup>
import LoginForm from '@/components/pages/login/LoginForm.vue'
import LoginImage from '@/components/pages/login/LoginImage.vue'
</script>

<template>
  <section class="login__container">
    <section class="login__section">
      <LoginForm></LoginForm>
      <LoginImage></LoginImage>
    </section>
  </section>
</template>

<style scoped lang="scss">
.login__container {
  // position: relative;
  @include flex-center;
  width: 99vw;
  height: 97.7vh;
  background-image: url('../assets/images/login/login-bg.png');
  background-repeat: no-repeat;
  background-size: cover;

  .login__section {
    width: 62.5%;
    height: 95.78%;
    @include flex-center;
    padding: 20px 0px 20px 20px;
    background-color: $color-white;
    overflow: hidden;
    border-radius: $radius-lg;
  }
}
</style>
