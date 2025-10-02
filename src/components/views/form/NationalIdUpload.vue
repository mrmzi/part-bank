<script setup></script>
<template>
  <form class="upload-card-form">
    <h2 class="upload-card-form__title">تصویر کارت ملی</h2>
    <div class="upload-card-form__images">
      <!-- کارت آپلود -->
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

      <!-- کارت آپلود دوم -->
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

<style scoped lang="scss">
.upload-card-form {
  background: #ffffff;
  border-radius: 12px;
  width: 1400px;
  height: 508px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
  padding: 40px 40px 0px 40px;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 40px;
  box-sizing: border-box;

  &__title {
    text-align: center;
    width: 100%;
    height: 28px;
    color: #3c4351;
    font-family: 'peyda-bold';
    font-size: 20px;
    font-weight: 700;
    border-bottom: solid #e2edff 1px;
    padding-bottom: 40px;
  }

  &__images {
    width: 100%;
    height: 232px;
    padding: 0 319.5px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 40px;
  }

  &__actions {
    width: 100%;
    display: flex;
    justify-content: end;
    gap: 16px;
    height: 48px;
  }

  &__button {
    width: 209px;
    height: 48px;
    font-family: 'peyda-bold';
    font-size: 16px;
    border: 0;
    font-weight: 700;
    color: #3c4351;
    background-color: #eceef6;
    border-radius: 8px;

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

.card-upload {
  &__box {
    width: 320px;
    height: 180px;
    display: flex;
    flex-direction: column;
    row-gap: 8px;
    cursor: pointer;
    position: relative;
    transition: border-color 0.3s ease;
    background-color: #f9fafb;
    border-radius: 12px 12px 0 0;
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
    font-family: 'peyda-semiBold';
    font-size: 14px;
    font-weight: $font-weight-600;
    color: $text-secondary;
    line-height: 20px;
    letter-spacing: 20px;

    span {
      color: $primary;
    }
  }

  &__footer {
    box-sizing: border-box;
    width: 324px;
    height: 52px;
    display: flex;
    justify-content: space-between;
    padding: 16px 12px;
    align-items: center;
    position: relative;
    background-color: #f9fafb;
    border-radius: 0 0 12px 12px;

    &-text {
      font-size: 14px;
      font-family: 'peyda-regular';
      font-weight: 400;
      color: $text-primary;
    }

    &-button {
      height: 20px;
      width: 20px;
      border: 0;
      background-color: transparent;
      cursor: pointer;
    }
  }

  &__menu {
    width: 93px;
    height: 72px;
    background-color: #ffffff;
    bottom: 12px;
    position: absolute;
    left: 16px;
    padding: 8px 12px;
    border-radius: 8px;

    &-item {
      width: 69px;
      height: 20px;
      font-size: 14px;
      font-family: 'peyda-regular';
      display: flex;
      align-items: center;
      gap: 8px;

      img {
        width: 20px;
        height: 20px;
      }
    }

    hr {
      margin: 8px 0;
      border: 0;
      height: 1px;
      background-color: #e2edff;
    }
  }
}

</style>
