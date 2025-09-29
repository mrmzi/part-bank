<script setup></script>
<template>
 <form action="">
      <div class="form-title">
        <span>تایید اطلاعات</span>
      </div>
      <hr />
      <div class="form-fields">
        <div class="form-fields-text">
          <div>
            <span class="title">نام:</span><span class="value">بهنام</span>
          </div>
          <div>
            <span class="title">نام خانوادگی:</span
            ><span class="value">میریزدی</span>
          </div>
          <div>
            <span class="title">کد پستی</span
            ><span class="value">56516112</span>
          </div>
        </div>
        <div class="form-fields-extra">
          <span class="title">محل سکونت</span>
          <p class="address">
            بولوار ملک آباد ، خیام جنوبی ۱۳ ، گلایل ۱۰ ، پلاک۱۲۳ ، واحد۱
          </p>
        </div>
      </div>
      <div class="form-upload-image__actions">
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
   form {
        width: 1400px;
        height: 412px;
        padding: 40px;
        background-color: #ffffff;
        border-radius: 12px;
        display: flex;
        flex-direction: column;
        gap: 40px;
        box-shadow: 1px 1px 10px #8999B9 ;
      }
      .form-title {
        width: 100%;
        height: 28px;
        text-align: center;
        color: #3C4351;
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
        font-family: "peyda-regular";
        margin-bottom: 4px;
        color:#8999B9 ;
      }
      .value {
        font-family: "peyda-semiBold";
        color: #3C4351;
      }
      .form-upload-image__actions {
        display: flex;
        justify-content: space-between;
        width: 434px;
        height: 48px;
        margin-right: 896px;
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
</style>