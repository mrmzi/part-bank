<template>
  <form class="login" @submit.prevent="handleLogin" novalidate>
    <div class="login__logo">
      <img
        class="login__logo-image"
        src="../../../assets/images/login/Logo.svg"
        alt="لوگو پارت بانک"
      />
      <div class="login__logo-header">
        <h1 class="login__logo-title">پارت بانک</h1>
        <span class="login__logo-subtitle">تجربه‌ای نوین در بانک داری</span>
      </div>
    </div>

    <div class="login__inputs">
      <!-- شماره همراه -->
      <label class="login__label" for="phone-number">شماره همراه</label>
      <input
        class="login__input"
        id="phone-number"
        v-model="phone"
        @input="phone = phone.replace(/[^0-9]/g, '')"
        placeholder="مثلا 09123456789"
        inputmode="numeric"
        maxlength="11"
        type="tel"
        aria-describedby="phone-error"
      />
      <p v-if="phoneError" id="phone-error" class="text-error">{{ phoneError }}</p>

      <!-- رمز عبور با دکمه چشم برای نمایش/مخفی -->
      <label class="login__label" for="password">رمز عبور</label>
      <div class="password-wrapper">
        <input
          class="login__input password"
          id="password"
          v-model="password"
          :type="showPassword ? 'text' : 'password'"
          placeholder="رمز عبور خود را وارد کنید"
          aria-describedby="password-error"
        />

        <!-- دکمه چشم: آدرس آیکون از props گرفته می‌شود -->
        <button
          type="button"
          class="toggle-password"
          @click="togglePassword"
          :aria-pressed="showPassword"
          :title="showPassword ? 'مخفی کردن رمز' : 'نمایش رمز'"
        >
          <img :src="showPassword ? eyeOpen : eyeClosed" alt="" />
        </button>
      </div>
      <p v-if="passwordError" id="password-error" class="text-error">{{ passwordError }}</p>

      <button class="login__button" :disabled="loading" type="submit" aria-busy="loading">
        {{ loading ? 'در حال ارسال...' : 'ارسال' }}
      </button>

      <p v-if="error" class="text-error mt-2">{{ error }}</p>
    </div>

    <div class="login__support">
      <span class="login__support-label">پشتیبانی:</span>
      <span class="login__support-number">۰۲۱-۱۲۳۴۵۶۷۸</span>
    </div>
  </form>
</template>

<script setup>
import { ref } from 'vue'
import { login } from '@/services/authService'
import { saveAuth } from '@/utils/auth'

import eyeOpenDefault from '@/assets/icons/Outline/Security/Eye.svg'
import eyeClosedDefault from '@/assets/icons/Outline/Security/Eye Closed.svg'
import router from '@/router'

const props = defineProps({
  eyeOpen: { type: String, default: eyeOpenDefault },
  eyeClosed: { type: String, default: eyeClosedDefault },
})

const eyeOpen = props.eyeOpen
const eyeClosed = props.eyeClosed

const phone = ref('')
const password = ref('')
const loading = ref(false)
const error = ref(null)
const phoneError = ref(null)
const passwordError = ref(null)
const showPassword = ref(false)

function validatePhone(value) {
  const regex = /^09\d{9}$/
  return regex.test(value)
}

function validatePassword(value) {
  const regex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/
  return regex.test(value)
}

function validateForm() {
  phoneError.value = null
  passwordError.value = null
  error.value = null

  let valid = true

  if (!validatePhone(phone.value)) {
    phoneError.value = 'شماره تلفن معتبر نیست (باید با 09 شروع شده و 11 رقم باشد)'
    valid = false
  }

  if (!validatePassword(password.value)) {
    passwordError.value = 'رمز عبور باید حداقل ۶ کاراکتر باشد و شامل حروف و اعداد شود'
    valid = false
  }

  return valid
}

function togglePassword() {
  showPassword.value = !showPassword.value
}

async function handleLogin() {

  if (!validateForm()) {
    return
  }

  loading.value = true
  error.value = null

  try {
   
    const response = await login(phone.value, password.value)


    const token = response?.data?.token
    const user = response?.data?.user

    if (!token || !user) throw new Error('اطلاعات لاگین ناقص است')

    saveAuth(user, token)
    router.replace({ path: '/dashboard' })
  } catch (err) {
    error.value = err?.message || 'خطا در ورود — دوباره تلاش کنید'
  } finally {
    loading.value = false
  }
}

</script>

<style lang="scss" scoped>
.login {
  width: 50%;
  @include flex-column($justify: center, $align: center);
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
      @include text-style($font-size-xxl, $family: $font-family-bold);
    }
    &-subtitle {
      font-size: $font-size-md;
    }
  }
  &__inputs {
    display: flex;
    flex-direction: column;
    margin-top: 103.5px;
    width: 354px;
    height: auto;
  }

  &__label {
    width: 100%;
    height: 22px;
    font-size: $font-size-md;
    margin-bottom: 4px;
  }

  &__input {
    width: 100%;
    height: 48px;
    background-color: $surface-alt;
    border: $border-none;
    border-radius: $radius-sm;
    margin-bottom: 12px;
    box-sizing: border-box;
    padding: 0px 8px;
    outline: none;
    font-size: $font-size-base;
    direction: rtl;

    &::placeholder {
      color: $text-placeholder;
    }
  }

  .password-wrapper .login__input {
    padding-left: 44px;
  }

  &__button {
    font-family: $font-family-bold;
    font-size: $font-size-md;
    width: 100%;
    height: 48px;
    background-color: $primary;
    border-radius: $radius-md;
    margin-top: 12px;
    border: $border-none;
    color: $color-white;
    cursor: pointer;
    display: inline-flex;
    align-items: center;
    justify-content: center;

    &:disabled {
      opacity: 0.6;
      cursor: not-allowed;
    }
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
      font-weight: $font-weight-bold;
    }
  }
}

.password-wrapper {
  position: relative;

  .toggle-password {
    position: absolute;
    left: 8px;
    top: 12px;
    width: 24px;
    height: 24px;
    background: transparent;
    cursor: pointer;
  }
}

.text-error {
  color: $error;
  font-size: $font-size-sm;
  margin-top: 4px;
}
</style>
