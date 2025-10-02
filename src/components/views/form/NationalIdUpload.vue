<script setup>
import { useFormStore } from '@/stores/formStore'
import { ref } from 'vue'
import { useRouter } from 'vue-router'

// state برای نگهداری تصاویر
const previewFront = ref(null)
const previewBack = ref(null)

// کنترل نمایش منوی more
const showMenu = ref({
  front: false,
  back: false,
})

// آپلود تصویر
const handleUpload = (event, type) => {
  const file = event.target.files[0]
  if (file) {
    const objectURL = URL.createObjectURL(file)
    if (type === 'front') {
      previewFront.value = objectURL
      step2Data.value.forwardimage = file
    } else {
      previewBack.value = objectURL
      step2Data.value.backwardimage = file
    }
  }
}

// حذف تصویر
const removeImage = (type) => {
  if (type === 'front') previewFront.value = null
  else previewBack.value = null
  showMenu.value[type] = false
}

// باز کردن input دوباره (ویرایش)
const editImage = (type) => {
  document.getElementById(`input-${type}`).click()
  showMenu.value[type] = false
}

// store image in pinia
const router = useRouter()
const formStore = useFormStore()

const errormessageForm = ref(null)

const step2Data = ref({
  forwardimage: '',
  backwardimage: '',
})

function saveData() {
  if (!step2Data.value.forwardimage || !step2Data.value.backwardimage) {
    errormessageForm.value = 'لطفاً همه فیلدها را به درستی پر کنید'
    return
  }
  formStore.updateStepData('step2', step2Data.value)

  setTimeout(() => {
    router.push('/form/confirminfo')
  }, 0)
}

function goBack() {
  router.push('/form/personalinfo')
}
</script>

<template>
  <form class="form-upload-card" @submit.prevent="saveData">
    <h2 class="form-upload-card__title">تصویر کارت ملی</h2>
    <div class="form-upload-card__uploads">
      <!-- Front -->
      <div class="form-upload-card__upload">
        <label class="form-upload-card__upload-box">
          <input
            id="input-front"
            type="file"
            class="form-upload-card__upload-input"
            accept="image/*"
            @change="handleUpload($event, 'front')"
          />
          <img v-if="previewFront" :src="previewFront" class="form-upload-card__upload-preview" />
          <img
            v-else
            class="form-upload-card__upload-icon"
            src="../../../assets/images/newimages/Vector (1).png"
            alt=""
          />
          <p v-show="!previewFront" class="form-upload-card__upload-text">
            تصویر را بکشید و اینجا رها کنید یا <span>کلیک کنید</span>
          </p>
        </label>
        <div class="form-upload-card__upload-extra">
          <span class="form-upload-card__upload-label">تصویر روی کارت ملی</span>
          <button
            type="button"
            class="form-upload-card__upload-menu-button"
            @click="showMenu.front = !showMenu.front"
          >
            <img src="../../../assets/icons/vuesax/linear/more.svg" alt="" />
          </button>
          <div v-if="showMenu.front" id="menu-front" class="form-upload-card__upload-menu">
            <div class="form-upload-card__upload-menu-item" @click="editImage('front')">
              <img src="../../../assets/icons/vuesax/outline/edit-2.svg" alt="" /> ویرایش
            </div>
            <hr />
            <div class="form-upload-card__upload-menu-item" @click="removeImage('front')">
              <img src="../../../assets/icons/vuesax/outline/trash.svg" alt="" /> حذف
            </div>
          </div>
        </div>
      </div>

      <!-- Back -->
      <div class="form-upload-card__upload">
        <label class="form-upload-card__upload-box">
          <input
            id="input-back"
            type="file"
            class="form-upload-card__upload-input"
            accept="image/*"
            @change="handleUpload($event, 'back')"
          />
          <img v-if="previewBack" :src="previewBack" class="form-upload-card__upload-preview" />
          <img
            v-else
            class="form-upload-card__upload-icon"
            src="../../../assets/images/newimages/Vector (1).png"
            alt=""
          />
          <p v-if="!previewBack" class="form-upload-card__upload-text">
            تصویر را بکشید و اینجا رها کنید یا <span>کلیک کنید</span>
          </p>
        </label>
        <div class="form-upload-card__upload-extra">
          <span class="form-upload-card__upload-label">تصویر پشت کارت ملی</span>
          <button
            type="button"
            class="form-upload-card__upload-menu-button"
            @click="showMenu.back = !showMenu.back"
          >
            <img src="../../../assets/icons/vuesax/linear/more.svg" alt="" />
          </button>
          <div v-if="showMenu.back" id="menu-back" class="form-upload-card__upload-menu">
            <div class="form-upload-card__upload-menu-item" @click="editImage('back')">
              <img src="../../../assets/icons/vuesax/outline/edit-2.svg" alt="" /> ویرایش
            </div>
            <hr />
            <div class="form-upload-card__upload-menu-item" @click="removeImage('back')">
              <img src="../../../assets/icons/vuesax/outline/trash.svg" alt="" /> حذف
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Actions -->
    <div class="form-upload-card__actions">
      <button
        @click="goBack"
        type="button"
        class="form-upload-card__button form-upload-card__button--secondary"
      >
        قبلی
      </button>
      <button type="submit" class="form-upload-card__button form-upload-card__button--primary">
        ثبت و ادامه
      </button>
    </div>
    <span class="error">{{ errormessageForm }}</span>
  </form>
</template>

<style lang="scss" scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 800px;
}

.form-upload-card {
  background: #ffffff;
  border-radius: 12px;
  width: 1400px;
  height: 508px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
  padding: 40px;
  display: flex;
  flex-direction: column;
  gap: 40px;
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

  &__uploads {
    width: 100%;
    height: 232px;
    display: flex;
    padding: 0 319.5px;
    gap: 40px;
  }

  &__upload {
    &-box {
      width: 320px;
      height: 180px;
      display: flex;
      flex-direction: column;
      cursor: pointer;
      position: relative;
      transition: border-color 0.3s ease;
      background-color: #f9fafb;
      border-radius: 12px 12px 0 0;
      border: 2px dashed #e2edff;
    }

    &-input {
      display: none;
    }

    &-icon {
      width: 68px;
      height: 50.54px;
      margin: 40.73px 126px 8px 126px;
    }

    &-text {
      width: 175px;
      height: 40px;
      text-align: center;
      margin: 0 72.5px 40.73px 72.5px;
      font-family: 'peyda-semiBold';
      font-size: 14px;

      span {
        color: #4152a0;
      }
    }

    &-extra {
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

    &-label {
      width: 122px;
      height: 100%;
      font-size: 14px;
      font-family: 'peyda-regular';
    }

    &-menu-button {
      height: 20px;
      width: 20px;
      border: 0;
      background-color: transparent;
      cursor: pointer;
    }

    &-menu {
      width: 93px;
      height: 72px;
      background-color: #ffffff;
      bottom: 12px;
      position: absolute;
      left: 30px;
      padding: 8px 12px;
      border-radius: 8px;
    }

    &-menu-item {
      width: 69px;
      height: 20px;
      font-size: 14px;
      font-family: 'peyda-regular';
      display: flex;
      align-items: center;
      gap: 8px;
      cursor: pointer;

      img {
        width: 20px;
        height: 20px;
      }
    }

    &-menu hr {
      margin: 8px 0;
      border: 0;
      height: 1px;
      background-color: #e2edff;
    }
  }

  &__actions {
    display: flex;
    margin-top: 40px;
    justify-self: end;
    justify-content: space-between;
    width: 434px;
    height: 48px;
    margin-right: 896px;
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
.error {
  color: red;
  font-size: 15px;
  position: relative;
  bottom: 50px;
}
</style>
