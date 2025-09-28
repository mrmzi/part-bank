<template>
  <header  class="navbar">
    <div class="navbar__logo">
      <img
        class="navbar__logo-img"
        src="../../assets/images/header/Logo.svg"
        alt="لوگو پارت بانک"
      />
      <span class="navbar__logo-name">پارت بانک</span>
    </div>

    <div class="navbar__actions">
      <button class="navbar__notification">
        <img
          class="navbar__notification-icon"
          src="../../assets/icons/Notification.svg"
          alt="اعلان‌ها"
        />
      </button>

      <div class="navbar__profile">
        <img
          class="navbar__profile-img"
          src="../../assets/images/header/profile.svg"
          alt="تصویر پروفایل"
        />
        <span class="navbar__profile-number">۰۹۲۲۶۵۹۸۷۲</span>
        <img
          class="navbar__profile-arrow"
          src="../../assets/images/header/Angle-down.svg"
          alt="بازکردن منو"
        />
      </div>
    </div>
  </header>
</template>

<script></script>

<style scoped lang="scss">
.navbar {
  width: 1920px;
  height: 68px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 40px;
  background-color: #fff;

  &__logo {
    width: 178px;
    height: 31px;
    display: flex;
    align-items: center;
    margin: 18px 0 19px 0;

    &-img {
      width: 28.55px;
      height: 24px;
    }

    &-name {
      width: 62px;
      height: 22px;
      margin-right: 12px;
      font-size: 16px;
      color: rgba(60, 67, 81, 1);
    }
  }

  &__actions {
    width: 212px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  &__notification {
    width: 40px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 0;
    background-color: #fff;

    &-icon {
      width: 24px;
      height: 24px;
    }
  }

  &__profile {
    width: 156px;
    height: 40px;
    display: flex;
    align-items: center;

    &-img {
      width: 40px;
      height: 40px;
    }

    &-number {
      width: 76px;
      height: 20px;
      padding: 0 8px;
      font-size: 14px;
    }

    &-arrow {
      width: 24px;
      height: 24px;
    }
  }
}
</style>
