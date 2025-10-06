<script setup>
import { reactive, ref } from 'vue'
import { useRouter } from 'vue-router'
import { useFormStore } from '@/stores/formStore'
import BaseInput from '@/components/common/BaseInput.vue'
import BaseButton from '@/components/common/BaseButton.vue'

const errormessage = reactive({
  Name: null,
  Family: null,
  Postal: null,
  Address: null,
  Form: null,
})

const router = useRouter()
const formStore = useFormStore()

const step1Data = ref({
  name: formStore.formData.step1.name,
  family: formStore.formData.step1.family,
  postalCode: formStore.formData.step1.postalCode,
  address: formStore.formData.step1.address,
})

function validatePersianText(val, type) {
  const cleanVal = val.trim()
  let errorMsg = null
  if (cleanVal && !/^[\u0600-\u06FF\s]+$/.test(cleanVal)) {
    errorMsg = 'فقط حروف فارسی مجاز است'
  }
  if (type === 'name') {
    errormessage.Name = errorMsg
  } else if (type === 'family') {
    errormessage.Family = errorMsg
  } else if (type === 'address') {
    errormessage.Address = errorMsg
  }
}

function validatePostalCode(val) {
  const cleanVal = val.trim()
  let errorMsg = null
  if (cleanVal) {
    if (!/^[0-9]+$/.test(cleanVal)) {
      errorMsg = 'فقط اعداد مجاز است'
    } else if (!cleanVal.startsWith('91')) {
      errorMsg = 'کد پستی باید با 91 شروع شود'
    } else if (cleanVal.length !== 9) {
      errorMsg = 'کد پستی باید 9 رقمی باشد'
    }
  }
  errormessage.Postal = errorMsg
}

function saveData() {
  if (
    !step1Data.value.name ||
    !step1Data.value.family ||
    !step1Data.value.postalCode ||
    !step1Data.value.address
  ) {
    errormessage.Form = 'لطفاً همه فیلدها را به درستی پر کنید'
    return
  }
  formStore.updateStepData('step1', step1Data.value)
  router.push('/form/uploadimage')
}

function goBack() {
  router.push('/dashboard')
}
</script>

<template>
  <form class="form-personal-info" @submit.prevent>
    <h2 class="form-personal-info__title">اطلاعات فردی</h2>
    <div class="form-personal-info__group">
      <BaseInput
        id="name"
        class="form-personal-info__field"
        label="نام"
        :hasBorder="true"
        placeholder="نام فارسی"
        v-model="step1Data.name"
        :error="errormessage.Name"
        @update:modelValue="(val) => validatePersianText(val, 'name')"
      />

      <BaseInput
        id="family"
        class="form-personal-info__field"
        label="نام خانوادگی"
        :hasBorder="true"
        placeholder="نام خانوادگی به صورت کامل"
        v-model="step1Data.family"
        :error="errormessage.Family"
        @update:modelValue="(val) => validatePersianText(val, 'family')"
      />

      <BaseInput
        id="postal"
        class="form-personal-info__field"
        label="کد پستی"
        :hasBorder="true"
        placeholder="برای مثال 919542687"
        v-model="step1Data.postalCode"
        :error="errormessage.Postal"
        @update:modelValue="validatePostalCode"
      />
    </div>

    <div class="form-personal-info__field form-personal-info__field--textarea">
      <label class="form-personal-info__label">محل سکونت</label>
      <textarea
        class="form-personal-info__textarea"
        placeholder="برای مثال : مشهد , بلوار هاشمیه"
        v-model="step1Data.address"
        @input="validatePersianText($event.target.value, 'address')"
      ></textarea>
      <span class="form-personal-info__error" v-if="errormessage.Address">
        {{ errormessage.Address }}
      </span>
    </div>

    <div class="form-personal-info__actions">

      <BaseButton
        :title="'قبلی'"
        :width="'209px'"
        :height="'48px'"
        :bgColor="'#eceef6'"
        :color="'#3c4351'"
        :btn-type="'button'"
        @click="goBack"
      />

      <BaseButton
        :title="'ثبت و ادامه'"
        :width="'209px'"
        :height="'48px'"
        :bgColor="'#4152a0'"
        :btn-type="'submit'"
        @click="saveData"
      />
    </div>

    <span class="form-personal-info__form-error" v-if="errormessage.Form">
      {{ errormessage.Form }}
    </span>
  </form>
</template>

<style scoped lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.form-personal-info {
  background: #fff;
  border-radius: 12px;
  width: 1400px;
  height: 542px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
  padding: 40px;
  gap: 40px;
  display: flex;
  flex-direction: column;

  &__form-error {
    color: red;
    font-size: 12px;
    margin-top: 8px;
    position: relative;
    top: -50px;
  }

  &__title {
    text-align: center;
    width: 100%;
    height: 28px;
    color: #3c4351;
    font-family: 'peyda-bold';
    font-size: 20px;
    font-weight: 700;
    border-bottom: solid #e2edff 1px;
    padding-bottom: 65px;
  }

  &__group {
    display: flex;
    gap: 32px;
    width: 100%;
    height: 72px;
    justify-content: space-between;
    padding: 0;
  }

  &__field {
    display: flex;
    flex-direction: column;
    flex: 1;
  }

  &__label {
    font-size: 14px;
    color: #8999b9;
    padding: 0 8px;
    margin-bottom: 8px;
  }

  &__input,
  &__textarea {
    padding: 14px 8px;
    border: 1px solid #ddd;
    border-radius: 8px;
    font-size: 1rem;
    background-color: #f9fafb;
    font-family: 'peyda-regular';
    outline: none;
  }
  ::placeholder {
    color: #c3c5c9;
  }

  &__input {
    height: 40px;
    box-sizing: border-box;
  }

  &__textarea {
    height: 120px;
    resize: none;
  }

  &__error {
    color: red;
    font-size: 12px;
    margin-top: 8px;
  }

  &__actions {
    display: flex;
    justify-content: space-between;
    width: 434px;
    height: 48px;
    margin-right: 886px;
  }

  &__button {
    width: 209px;
    height: 48px;
    padding: 10px 69px;
    font-family: 'peyda-bold';
    font-size: 16px;
    border: 0;
    font-weight: 700;
    color: #3c4351;
    background-color: #eceef6;
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
