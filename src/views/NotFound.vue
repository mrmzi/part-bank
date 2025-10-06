<script>
export default {
  name: "NotFound",
}
</script>

<template>
  <div class="not-found">
    <h1 class="not-found__title">404</h1>
    <p class="not-found__text">صفحه‌ای که دنبالشی پیدا نشد!</p>
    <router-link to="/" class="not-found__link">برگشت به صفحه اصلی</router-link>
  </div>
</template>

<style scoped lang="scss">
.not-found {
  text-align: center;
  margin-top: 100px;
  font-family: sans-serif;

  &__title {
    font-size: 6rem;
    margin: 0;
    color: #ff5252;
  }

  &__text {
    font-size: 1.2rem;
    margin-bottom: 20px;
  }

  &__link {
    color: #42b983;
    text-decoration: none;
    font-weight: bold;

    &:hover {
      text-decoration: underline;
    }
  }
}
</style>
