<template>
  <section class="dashboard">
    <!--
    <section class="modal">
      <img
        class="modal__image"
        src="../assets/images/modal/Empty State Illustration.png"
        alt=""
      />
      <p class="modal__text">برای دسترسی به داشبورد، لطفا ابتدا افتتاح حساب کنید</p>
      <button class="modal__button btn-primary">افتتاح حساب</button>
    </section>
    -->
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
import AccountDetails from '@/components/views/dashboard/AccountDetails.vue'
import Header from '../components/baseComponents/Header.vue'
import Sidebar from '../components/views/dashboard/Sidebar.vue'
import TransactionsTable from '../components/views/dashboard/TransactionsTable.vue'
</script>

<style scoped lang="scss">
// .modal {
//   &__section {
//     width: 328px;
//     height: 237px;
//     background-color: transparent;
//     position: absolute;
//     top: 471px;
//     right: 914px;
//     bottom: 452px;
//     left: 678px;
//     z-index: 999;
//     @include flex-column($justify: center, $align: center);
//   }

//   &__image {
//     width: 175px;
//     height: 115px;
//   }

//   &__text {
//     width: 100%;
//     height: 22px;
//     @include text-style($font-size-md, $font-family-regular);
//     margin-top: 20px;
//     margin-bottom: 32px;
//   }

//   &__button {
//     width: 290px;
//     height: 44px;
//     padding: 8px 102px;
//     @include text-style($font-size-md, $font-weight-700, $color-white, $font-family-bold);
//     border: $border-none;
//     border-radius: $radius-md;
//     margin: 0 63px 0 65px;
//     background-color: $table-header-bg;
//   }
// }

.dashboard {
  position: relative;
  @include flex-column;
  width: $dashboard-width;
  height: $dashboard-height;
  background-color: $background;

  &__main {
    width: 1404px;
    height: 804px;
    @include flex-center($gap: $gap-lg);
  }

  &__content {
    box-sizing: border-box;
    width: 100%;
    height: 100%;
    @include flex-column($gap: $gap-xl, $justify: center, $align: center);
  }
}
</style>
