<template>
  <form class="upload-card-form">
    <h2 class="upload-card-form__title">تصویر کارت ملی</h2>
    <div class="upload-card-form__images">

      <div class="card-upload">
        <label class="card-upload__box">
          <input
            type="file"
            class="card-upload__input"
            accept="image/*"
            onchange="previewImage(event, 'front')"
          />
          <img id="preview-front" class="card-upload__preview" />
          <img class="card-upload__icon" src="@/assets/icons/upload.svg" alt="upload icon" />
          <p class="card-upload__text">تصویر را بکشید و اینجا رها کنید یا<span>کلیک کنید</span></p>
        </label>
        <div class="card-upload__footer">
          <span class="card-upload__footer-text">تصویر روی کارت ملی</span>
          <button class="card-upload__footer-button">
            <img src="./more.png" alt="" />
          </button>
        </div>
      </div>

      <div class="card-upload">
        <label class="card-upload__box">
          <input
            type="file"
            class="card-upload__input"
            accept="image/*"
            onchange="previewImage(event, 'back')"
          />
          <img id="preview-back" class="card-upload__preview" />
          <img class="card-upload__icon" src="@/assets/icons/upload.svg" alt="upload icon" />
          <p class="card-upload__text">تصویر را بکشید و اینجا رها کنید یا<span>کلیک کنید</span></p>
        </label>
        <div class="card-upload__footer">
          <span class="card-upload__footer-text">تصویر پشت کارت ملی</span>
          <button class="card-upload__footer-button">
            <img src="./more.png" alt="" />
          </button>
        </div>
      </div>
    </div>

    <div class="upload-card-form__actions">
      <button
        type="button"
        class="btn-primary upload-card-form__button upload-card-form__button--secondary"
      >
        قبلی
      </button>
      <button
        type="submit"
        class="btn-primary upload-card-form__button upload-card-form__button--primary"
      >
        ثبت و ادامه
      </button>
    </div>
  </form>
</template>

<script setup></script>

<style scoped lang="scss">
.upload-card-form {
  background: $color-white;
  border-radius: $radius-lg;
  width: 1400px;
  height: 508px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
  padding: 40px 40px 0px 40px;
  @include flex-column($gap-xxl, flex-start, center);
  box-sizing: border-box;

  &__title {
    text-align: center;
    width: 100%;
    height: 28px;
    @include text-style($font-size-xl, $font-weight-700, $text-primary, $font-family-bold);
    border-bottom: $border-width solid $border-color;
    padding-bottom: 40px;
  }

  &__images {
    width: 100%;
    height: 232px;
    padding: 0 319.5px;
    @include flex-center($gap-xxl);
  }

  &__actions {
    width: 100%;
    display: flex;
    justify-content: flex-end;
    gap: 16px;
    height: $button-height;
  }

  &__button {
    width: 209px;
    height: $button-height;
    @include text-style($font-size-md, $font-weight-700, $text-primary, $font-family-bold);
    border: $border-none;
    border-radius: $radius-md;
    background-color: $control-bg;

    &--primary {
      background-color: $primary;
      color: $on-primary;
    }

    &--secondary {
      background-color: $surface-alt;
      color: $text-primary;
    }
  }
}

.card-upload {
  &__box {
    width: 320px;
    height: 180px;
    @include flex-column($gap-sm);
    cursor: pointer;
    position: relative;
    transition: border-color 0.3s ease;
    background-color: $surface-alt;
    border-radius: $radius-lg $radius-lg 0 0;
    border: 2px dashed $border-color;
    border-spacing: 7px;
  }

  &__input {
    display: none;
  }

  &__preview {
    max-width: 100%;
    max-height: 100%;
    object-fit: cover;
    display: none;
  }

  &__icon {
    width: 68px;
    height: 51px;
    margin: 40px auto 8px;
  }

  &__text {
    width: 175px;
    text-align: center;
    margin: 0 auto 40px;
    @include text-style($font-size-base, $font-weight-600, $text-secondary, $font-family-semi-bold);
    line-height: 20px;

    span {
      color: $primary;
    }
  }

  &__footer {
    box-sizing: border-box;
    width: 324px;
    height: 52px;
    @include flex-between;
    padding: 16px 12px;
    align-items: center;
    position: relative;
    background-color: $surface-alt;
    border-radius: 0 0 $radius-lg $radius-lg;

    &-text {
      @include text-style($font-size-base, $font-weight-400, $text-primary, $font-family-regular);
    }

    &-button {
      height: 20px;
      width: 20px;
      border: $border-none;
      background-color: transparent;
      cursor: pointer;
    }
  }

  &__menu {
    width: 93px;
    height: 72px;
    background-color: $color-white;
    bottom: 12px;
    position: absolute;
    left: 16px;
    padding: 8px 12px;
    border-radius: $radius-md;

    &-item {
      width: 69px;
      height: 20px;
      @include text-style($font-size-base, $font-weight-400, $text-primary, $font-family-regular);
      display: flex;
      align-items: center;
      gap: $gap-sm;

      img {
        width: 20px;
        height: 20px;
      }
    }

    hr {
      margin: 8px 0;
      border: $border-none;
      height: 1px;
      background-color: $border-color;
    }
  }
}
</style>

