<script setup></script>
<template>
  <form class="form-personal-info">
      <h2 class="form-personal-info__title">اطلاعات فردی</h2>

      <div class="form-personal-info__group">
        <div class="form-personal-info__field text-field">
          <label class="form-personal-info__label name-field">نام</label>
          <input
            type="text"
            class="form-personal-info__input form-personal-info-name"
            placeholder="نام فارسی"
          />
        </div>

        <div class="form-personal-info__field">
          <label class="form-personal-info__label text-fields">نام خانوادگی</label>
          <input
            type="text"
            class="form-personal-info__input"
            placeholder="نام خانوادگی به صورت کامل"
          />
        </div>

        <div class="form-personal-info__field">
          <label class="form-personal-info__label text-fields">کدپستی</label>
          <input
            type="text"
            class="form-personal-info__input"
            value="۹۱۲۵۶۸۷۴۳۳"
          />
        </div>
      </div>

      <div class="form-personal-info__field">
        <label class="form-personal-info__label text__area-label">محل سکونت</label>
        <textarea class="form-personal-info__textarea">
بلوار ملک‌آباد، خیابان جنوبی ۱۳، گلایل ۱۰، پلاک ۱۰۳، واحد ۱</textarea
        >
      </div>

      <div class="form-personal-info__actions">
        <button
          type="button"
          class="btn-primary form-personal-info__button--secondary"
        >
          قبلی
        </button>
        <button
          type="submit"
          class="btn-primary form-personal-info__button--primary"
        >
          ثبت و ادامه
        </button>
      </div>
    </form>
</template>
<style>
     .form-personal-info {
        background: #fff;
        border-radius: 12px;
        width: 1400px;
        height: 542px;
        box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
        padding: 40px;
      }

      .form-personal-info__title {
        text-align: center;
        width: 100%;
        height: 28px;
        color: #3c4351;
        font-family: "peyda-bold";
        font-size: 20px;
        font-weight: 700;
        margin-bottom: 81px;
        border-bottom: solid #e2edff 1px;
        padding-bottom: 40px;
      }

      .form-personal-info__group {
        display: flex;
        gap: 32px;
        margin-bottom: 40px;
        width: 100%;
        height: 72px;
        justify-content: space-between;
        padding: 0;
      }

      .form-personal-info__field {
        display: flex;
        flex-direction: column;
        flex: 1;
      }

      .form-personal-info__label {
        font-size: 16px;
        color: #666;
        font-size: 14px;
        color: #8999b9;
        padding: 0 8px;
        /* margin-bottom: 8px; */
      }

      .form-personal-info__input,
      .form-personal-info__textarea {
        padding: 14px 8px;
        border: 1px solid #ddd;
        border-radius: 8px;
        font-size: 1rem;
        background-color: #F9FAFB;
      }
      .form-personal-info__input {
        height: 40px;
        width: 418.67px;
      }
      .form-personal-info-name {
        height: 48px;
      }

      .form-personal-info__textarea {
        height: 120px;
        resize: none;
      }

 
      .btn-primary {
        width: 209px;
        height: 48px;
        padding: 10px 69px;
        font-family: "peyda-bold";
        font-size: 16px;
        border: 0;
        font-weight: 700;
        color: #3c4351;
        background-color: #eceef6;
        border-radius: 8px;
      }

      .form-personal-info__button--primary {
        background-color: #3f51b5;
        color: white;
      }

      .form-personal-info__button--secondary {
        background-color: #f2f2f2;
        color: #333;
      }
      .text-fields {
        font-size: 14px;
        margin-bottom: 10px;
      }
      .name-field{
        margin-bottom: 4px;
      }
      .text__area-label{
        margin-bottom: 8px;
      }
</style>