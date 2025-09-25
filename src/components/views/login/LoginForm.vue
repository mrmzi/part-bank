<script setup></script>
<template>
  <form class="login" dir="rtl">
    <div class="login__logo">
      <img class="login__logo-image" src="../../../assets/images/login/Logo.svg" alt="لوگو پارت بانک" />
      <div class="login__logo-header">
        <h1 class="login__logo-title">پارت بانک</h1>
        <span class="login__logo-subtitle">تجربه‌ای نوین در بانک داری</span>
      </div>
    </div>

    <div class="login__inputs">
      <label class="login__label" for="id-number">کد ملی</label>
      <input class="login__input" id="id-number" placeholder="مثلا ۰۹۲۴۵۸۹۴۵۰" type="tel" />

      <label class="login__label" for="phone-number">شماره همراه</label>
      <input class="login__input" id="phone-number" placeholder="مثلا ۰۹۱۲۳۴۵۶۷۸۹" type="tel" />

      <button class="login__button" type="submit">ارسال</button>
    </div>

    <div class="login__support">
      <span class="login__support-label">پشتیبانی:</span>
      <span class="login__support-number">۰۲۱-۱۲۳۴۵۶۷۸</span>
    </div>
  </form>
</template>

<style lang="scss" scoped>
.login {
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 83.5px;

  &__logo {
    width: 279px;
    height: 92px;
    display: flex;

    &-image {
      width: auto;
      height: auto;
    }

    &-header {
      margin: 24px 16px 0 0;
      width: 169px;
      height: 68px;
      color: rgba(65, 82, 160, 1);
    }

    &-title {
      font-size: 40px;
      font-family: 'peyda-bold';
    }

    &-subtitle {
      font-size: 16px;
    }
  }

  &__inputs {
    display: flex;
    flex-direction: column;
    margin-top: 103.5px;
    width: 354px;
    height: 280px;
  }

  &__label {
    width: 100%;
    height: 22px;
    font-size: 16px;
    margin-bottom: 4px;
  }

  &__input {
    width: 100%;
    height: 48px;
    background-color: #f9fafb;
    border: 0;
    border-radius: 8px;
    margin-bottom: 8px;
    padding: 14px 8px;
    outline: none;
    font-size: 14px;
    direction: rtl;

    &::placeholder {
      color: #c3c5c9;
    }
  }

  &__button {
    font-family: 'peyda-bold';
    width: 100%;
    height: 48px;
    background-color: #4152a0;
    border-radius: 8px;
    margin-top: 32px;
    border: 0;
    color: #ffffff;
    font-size: 16px;
    cursor: pointer;
  }

  &__support {
    width: 143px;
    height: 20px;
    display: flex;
    margin-bottom: 10px;
    margin-top: 229px;

    &-label {
      margin-left: 4px;
    }

    &-number {
      font-weight: bold;
    }
  }
}
</style>
