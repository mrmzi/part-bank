<template>
  <form class="form-personal-info">
    <h2 class="form-personal-info__title">اطلاعات فردی</h2>

    <div class="form-personal-info__group">
      <div class="form-personal-info__field text-field">
        <label class="form-personal-info__label name-field">نام</label>
        <BaseInput
          :input-class="'form-personal-info__input form-personal-info-name'"
          :input-width="'100%'"
          :input-height="'40px'"
          :has-border="true"
          :placeholder="'نام فارسی'"
          :input-type="'text'"
        />
      </div>

      <div class="form-personal-info__field">
        <label class="form-personal-info__label text-fields">نام خانوادگی</label>
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
        <label class="form-personal-info__label text-fields">کدپستی</label>
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
      <label class="form-personal-info__label text__area-label">محل سکونت</label>
      <textarea class="form-personal-info__textarea">
بلوار ملک‌آباد، خیابان جنوبی ۱۳، گلایل ۱۰، پلاک ۱۰۳، واحد ۱</textarea
      >
    </div>

    <div class="form-personal-info__actions">
      <BaseButton
        :class="'btn-primary form-personal-info__button--secondary'"
        :title="'قبلی'"
        :width="'209px'"
        :height="'48px'"
        :bgColor="'#eceef6'"
        :color="'#3c4351'"
      />

      <BaseButton
        :class="'btn-primary form-personal-info__button--primary'"
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
  background: #fff;
  border-radius: 12px;
  width: 1400px;
  height: 542px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
  padding: 40px 40px 5px 40px;
  display: flex;
  flex-direction: column;
  gap: 45px;
}

.form-personal-info__title {
  text-align: center;
  width: 100%;
  height: 28px;
  color: #3c4351;
  font-family: 'peyda-bold';
  font-size: 20px;
  font-weight: 800;
  border-bottom: solid #e2edff 1px;
  padding-bottom: 40px;
}

.form-personal-info__group {
  display: flex;
  gap: 32px;
  width: 100%;
  height: 72px;
  justify-content: space-between;
  padding: 0;
}

.form-personal-info__field {
  display: flex;
  flex-direction: column;
  width: 100%;
}

.form-personal-info__label {
  color: #666;
  font-size: 14px;
  font-weight: $font-weight-600;
  color: #8999b9;
  padding: 0 8px;
}

.form-personal-info__input,
.form-personal-info__textarea {
  padding: 16px 8px;
  border: 1px solid #ddd;
  border-radius: 8px;
  font-size: 1rem;
  background-color: #f9fafb;
}
.form-personal-info__input {
  height: 40px;
  // width: 418.67px;
}
.form-personal-info-name {
  height: 48px;
}

.form-personal-info__textarea {
  height: 120px;
  resize: none;
}
.form-personal-info__actions {
  display: flex;
  justify-content: end;
  align-items: center;
  gap: 16px;
}
.btn-primary {
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
}


.form-personal-info__button--secondary {
  font-weight: 700;
}
.text-fields {
  font-size: 14px;
  margin-bottom: 10px;
}
.name-field {
  margin-bottom: 4px;
}
.text__area-label {
  margin-bottom: 8px;
}
</style>
