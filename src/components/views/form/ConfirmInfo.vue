<script setup>
import BaseButton from '@/components/baseComponents/BaseButton.vue'
</script>
<template>
  <form action="">
    <div class="form-title">
      <span>تایید اطلاعات</span>
    </div>
    <hr />
    <div class="form-fields">
      <div class="form-fields-text">
        <div><span class="title">نام:</span><span class="value">بهنام</span></div>
        <div><span class="title">نام خانوادگی:</span><span class="value">میریزدی</span></div>
        <div><span class="title">کد پستی</span><span class="value">56516112</span></div>
      </div>
      <div class="form-fields-extra">
        <span class="title">محل سکونت</span>
        <p class="address">بولوار ملک آباد ، خیام جنوبی ۱۳ ، گلایل ۱۰ ، پلاک۱۲۳ ، واحد۱</p>
      </div>
    </div>
    <div class="form-upload-image__actions">
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
        :title="'افتتاح حساب'"
        :width="'209px'"
        :height="'48px'"
        :bgColor="'#4152a0'"
        :color="'#ffffff'"
        :btn-type="'submit'"
      />
    </div>
  </form>
</template>
<style scoped>
form {
  width: 1400px;
  height: 412px;
  padding: 10px 40px;
  background-color: #ffffff;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 40px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
}
.form-title {
  width: 100%;
  height: 28px;
  text-align: center;
  color: #3c4351;
  font-size: 20px;
  font-weight: 700;
  font-family: 'peyda-bold';
}
form hr {
  width: 100%;
  height: 1px;
  border: 0;
  background-color: #e2edff;
}
.form-fields {
  height: 136px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
}
.form-fields-text {
  width: 690px;
  height: 48px;
  display: flex;
  justify-content: space-between;
}
.form-fields-text div {
  width: 150px;
  height: 100%;
  display: flex;
  flex-direction: column;
  font-size: 16px;
}
.form-fields-extra {
  width: 370px;
  height: 48px;
}
.title {
  font-family: 'peyda-regular';
  margin-bottom: 4px;
  color: #8999b9;
}
.value {
  font-family: 'peyda-semiBold';
  color: #3c4351;
}
.form-upload-image__actions {
  display: flex;
  justify-content: end;
  gap: 16px;
  margin: 0px;
  width: 100%;
  height: 48px;
}
.btn-primary {
  font-family: 'peyda-bold';
  font-size: 16px;
  border: 0;
  font-weight: 700;
  padding: 0px;
  border-radius: 8px;
}
</style>
