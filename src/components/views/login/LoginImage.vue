<template>
  <section class="login-left">
    <div class="login-left__image-wrapper">
      <img
        class="login-left__image"
        src="@/assets/images/login/login-image.jpg"
        alt="عکس صفحه لاگین"
      />
    </div>
  </section>
</template>

<script setup></script>

<style scoped lang="scss">
.login-left {
  width: 600px;
  height: 840px;
  @include flex-center();
  border-top-left-radius: 20px;
  border-bottom-left-radius: 20px;

  &__image-wrapper {
    width: 100%;
    height: 100%;
    @include flex-center();
    background-size: cover;
  }

  &__image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: $radius-lg;
  }
}
</style>
