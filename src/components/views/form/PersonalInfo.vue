<template>
  <form class="form-personal-info">
    <h2 class="form-personal-info__title">اطلاعات فردی</h2>

    <div class="form-personal-info__group">
      <div class="form-personal-info__field">
        <label class="form-personal-info__label">نام</label>
        <BaseInput
          :input-class="'form-personal-info__input form-personal-info__input-name'"
          :input-width="'100%'"
          :input-height="'40px'"
          :has-border="true"
          :placeholder="'نام فارسی'"
          :input-type="'text'"
        />
      </div>

      <div class="form-personal-info__field">
        <label class="form-personal-info__label">نام خانوادگی</label>
        <BaseInput
          :input-class="'form-personal-info__input'"
          :input-width="'100%'"
          :input-height="'40px'"
          :has-border="true"
          :placeholder="'نام خانوادگی به صورت کامل'"
          :input-type="'text'"
        />
      </div>

      <div class="form-personal-info__field">
        <label class="form-personal-info__label">کدپستی</label>
        <BaseInput
          :input-class="'form-personal-info__input'"
          :input-width="'100%'"
          :input-height="'40px'"
          :has-border="true"
          :placeholder="'کد ده رقمی پستی'"
          :input-type="'text'"
        />
      </div>
    </div>

    <div class="form-personal-info__field">
      <label class="form-personal-info__label">محل سکونت</label>
      <textarea class="form-personal-info__textarea">
بلوار ملک‌آباد، خیابان جنوبی ۱۳، گلایل ۱۰، پلاک ۱۰۳، واحد ۱
      </textarea>
    </div>

    <div class="form-personal-info__actions">
      <BaseButton
        :class="'form-personal-info__button form-personal-info__button-secondary'"
        :title="'قبلی'"
        :width="'209px'"
        :height="'48px'"
        :bgColor="'#eceef6'"
        :color="'#3c4351'"
      />

      <BaseButton
        :class="'form-personal-info__button form-personal-info__button-primary'"
        :title="'ثبت و ادامه'"
        :width="'209px'"
        :height="'48px'"
        :bgColor="'#4152a0'"
        :color="'#ffffff'"
        :btn-type="'submit'"
      />
    </div>
  </form>
</template>

<script setup>
import BaseButton from '@/components/baseComponents/BaseButton.vue'
import BaseInput from '@/components/baseComponents/BaseInput.vue'
</script>

<style scoped lang="scss">
.form-personal-info {
  background: $color-white;
  border-radius: $radius-lg;
  width: 1400px;
  height: 542px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
  padding: 40px 40px 10px 40px;
  @include flex-column($gap: 45px);

  &__title {
    text-align: center;
    width: 100%;
    height: 28px;
    @include text-style($size: $font-size-xl, $weight: $font-weight-800, $color: $text-primary, $family: $font-family-bold);
    border-bottom: 1px solid $border-color;
    padding-bottom: 40px;
  }

  &__group {
    @include flex-between;
    gap: 32px;
    width: 100%;
    height: 72px;
    padding: 0;
  }

  &__field {
    display: flex;
    flex-direction: column;
    row-gap: 8px;
    width: 100%;
  }

  &__label {
    @include text-style($size: $font-size-base , $weight: $font-weight-600, $color: $text-secondary);
    padding: 0 8px;
  }

  &__input,
  &__textarea {
    padding: 16px 8px;
    border: 1px solid #dddddd;
    border-radius: $radius-md;
    font-size: 1rem;
    background-color: $surface-alt;
  }

  &__input {
    height: 40px;
  }

  &__input-name {
    height: 48px;
  }

  &__textarea {
    height: 120px;
    resize: none;
  }

  &__actions {
    width: 100%;
    display: flex;
    justify-content: end;
    align-items: center;
    gap: 16px;
  }

  &__button {
     @include text-style($size: $font-size-md , $weight: $font-weight-700, $family: $font-family-bold);
    width: 209px;
    height: 48px;
    border: 0;
    border-radius: 8px;
  }

  &__button-secondary {
    color: $text-primary;
    background-color: $control-bg;
  }

  &__button-primary {
    color: $color-white;
    background-color: $primary;
  }
}
</style>
