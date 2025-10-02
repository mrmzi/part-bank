<script setup>
import router from '@/router'
import { useFormStore } from '@/stores/formStore'
const formStore = useFormStore()
const step1 = formStore.formData.step1
const submitForm = formStore.submitForm

function goBack() {
  router.push('/form/uploadimage')
}
</script>
<template>
  <form @submit.prevent="submitForm" class="confirm-info">
    <div class="confirm-info__title">
      <span>تایید اطلاعات</span>
    </div>
    <hr class="confirm-info__line" />
    <div class="confirm-info__fields">
      <div class="confirm-info__fields-text">
        <div class="confirm-info__field">
          <span class="confirm-info__field-title">نام:</span>
          <span class="confirm-info__field-value">{{ step1.name }}</span>
        </div>
        <div class="confirm-info__field">
          <span class="confirm-info__field-title">نام خانوادگی:</span>
          <span class="confirm-info__field-value">{{ step1.family }}</span>
        </div>
        <div class="confirm-info__field">
          <span class="confirm-info__field-title">کد پستی:</span>
          <span class="confirm-info__field-value">{{ step1.postalCode }}</span>
        </div>
      </div>

      <div class="confirm-info__fields-extra">
        <span class="confirm-info__extra-title">محل سکونت</span>
        <p class="confirm-info__extra-value">{{ step1.address }}</p>
      </div>
    </div>

    <div class="confirm-info__actions">
      <button
        @click="goBack"
        type="button"
        class="confirm-info__button confirm-info__button--secondary"
      >
        قبلی
      </button>
      <button type="submit" class="confirm-info__button confirm-info__button--primary">
        افتتاح حساب
      </button>
    </div>
  </form>
</template>

<style lang="scss" scoped>
* {
  margin: 0;
  padding: 0%;
  box-sizing: border-box;
}
.confirm-info {
  width: 1400px;
  height: 412px;
  padding: 40px;
  background-color: #ffffff;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  gap: 40px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);

  &__title {
    width: 100%;
    height: 28px;
    text-align: center;
    color: #3c4351;
    font-size: 20px;
    font-weight: 700;
    font-family: 'peyda-bold';
  }

  &__line {
    width: 100%;
    height: 1px;
    border: 0;
    background-color: #e2edff;
  }

  &__fields {
    height: 136px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
  }

  &__fields-text {
    width: 690px;
    height: 48px;
    display: flex;
    justify-content: space-between;
  }

  &__field {
    width: 150px;
    height: 100%;
    display: flex;
    flex-direction: column;
    font-size: 16px;
  }

  &__field-title {
    font-family: 'peyda-regular';
    color: #8999b9;
    margin-bottom: 4px;
  }

  &__field-value {
    font-family: 'peyda-semiBold';
    color: #3c4351;
  }

  &__fields-extra {
    width: 370px;
    height: 48px;
  }

  &__extra-title {
    font-family: 'peyda-regular';
    color: #8999b9;
    margin-bottom: 4px;
  }

  &__extra-value {
    font-family: 'peyda-semiBold';
    color: #3c4351;
    margin-top: 4px;
  }

  &__actions {
    display: flex;
    justify-content: space-between;
    width: 434px;
    height: 48px;
    margin-right: 896px;
  }

  &__button {
    width: 209px;
    height: 48px;
    padding: 10px 63.5px;
    font-family: 'peyda-bold';
    font-size: 16px;
    border: 0;
    font-weight: 700;
    border-radius: 8px;
    cursor: pointer;
    &--primary {
      background-color: #3f51b5;
      color: white;
    }

    &--secondary {
      background-color: #f2f2f2;
      color: #333;
    }
  }
}
</style>
