<template>
  <section @click="createDepositAccount" class="account">
    <div class="account__card account__card--info" dir="ltr">
      <div class="account__total">
        <div class="account__total__number">
          <span class="account__total__number-text">موجودی کل</span>
          <span class="account__total__number-money">۴٬۲۳۹٬۸۷۴٬۰۰۰</span>
        </div>
        <div class="account__total-option">
          <svg
            xmlns="@/assets/icons/vuesax/linear/more.svg"
            width="40"
            height="40"
            viewBox="0 0 24 24"
            fill="none"
            aria-hidden="true"
          >
            <circle cx="12" cy="5" r="2" fill="currentColor" />
            <circle cx="12" cy="12" r="2" fill="currentColor" />
            <circle cx="12" cy="19" r="2" fill="currentColor" />
          </svg>
        </div>
      </div>
      <div class="account__number">
        <span>۵۴۱۸</span>
        <span>۲۷۴۱</span>
        <span>۶۶۹۸</span><span>۸۲۵۱</span>
      </div>
    </div>

    <div class="account__card account__card--score">
      <div class="account__score-info">
        <span>امتیاز حساب</span>
        <svg
          xmlns="@/assets/icons/vuesax/bold/info-circle.svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="currentColor"
          aria-hidden="true"
        >
          <circle cx="12" cy="12" r="10" fill="#8999b9" />
          <circle cx="12" cy="8" r="1.3" fill="#fff" />
          <rect x="11" y="10" width="2" height="7" fill="#fff" />
        </svg>
      </div>
      <div class="account__balance">
        <div class="account__balance__number">
          <span class="account__balance__number-text">۸۰۰٬۰۰۰٬۰۰۰</span>
          <span class="account__balance__number-extra">ریال</span>
        </div>
        <div class="account__balance__month">
          <span class="account__balance__month-text">۱۲</span>
          <span class="account__balance__month-extra">ماهه</span>
        </div>
      </div>
      <button class="account__calc-btn btn-primary">محاسبه امتیاز</button>
    </div>

    <!-- <AccountDetailsCard
      :card-class="'account__card account__card--score'"
      :card-title="'امتیاز حساب'"
      :card-icon="'@/assets/icons/vuesax/bold/info-circle.svg'"
    >
      <div class="account__balance">
        <div class="account__balance__number">
          <span class="account__balance__number-text">۸۰۰٬۰۰۰٬۰۰۰</span>
          <span class="account__balance__number-extra">ریال</span>
        </div>
        <div class="account__balance__month">
          <span class="account__balance__month-text">۱۲</span>
          <span class="account__balance__month-extra">ماهه</span>
        </div>
      </div>
    </AccountDetailsCard>
    <AccountDetailsCard
      :card-class="'account__card account__card--score'"
      :card-title="'قسط پیش رو'"
      :card-icon="'@/assets/icons/Angle-left.svg'"
    >
      <div class="account__amount">
          <span class="account__amount-text">مبلغ قسط:</span>
          <span class="account__amount-money">۳۵۰٬۰۰۰٬۰۰۰ ریال</span>
        </div>
        <div class="account__due">
          <span class="account__due-text">تاریخ سررسید:</span>
          <span class="account__due-month">۱۴۰۱/۱۲/۱۵</span>
        </div>
    </AccountDetailsCard> -->

    <div class="account__card account__card--installment">
      <div class="account__card__info">
        <span class="account__card__info-text">قسط پیش رو</span>
        <span class="account__card__info-extra">
          جزئیات
          <svg
            xmlns="@/assets/icons/Angle-left.svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            aria-hidden="true"
          >
            <polyline points="15 18 9 12 15 6" />
          </svg>
        </span>
      </div>
      <div class="account__card-details">
        <div class="account__amount">
          <span class="account__amount-text">مبلغ قسط:</span>
          <span class="account__amount-money">۳۵۰٬۰۰۰٬۰۰۰ ریال</span>
        </div>
        <div class="account__due">
          <span class="account__due-text">تاریخ سررسید:</span>
          <span class="account__due-month">۱۴۰۱/۱۲/۱۵</span>
        </div>
        <button class="account__pay-btn btn-primary">
          <span>پرداخت</span>
          <img src="@/assets/icons/vuesax/linear/arrow-left.svg" alt="" />
        </button>
      </div>
    </div>
  </section>
  <!-- <input @change="handleFile" type="file" name="" id="" /> -->
</template>

<script setup>
// import oncart from '@/services/getcart';
// import { onMounted } from 'vue';
import api from '@/plugins/axios'
import { ref } from 'vue'
import AccountDetailsCard from './AccountDetailsCard.vue'
const user = ref(null)
async function createDepositAccount() {
  try {
    const form = new FormData()
    form.append('firstName', 'محمد')
    form.append('lastName', 'محمدی')
    form.append('address', 'تهران')
    form.append('postalCode', '1234567890')
    form.append('nationalCardImage', user.value)
    const response = await api.post('/deposit-account', form, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`,
        'Content-Type': 'multipart/form-data',
      },
    })

    console.log('Response:', response.data)
  } catch (err) {
    console.error(err)
  }
}
function handleFile(event) {
  user.value = event.target.files[0]
  console.log(user.value)
  console.log(user.value.name)
  console.log(user.value.type)
}
</script>

<style lang="scss" scoped>
.btn-primary {
  width: 290px;
  height: 44px;
  padding: 8px 102px;
  @include text-style($font-size-md, $font-weight-700, $text-primary, $font-family-bold);
  border: $border-none;
  background-color: $control-bg;
  border-radius: $radius-md;
  margin: 0 24px 24px 24px;
}
.account {
  width: 100%;
  height: 260px;
  border-radius: 12px;
  display: flex;
  font-family: 'peyda-medium';
  color: #ffffff;

  &__card {
    height: 100%;
    background-color: $color-white;
    width: 338px;
    border-radius: $radius-lg;

    &--info {
      width: 456px;
      background-image:
        url('@/assets/images/dashboard-miryazdi/Vector (1).png'),
        url('@/assets/images/dashboard-miryazdi/Vector.png'),
        linear-gradient(to bottom right, #4152a0, #d0c9c1);
      background-blend-mode: multiply;
      filter: opacity(0.9);
      background-repeat: no-repeat, no-repeat, no-repeat;
      background-position:
        center,
        center,
        top right;
      background-size: cover, cover, cover;

      .account__total {
        height: 78px;
        width: 396px;
        margin: 36px 24px 64px 36px;
        display: flex;
        justify-content: space-between;

        &__number {
          // @include flex-column();
          display: flex;
          flex-direction: column;
          width: 245px;
          height: 100%;
          font-weight: 600;
          font-family: 'peyda-semiBold';

          &-text {
            font-size: 16px;
          }
          &-money {
            font-size: 40px;
          }
        }

        &-option {
          width: 32px;
          height: 32px;
          display: flex;
          justify-content: center;
          align-items: center;
        }
      }

      .account__number {
        width: 351px;
        height: 50px;
        margin: 0 53px 32px 52px;
        font-size: 36px;
        display: flex;
        justify-content: space-between;
      }
    }

    &--score {
      margin: 0 16px;

      .account__score-info {
        width: 290px;
        height: 28px;
        margin: 24px 24px 0 24px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-size: 20px;
        font-weight: 700;
        color: #3c4351;
        font-family: 'peyda-bold';

        span {
          @include text-style($font-size-xl, $font-weight-800, $text-primary, $font-family-bold);
          width: 97px;
          height: 100%;
        }

        img {
          width: 24px;
          height: 24px;
        }
      }

      .account__balance {
        width: 290px;
        height: 84px;
        margin: 28px 24px;
        text-align: center;

        &__number {
          height: 56px;

          &-text {
            font-family: 'peyda-bold';
            font-size: 40px;
            font-weight: 700;
            margin-left: 4px;
            color: #4152a0;
          }

          &-extra {
            font-family: 'peyda-regular';
            font-size: 14px;
            font-weight: 400;
            color: #8999b9;
          }
        }

        &__month {
          &-text {
            font-family: 'peyda-bold';
            font-weight: 700;
            font-size: 18px;
            margin-left: 4px;
            color: #4152a0;
          }

          &-extra {
            font-family: 'peyda-regular';
            font-size: 14px;
            color: #8999b9;
          }
        }
      }
    }

    &--installment {
      .account__card__info {
        width: 290px;
        height: 28px;
        display: flex;
        justify-content: space-between;
        margin: 24px;
        margin-bottom: 68px;

        &-text {
          font-size: 20px;
          width: 104px;
          height: 100%;
          font-family: 'peyda-bold';
          color: #3c4351;
        }

        &-extra {
          width: 65px;
          height: 24px;
          font-family: 'peyda-regular';
          font-size: 14px;
          display: flex;
          align-items: center;
          color: #8999b9;

          svg {
            margin-right: 4.5px;
            width: 24px;
            height: 24px;
          }
        }
      }

      .account__card-details {
        width: 290px;
        height: 116px;
        margin: 24px;
        margin-top: 0;

        .account__amount {
          width: 100%;
          height: 20px;
          margin-bottom: 12px;
          font-size: 14px;
          display: flex;
          justify-content: space-between;

          &-text {
            width: 59px;
            height: 100%;
            font-family: 'peyda-regular';
            font-weight: 400;
            color: #8999b9;
          }

          &-money {
            width: 98px;
            height: 100%;
            font-family: 'peyda-semiBold';
            font-size: 14px;
            font-weight: 600;
            color: #3c4351;
          }
        }

        .account__due {
          width: 100%;
          height: 20px;
          margin-bottom: 20px;
          display: flex;
          justify-content: space-between;

          &-text {
            width: 85px;
            height: 100%;
            font-family: 'peyda-regular';
            color: #8999b9;
          }

          &-month {
            width: 60px;
            height: 100%;
            font-family: 'peyda-semiBold';
            font-size: 14px;
            font-weight: 600;
            color: #3c4351;
          }
        }

        .account__pay-btn {
          margin: 0;
          display: flex;
          justify-content: center;
          align-items: center;

          span {
            margin: 8px 101.5px 8px 8px;
          }

          img {
            margin-left: 101.5px;
          }
        }
      }
    }
  }
}
</style>
