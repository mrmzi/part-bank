<script setup>
import Header from '@/components/baseComponents/Header.vue'
</script>
<template class="form">
  <Header class="header-section" />
  <router-view />
</template>
<style>
.form {
  width: 1920px;
  height: 1080px;
}
.header-section {
  position: fixed;
  top: 0;
}
</style>
