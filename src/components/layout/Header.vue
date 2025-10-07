<script setup></script>

<template>
  <header class="navbar">
    <div class="navbar__logo">
      <img
        class="navbar__logo-img"
        src="@/assets/images/header/Logo.svg"
        alt="لوگو پارت بانک"
      />
      <span class="navbar__logo-name">پارت بانک</span>
    </div>

    <div class="navbar__actions">
      <button class="navbar__notification">
        <img
          class="navbar__notification-icon"
          src="@/assets/icons/Notification.svg"
          alt="اعلان‌ها"
        />
      </button>

      <div class="navbar__profile">
        <img
          class="navbar__profile-img"
          src="@/assets/images/header/profile.svg"
          alt="تصویر پروفایل"
        />
        <span class="navbar__profile-number">۰۹۲۲۶۵۹۸۷۲</span>
        <img
          class="navbar__profile-arrow"
          src="@/assets/images/header/Angle-down.svg"
          alt="بازکردن منو"
        />
      </div>
    </div>
  </header>
</template>

<style scoped lang="scss">
.navbar {
  width: 1920px;
  height: 68px;
  padding: 0 40px;
  background-color: $color-white;
  margin-bottom: $gap-xxl;
  box-sizing: border-box;
  box-shadow: 0px 2px 8px rgba(21, 0, 43, 0.05);
  @include flex-between; 

  &__logo {
    display: flex;
    align-items: center;
    margin: 18px 0 19px 0;

    &-img {
      width: 28.55px;
      height: 24px;
    }

    &-name {
      margin-right: 12px;
      @include text-style($size: $font-size-md, $weight: $font-weight-600, $color: $text-primary);
    }
  }

  &__actions {
    width: 212px;
    height: 40px;
    @include flex-between;
  }

  &__notification {
    width: 40px;
    height: 40px;
    @include flex-center();
    border: $border-none;
    background-color: $color-white;

    &-icon {
      width: 24px;
      height: 24px;
    }
  }

  &__profile {
    width: 156px;
    height: 40px;
    @include flex-center($gap-sm);

    &-img {
      width: 40px;
      height: 40px;
    }

    &-number {
      padding: 0 8px;
      @include text-style($size: $font-size-base, $weight: $font-weight-500, $color: $text-primary);
    }

    &-arrow {
      width: 24px;
      height: 24px;
    }
  }
}
</style>
