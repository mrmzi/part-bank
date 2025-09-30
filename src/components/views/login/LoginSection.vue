<script setup>
import LoginImage from './LoginImage.vue'
import LoginForm from './LoginForm.vue'
</script>
<template>
  <section class="login-container">
    <LoginImage></LoginImage>
    <LoginForm></LoginForm>
  </section>
</template>
<style scoped lang="scss">
.login-container {
  width: $login-container-width;
  height: $login-container-height;
  display: flex;
  align-items: center;
  padding: 20px;
  background-color: $color-white;
  overflow: hidden;
  border-radius: $radius-lg;
}
</style>
