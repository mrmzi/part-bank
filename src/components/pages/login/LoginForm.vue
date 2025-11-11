<script setup>
import { ref } from 'vue'
import { login } from '@/services/authService'
import { saveAuth } from '@/utils/auth'

import eyeOpenDefault from '@/assets/icons/Outline/Security/Eye.svg'
import eyeClosedDefault from '@/assets/icons/Outline/Security/Eye Closed.svg'
import BaseButton from '@/components/base/BaseButton.vue'
import BaseInput from '@/components/base/BaseInput.vue'
import router from '@/router'
import { signUp } from '@/services/signUp'

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
    const res2 = await signUp(phone.value, password.value)
    const response = await login(phone.value, password.value)
    console.log(res2)

    const token = response?.data?.token
    const user = response?.data?.user

    if (!token || !user) throw new Error(response)

    saveAuth(user, token)
    router.replace({ path: '/dashboard' })
  } catch (err) {
    error.value = err?.message || 'خطا در ورود — دوباره تلاش کنید'
  } finally {
    loading.value = false
  }
}
</script>

<template>
  <form class="login-form" @submit.prevent="handleLogin">
    <div class="login-form__logo">
      <img
        class="login-form__logo-image"
        src="../../../assets/images/login/Logo.svg"
        alt="لوگو پارت بانک"
      />
      <div class="login-form__logo-header">
        <h1 class="login-form__logo-title">پارت بانک</h1>
        <span class="login-form__logo-subtitle">تجربه‌ای نوین در بانک داری</span>
      </div>
    </div>

    <div class="login-form__inputs">
      <div>
        <label class="login-form__label" for="phone-number">شماره همراه</label>

        <BaseInput
          :id="'phone-number'"
          :placeholder="'مثلا ۰۹۱۲۳۴۵۶۷۸۹'"
          :type="'tel'"
          maxlength="11"
          v-model="phone"
          inputmode="numeric"
          @input="phone = phone.replace(/[^0-9]/g, '')"
          aria-describedby="phone-error"
        />

        <p v-if="phoneError" id="phone-error" class="text-error">{{ phoneError }}</p>
      </div>

      <div>
        <label class="login-form__label" for="password">رمز عبور</label>
        <div class="password-wrapper">
          <BaseInput
            :id="'password'"
            :placeholder="'رمز عبور خود را وارد کنید'"
            :type="showPassword ? 'text' : 'password'"
            v-model="password"
            aria-describedby="password-error"
          />

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

        <p v-if="passwordError" id="password-error" class="text-error lastchild">
          {{ passwordError }}
        </p>
      </div>

      <BaseButton
        :is-disabled="loading"
        aria-busy="loading"
        :title="loading ? 'در حال ارسال...' : 'ورود'"
        :width="'100%'"
        :height="'48px'"
        :bgColor="'#4152a0'"
        :btn-type="'submit'"
        @click="handleLogin"
      />

      <p v-if="error" class="text-error">{{ error }}</p>
    </div>

    <div class="login-form__support">
      <span class="login-form__support-label">پشتیبانی:</span>
      <span class="login-form__support-number">۰۲۱-۱۲۳۴۵۶۷۸</span>
    </div>
  </form>
</template>

<style lang="scss" scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.login-form {
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
      @include text-style($font-size-xxl, $family: $font-family-bold);
    }
    &-subtitle {
      font-size: $font-size-md;
    }
  }
  &__inputs {
    display: flex;
    flex-direction: column;
    row-gap: 16px;
    margin-top: 103.5px;
    width: 354px;
    height: auto;
  }

  &__label {
    width: 100%;
    height: 22px;
    font-size: $font-size-md;
    // margin-bottom: 4px;
  }

  &__input {
    width: 354px;
    height: 48px;
    margin-top: 8px;
    background-color: $surface-alt;
    border-radius: $radius-sm;

    direction: rtl;
    outline: none;
    padding: 14px 8px;
  }

  .password-wrapper .login__input {
    padding-left: 44px;
  }

  &__support {
    width: 143px;
    height: 20px;
    display: flex;
    margin-bottom: 10px;
    margin-top: 229px;
    @include text-style($font-size-base, $font-weight-400, $text-primary, $font-family-regular);

    &-label {
      margin-left: 4px;
    }
  }
}

.password-wrapper {
  position: relative;
  margin-bottom: 38px;
  .toggle-password {
    position: absolute;
    left: 14px;
    top: 17px;
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
