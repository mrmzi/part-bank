<template>
  <div :class="cardProps.cardClass">
    <div class="account__score-info">
      <span>{{ cardProps.cardTitle }}</span>
      <img :src="cardProps.cardIcon" alt="card icon" />
    </div>
    
    <slot></slot>

    <BaseButton
      :class="'account__calc-btn btn-primary'"
      :title="'محاسبه امتیاز'"
      :width="'290px'"
      :height="'44px'"
      :bgColor="'#eceef6'"
      :color="'#4152a0'"
    />
  </div>
</template>

<script setup>
import BaseButton from '@/components/baseComponents/BaseButton.vue'

const cardProps = defineProps({
  cardWidth: {
    type: String,
  },
  cardHeight: {
    type: String,
  },
  cardColor: {
    type: String,
  },
  cardTitle: {
    type: String,
    required: true,
  },
  cardClass: {
    type: String,
  },
  cardIcon: {
    type: String,
  },
})
</script>

<style scoped lang="scss">
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
.btn-primary {
  width: 290px;
  height: 44px;
  padding: 8px 102px;
  @include text-style($font-size-md, $font-weight-700, $primary, $font-family-bold);
  border: $border-none;
  background-color: $control-bg;
  border-radius: $radius-md;
  margin: 0 24px 24px 24px;
}
</style>
