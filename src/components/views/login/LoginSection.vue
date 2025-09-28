<script setup>
import LoginImage from './LoginImage.vue'
import LoginForm from './LoginForm.vue'
</script>
<template>
  <section class="login-container">
    <LoginForm></LoginForm>
    <LoginImage></LoginImage>
  </section>
</template>
<style scoped>
.login-container {
  width: 1200px;
  height: 840px;
  display: flex;
  align-items: center;
  padding: 20px;
  background-color: #ffffff;
  overflow: hidden;
  border-radius: 12px;
}
</style>
