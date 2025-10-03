<template>
  <div class="not-found">
    <h1>404</h1>
    <p>صفحه‌ای که دنبالشی پیدا نشد!</p>
    <router-link to="/">برگشت به صفحه اصلی</router-link>
  </div>
</template>

<script>
export default {
  name: "NotFound",
}
</script>

<style scoped>
.not-found {
  text-align: center;
  margin-top: 100px;
  font-family: sans-serif;
}

.not-found h1 {
  font-size: 6rem;
  margin: 0;
  color: #ff5252;
}

.not-found p {
  font-size: 1.2rem;
  margin-bottom: 20px;
}

.not-found a {
  color: #42b983;
  text-decoration: none;
  font-weight: bold;
}

.not-found a:hover {
  text-decoration: underline;
}
</style>
