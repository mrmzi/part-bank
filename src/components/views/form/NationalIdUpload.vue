<script setup></script>
<template>
 <form class="form-upload-card">
      <h2 class="form-upload-card__title">تصویر کارت ملی</h2>
      <div class="uploade-images">
        <div class="upload">
          <label class="card-upload__box">
            <input
              type="file"
              class="card-upload__input"
              accept="image/*"
              onchange="previewImage(event, 'back')"
            />
            <img id="preview-back" class="card-upload__preview" />

            <img class="ss" src="./Vector (1).png" alt="" />
            <p>تصویر را بکشید و اینجا رها کنید یا<span>کلیک کنید</span></p>
          </label>
          <div class="extra">
            <span>تصویر روی کارت ملی</span>
            <button>
              <img src="./more.png" alt="" />
              <div id="menu-back" class="card-upload__menu">
                <div class="card-upload__menu-item" onclick="editImage('back')">
                  <img src="" alt="" />
                  ویرایش
                </div>
                <hr />
                <div
                  class="card-upload__menu-item"
                  onclick="removeImage('back')"
                >
                  <img src="" alt="" />
                  حذف
                </div>
              </div>
            </button>
          </div>
        </div>

        <div class="upload">
          <label class="card-upload__box">
            <input
              type="file"
              class="card-upload__input"
              accept="image/*"
              onchange="previewImage(event, 'back')"
            />
            <img id="preview-back" class="card-upload__preview" />

            <img class="ss" src="./Vector (1).png" alt="" />
            <p>تصویر را بکشید و اینجا رها کنید یا<span>کلیک کنید</span></p>
          </label>
          <div class="extra">
            <span>تصویر روی کارت ملی</span>
            <button>
              <img src="./more.png" alt="" />
              <div id="menu-back" class="card-upload__menu">
                <div class="card-upload__menu-item" onclick="editImage('back')">
                  <img src="" alt="" />
                  ویرایش
                </div>
                <hr />
                <div
                  class="card-upload__menu-item"
                  onclick="removeImage('back')"
                >
                  <img src="" alt="" />
                  حذف
                </div>
              </div>
            </button>
          </div>
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
    .form-upload-card {
        background: #ffffff;
        border-radius: 12px;
        width: 1400px;
        height: 508px;
        box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
        padding: 40px;
      }

      .form-upload-card__title {
        text-align: center;
        width: 100%;
        height: 28px;
        color: #3c4351;
        font-family: "peyda-bold";
        font-size: 20px;
        font-weight: 700;
        margin-bottom: 80px;
        border-bottom: solid #e2edff 1px;
        padding-bottom: 40px;
      }
      body {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 800px;
      }
      .uploade-images {
        width: 100%;
        height: 232px;
        margin-bottom: 40px;
        display: flex;
        padding: 0 319.5px;
        gap: 40px;
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
      .form-upload-image__actions {
        display: flex;
        margin-top: 40px;
        justify-self: end;
        justify-content: space-between;
        width: 434px;
        height: 48px;
        margin-right: 896px;
      }

      .form-personal-info__button--primary {
        background-color: #3f51b5;
        color: white;
      }

      .form-personal-info__button--secondary {
        background-color: #f2f2f2;
        color: #333;
      }
      .card-upload__box {
        width: 320px;
        height: 180px;
        display: flex;
        flex-direction: column;
        cursor: pointer;
        position: relative;
        transition: border-color 0.3s ease;
        background-color: #f9fafb;
        border-radius: 12px 12px 0 0;

        /* background-color: yellow; */
      }
      .top {
        /* border: 1px dashed #e2edff; */
        height: 180px;
        width: 320px;
        /* background-color: #333; */
      }
      .card-upload__input {
        display: none;
      }
      .extra {
        width: 320px;
        height: 52px;
        display: flex;
        justify-content: space-between;
        padding: 16px 12px;
        align-items: center;
        position: relative;
        background-color: #f9fafb;
        border-radius: 0 0 12px 12px;
      }
      .extra span {
        width: 112px;
        height: 100%;
        font-size: 14px;
        font-family: "peyda-regular";
      }
      .extra button {
        height: 20px;
        width: 20px;
        border: 0;
        background-color: transparent;
        cursor: pointer;
      }
      /* .ss{
        position: absolute;
      } */
      label .ss {
        width: 68px;
        height: 50.54;
        margin: 40.73px 126px 8px 126px;
      }
      label p {
        width: 175px;
        height: 40px;
        text-align: center;
        margin: 0 72.5px 40.73px 72.5px;
        font-family: "peyda-semiBold";
        font-size: 14px;
      }
      label p span {
        color: #4152a0;
      }
      .card-upload__menu {
        width: 93px;
        height: 72px;
        background-color: #ffffff;
        bottom: 12px;
        position: absolute;
        left: 16px;
        padding: 8px 12px;
        border-radius: 8px;
      }
      .card-upload__menu-item {
        width: 69px;
        height: 20px;
        font-size: 14px;
        font-family: "peyda-regular";
        display: flex;
        align-items: center;
        gap: 8px;
      }
      .card-upload__menu-item img {
        width: 20px;
        height: 20px;
      }
      .card-upload__menu hr {
        margin: 8px 0;
        border: 0;
        height: 1px;
        background-color: #e2edff;
      }
</style>