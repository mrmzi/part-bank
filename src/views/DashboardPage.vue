<template>
  <section class="dashboard" :class="{ 'overlay-active': isSubmitted }">
    <section v-if="!isSubmitted" class="addAccount-modal addAccount-modal__section">
      <img
        class="addAccount-modal__section-img"
        src="../assets/images/modal/Empty_State_Illustration.png"
        alt=""
      />
      <p class="addAccount-modal__section-text">برای دسترسی به داشبورد، لطفا ابتدا افتتاح حساب کنید</p>

      <BaseButton
        :title="'افتتاح حساب'"
        :width="'209px'"
        :height="'48px'"
        :bgColor="'#4152a0'"
        @click="createaccount"
      />
    </section>

    <Header></Header>
    <main class="dashboard__main">
      <Sidebar></Sidebar>
      <section class="dashboard__content">
        <AccountDetails></AccountDetails>
        <TransactionsTable></TransactionsTable>
      </section>
    </main>
  </section>
</template>

<script setup>
import AccountDetails from '@/components/pages/dashboard/AccountDetails.vue'
import Header from '../components/layout/Header.vue'
import Sidebar from '../components/pages/dashboard/Sidebar.vue'
import TransactionsTable from '../components/pages/dashboard/TransactionsTable.vue'
import router from '@/router'
import { useFormStore } from '@/stores/formStore'
import { computed } from 'vue'
import BaseButton from '@/components/common/BaseButton.vue'

const formStore = useFormStore()
const isSubmitted = computed(() => formStore.isSubmitted)

function createaccount() {
  router.push('/form')
}
</script>

<style scoped lang="scss">
.addAccount-modal {
  &__section {
    width: 328px;
    height: 237px;
    background-color: transparent;
    position: absolute;
    top: 391px;
    right: 914px;
    bottom: 452px;
    left: 678px;
    z-index: 999;
    @include flex-column($justify: center, $align: center);
    &-image {
      width: 175px;
      height: 115px;
    }
    &-text {
      width: 100%;
      height: 22px;
      @include text-style($font-size-md, $font-family-regular);
      margin-top: 20px;
      margin-bottom: 32px;
    }
    &-btn {
      width: 290px;
      height: 44px;
      padding: 8px 102px;
      @include text-style($font-size-md, $font-weight-700, $color-white, $font-family-bold);
      border: $border-none;
      border-radius: $radius-md;
      margin: 0 63px 0 65px;
      background-color: $table-header-bg;
      cursor: pointer;
    }
  }
}
.btn-primary {
  width: 290px;
  height: 44px;
  padding: 8px 102px;
  font-family: 'peyda-bold';
  font-size: 16px;
  border: 0;
  font-weight: 700;
  color: #ffffff;
  border-radius: 8px;
  margin: 0 63px 0 65px;
  background-color: #4152a0;
}
.dashboard::before {
  content: '';
  position: absolute;
  inset: 0;
  background: rgba(255, 255, 255, 85%);
  z-index: 0;
}
.dashboard.overlay-active::before {
  display: none;
}
.dashboard {
  position: relative;
  @include flex-column;
  width: 1920px;
  height: 1080px;
  background-color: $background;
  &__main {
    width: 1404px;
    height: 804px;
    @include flex-center($gap: 16px);
  }

  &__content {
    box-sizing: border-box;
    width: 100%;
    height: 100%;
    @include flex-column($gap: $gap-xl, $justify: center, $align: center);
  }
}
</style>
