<script setup>
import { getbalance } from '@/services/getAccount';
import { useFormStore } from '@/stores/formStore';

import { computed, onMounted, reactive } from 'vue'
const formStore = useFormStore()
const isFormSubmitted = formStore.isSubmitted
const account = reactive({
  balance: 0,
  cardNumber: '',
  score: {
    amount: 0,
    paymentPeriod: 0,
  },
  upcomingInstalment: {
    amount: 0,
    dueDate: '-',
  },
})

onMounted(async () => {
  if (isFormSubmitted) {
    try {
      const response = await getbalance()
      const data = response.data[0]
      account.balance = data.balance
      account.cardNumber = data.cardNumber
      account.score = data.score
      account.upcomingInstalment = data.upcomingInstalment
    } catch (err) {
      console.error(err)
    }
  }
})

function formatMoney(num) {
  return Number(num).toLocaleString('fa-IR') 
}

const scoreAmountFormatted = computed(() => formatMoney(account.score.amount))
const instalmentAmountFormatted = computed(() => formatMoney(account.upcomingInstalment.amount))
const balanceFormatted = computed(() => formatMoney(account.balance))
const scorePaymentPeriodFormatted = computed(() => formatMoney(account.score.paymentPeriod))


function formatCardNumberSpans(num) {
  if (!num) return []

  const persianStr = num.replace(/\d/g, (d) => '۰۱۲۳۴۵۶۷۸۹'[d])
  const groups = persianStr.match(/.{1,4}/g) || []
  return groups
}
</script>

<template>
  <section @click="createDepositAccount" class="account">
    <div class="account__card account__card--info" dir="ltr" :class="{ opacity: !isFormSubmitted }">
      <div class="account__total">
        <div class="account__total__number">
          <span class="account__total__number-text">موجودی کل</span>
          <span class="account__total__number-money">{{ balanceFormatted }}</span>
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
        <span
          v-for="(group, index) in formatCardNumberSpans(account.cardNumber)"
          :key="index"
          class="card-digit-group"
        >
          {{ group }}
        </span>
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
          <span class="account__balance__number-text">{{ scoreAmountFormatted }}</span>
          <span class="account__balance__number-extra">ریال</span>
        </div>
        <div class="account__balance__month">
          <span class="account__balance__month-text">{{ scorePaymentPeriodFormatted }}</span>
          <span class="account__balance__month-extra">ماهه</span>
        </div>
      </div>
      <button class="account__calc-btn btn-primary">محاسبه امتیاز</button>
    </div>



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
          <span class="account__amount-text">:مبلغ قسط</span>
          <span class="account__amount-money">{{ instalmentAmountFormatted }}</span>
        </div>
        <div class="account__due">
          <span class="account__due-text">:تاریخ سررسید</span>
          <span class="account__due-month">{{ account.upcomingInstalment.dueDate }}</span>
        </div>
        <button class="account__pay-btn btn-primary">
          <span>پرداخت</span>
          <img src="@/assets/icons/vuesax/linear/arrow-left.svg" alt="" />
        </button>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.btn-primary {
  width: 290px;
  height: 44px;
  padding: 8px 102px;
  @include text-style($font-size-md, $font-weight-700, $text-primary, $font-family-bold);
  border: $border-none;
  background-color: $control-bg;
  border-radius: $radius-md;
  margin: 0 $gap-xl $gap-xl $gap-xl;
}

.account {
  width: 100%;
  height: 260px;
  border-radius: $radius-lg;
  display: flex;
  align-items: center;
  gap: 5px;
  font-family: 'peyda-medium';
  color: $color-white;

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
        linear-gradient(to bottom right, $primary, #d0c9c1);
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
        @include flex-between;
        align-items: start;

        &__number {
          @include flex-column();
          align-items: start;
          width: 245px;
          height: 100%;
          font-weight: $font-weight-600;
          font-family: $font-family-semi-bold;

          &-text {
            font-size: $font-size-md; // 16px
          }
          &-money {
            font-size: $font-size-xxl; // 40px
          }
        }

        &-option {
          width: 32px;
          height: 32px;
          @include flex-center;
        }
      }

      .account__number {
        width: 351px;
        height: 50px;
        margin: 0 53px 32px 52px;
        font-size: 36px; 
        @include flex-between;
      }
    }

    &--score {
      margin: 0 $gap-md;

      .account__score-info {
        width: 290px;
        height: 28px;
        margin: $gap-xl $gap-xl 0 $gap-xl;
        @include flex-between;
        font-size: $font-size-xl; 
        font-weight: $font-weight-700;
        color: $text-primary;
        font-family: $font-family-bold;

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
            font-family: $font-family-bold;
            font-size: $font-size-xxl; // 40px
            font-weight: $font-weight-700;
            margin-left: 4px;
            color: $primary;
          }

          &-extra {
            font-family: $font-family-regular;
            font-size: $font-size-sm; // 14px
            font-weight: $font-weight-400;
            color: $text-secondary;
          }
        }

        &__month {
          &-text {
            font-family: $font-family-bold;
            font-weight: $font-weight-700;
            font-size: $font-size-lg; // 18px
            margin-left: 4px;
            color: $primary;
          }

          &-extra {
            font-family: $font-family-regular;
            font-size: $font-size-sm; // 14px
            color: $text-secondary;
          }
        }
      }
    }

    &--installment {
      .account__card__info {
        width: 290px;
        height: 28px;
        @include flex-between;
        margin: 24px;
        margin-bottom: 68px;

        &-text {
          width: 104px;
          height: 100%;
          @include text-style(
            $size: $font-size-xl,
            $weight: $font-weight-700,
            $color: $text-primary,
            $family: $font-family-bold
          );
        }

        &-extra {
          width: 65px;
          height: 24px;
          display: flex;
          align-items: center;
          @include text-style(
            $size: $font-size-base,
            $color: $text-secondary,
            $family: $font-family-regular
          );

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
          font-size: $font-size-base;
          @include flex-between;

          &-text {
            width: 59px;
            height: 100%;
            direction: ltr;

            @include text-style(
              $size: $font-size-base,
              $weight: $font-weight-400,
              $color: $text-secondary,
              $family: $font-family-regular
            );
          }

          &-money {
            width: 98px;
            height: 100%;
           direction: ltr;
            @include text-style(
              $size: $font-size-base,
              $weight: $font-weight-600,
              $color: $text-primary,
              $family: $font-family-semi-bold
            );
          }
        }

        .account__due {
          width: 100%;
          height: 20px;
          margin-bottom: 20px;
          @include flex-between;

          &-text {
            width: 85px;
            height: 100%;
            font-family: $font-family-regular;
            color: $text-secondary;
            direction: ltr;
          }

          &-month {
            width: 60px;
            height: 100%;
            direction: ltr;
            @include text-style(
              $size: $font-size-base,
              $weight: $font-weight-600,
              $color: $text-primary,
              $family: $font-family-semi-bold
            );
          }
        }

        .account__pay-btn {
          margin: 0;
          @include flex-center;

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
.opacity {
  opacity: 0.5;
}
</style>
