<script setup>
import Dashboard from './views/Dashboard.vue';
import LoginPage from './views/LoginPage.vue'
</script>

<template>
  <section>
    <LoginPage></LoginPage>
    <Dashboard></Dashboard>
  </section>
</template>

<style scoped>
section {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
</style>
