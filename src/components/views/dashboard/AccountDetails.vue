<script setup>
import { getbalance } from '@/services/getaccount'
import { useFormStore } from '@/stores/formStore'
import { computed, onMounted, reactive } from 'vue'

const formStore = useFormStore()
const isSubmitted = computed(() => formStore.isSubmitted)
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
  if (isSubmitted.value) {
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
  return Number(num).toLocaleString('fa-IR') // هم جداکننده ۳ رقمی میذاره، هم فارسی میشه
}

const scoreAmountFormatted = computed(() => formatMoney(account.score.amount))
const instalmentAmountFormatted = computed(() => formatMoney(account.upcomingInstalment.amount))
const balanceFormatted = computed(() => formatMoney(account.balance))
const scorePaymentPeriodFormatted = computed(() => formatMoney(account.score.paymentPeriod))

// persian card number

function formatCardNumberSpans(num) {
  if (!num) return []

  const persianStr = num.replace(/\d/g, (d) => '۰۱۲۳۴۵۶۷۸۹'[d])
  const groups = persianStr.match(/.{1,4}/g) || []
  return groups
}
</script>

<template>
  <section @click="createDepositAccount" class="account">
    <div class="account__card account__card--info" dir="ltr" :class="{ opacity: !isSubmitted }">
      <div class="account__total">
        <div class="account__total__number">
          <span class="account__total__number-text">موجودی کل</span>
          <span class="account__total__number-money">{{ balanceFormatted }}</span>
        </div>
        <div class="account__total-option">
          <img src="../../../assets/icons/vuesax/linear/more.svg" alt="" />
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
        <img src="../../../assets/icons/vuesax/bold/info-circle.svg" alt="" />
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
          <img src="../../../assets/icons/Angle-left.svg" alt="" />
        </span>
      </div>
      <div class="account__card-details">
        <div class="account__amount">
          <span class="account__amount-text">مبلغ قسط:</span>
          <span class="account__amount-money">{{ instalmentAmountFormatted }}</span>
        </div>
        <div class="account__due">
          <span class="account__due-text">تاریخ سررسید:</span>
          <span class="account__due-month">{{ account.upcomingInstalment.dueDate }}</span>
        </div>
        <button class="account__pay-btn btn-primary">
          <span>پرداخت</span>
          <img src="../../../assets/icons/vuesax/linear/arrow-left.svg" alt="" />
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
  font-family: 'peyda-bold';
  font-size: 16px;
  border: 0;
  font-weight: 700;
  color: #3c4351;
  background-color: #eceef6;
  border-radius: 8px;
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
    background-color: #ffffff;
    width: 338px;
    border-radius: 12px;

    &--info {
      width: 456px;
      background-image:
        url('../../../assets/images/dashboard-miryazdi/Vector (1).png'),
        url('../../../assets/images/dashboard-miryazdi/Vector.png'),
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
        gap: 16px;
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

          img {
            margin-right: 8.85px;
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
            direction: ltr;
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
            direction: ltr;
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
.opacity {
  opacity: 0.5;
}
</style>
