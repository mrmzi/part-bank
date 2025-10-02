<template>
  <form class="form-confirmation" action="">
    <div class="form-confirmation__title">
      <span>تایید اطلاعات</span>
    </div>

    <hr class="form-confirmation__divider" />

    <div class="form-confirmation__fields">
      <div class="form-confirmation__fields-text">
        <div class="form-confirmation__fields-text-item">
          <span class="form-confirmation__title-label">نام:</span>
          <span class="form-confirmation__value">بهنام</span>
        </div>
        <div class="form-confirmation__fields-text-item">
          <span class="form-confirmation__title-label">نام خانوادگی:</span>
          <span class="form-confirmation__value">میریزدی</span>
        </div>
        <div class="form-confirmation__fields-text-item">
          <span class="form-confirmation__title-label">کد پستی:</span>
          <span class="form-confirmation__value">56516112</span>
        </div>
      </div>

      <div class="form-confirmation__fields-extra">
        <span class="form-confirmation__title-label">محل سکونت:</span>
        <p class="form-confirmation__address">
          بولوار ملک آباد ، خیام جنوبی ۱۳ ، گلایل ۱۰ ، پلاک۱۲۳ ، واحد۱
        </p>
      </div>
    </div>

    <div class="form-confirmation__actions">
      <BaseButton
        :class="'form-confirmation__btn form-confirmation__btn--secondary'"
        :title="'قبلی'"
        :width="'209px'"
        :height="'48px'"
        :bg-color="'#eceef6'"
      />

      <BaseButton
        :class="'form-confirmation__btn form-confirmation__btn--primary'"
        :title="'افتتاح حساب'"
        :width="'209px'"
        :height="'48px'"
        :btn-type="'submit'"
        :bg-color="'#4152a0'"
      />
    </div>
  </form>
</template>

<script setup>
import BaseButton from '@/components/baseComponents/BaseButton.vue'
</script>

<style scoped lang="scss">
.form-confirmation {
  width: 1400px;
  height: 412px;
  padding: 0 40px;
  background-color: $color-white;
  border-radius: $radius-lg;
  @include flex-column($gap-xxl, center, center);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);

  &__title {
    width: 100%;
    height: 28px;
    text-align: center;
    @include text-style($font-size-xl, $font-weight-700, $text-primary, $font-family-bold);
  }

  &__divider {
    width: 100%;
    height: 1px;
    border: $border-none;
    background-color: $border-color;
  }

  &__fields {
    height: 136px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    flex-direction: column;

    &-text {
      width: 690px;
      height: 48px;
      display: flex;
      justify-content: space-between;

      &-item {
        width: 150px;
        height: 100%;
        @include flex-column($gap-xs, flex-start, flex-start);
        @include text-style($font-size-md, $font-weight-600, $text-primary, $font-family-semi-bold);
      }
    }

    &-extra {
      width: 373px;
      height: 48px;
      @include flex-column($gap-xs, flex-start, flex-start);

      .form-confirmation__address {
        @include text-style($font-size-md, $font-weight-600, $text-primary, $font-family-semi-bold);
      }
    }
  }

  &__title-label {
    @include text-style($font-size-md, $font-weight-400, $text-secondary, $font-family-regular);
  }

  &__value {
    @include text-style($font-size-md, $font-weight-600, $text-primary, $font-family-semi-bold);
  }

  &__actions {
    @include flex-between;
    justify-content: flex-end;
    gap: 16px;
    margin: 0;
    width: 100%;
    height: $button-height;
  }

  &__btn {
    font-family: $font-family-bold;
    font-size: $font-size-md;
    border: $border-none;
    font-weight: $font-weight-700;
    padding: 0;
    border-radius: $radius-md;

    &--secondary {
      background-color: $control-bg;
      color: $text-primary;
    }

    &--primary {
      background-color: $primary;
      color: $on-primary;
    }
  }
}
</style>

