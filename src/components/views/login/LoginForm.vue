<script setup></script>
<template>
  <form class="login__form" action="">
    <div class="login__logo">
      <img src="./images/Logo.svg" alt="لوگو پارت بانک" />
      <div class="login__logo__header">
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
<style scoped></style>
