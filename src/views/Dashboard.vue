<template class="container">
  <section class="dashboard">
    <!-- <section class="modal__section">
      <img
        class="modal__section-img"
        src="../assets/images/modal/Empty State Illustration.png"
        alt=""
      />
      <p class="modal__section-text">برای دسترسی به داشبورد، لطفا ابتدا افتتاح حساب کنید</p>
      <button class="modal__section-btn btn-primary">افتتاح حساب</button>
    </section> -->
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
import AccountDetails from '@/components/views/dashboard/accountDetails/AccountDetails.vue'
import Header from '../components/baseComponents/Header.vue'
import Sidebar from '../components/views/dashboard/sidebar/Sidebar.vue'
import TransactionsTable from '../components/views/dashboard/transactionsTable/TransactionsTable.vue'
</script>

<style scoped lang="scss">
.modal__section {
  width: 100px;
  height: 100px;
  background-color: transparent;
  width: 328px;
  height: 237px;
  z-index: 999;
  @include flex-column($justify:center , $align:center);
  position: absolute;
  top: 0;
  top:471px ;
  right:914px ;
  bottom:452px ;
  left:678px ;
}
.modal__section-img {
  width: 175px;
  height: 115px;
}
.modal__section-text {
  width: 100%;
  height: 22px;
  @include text-style($font-size-md, $font-family-regular);
  margin-top: 20px;
  margin-bottom: 32px;
}
.btn-primary {
  width: 290px;
  height: 44px;
  padding: 8px 102px;
  @include text-style($font-size-md, $font-weight-700 , $color-white , $font-family-bold);
  border: $border-none;
  border-radius: $radius-md;
  margin: 0 63px 0 65px;
  background-color: $table-header-bg;
}
.dashboard {
  position: relative;
}
.dashboard {
  display: flex;
  align-items: center;
  flex-direction: column;
  row-gap: 40px;
  width: $dashboard-width;
  height: $dashboard-height;
  background-color: $background;
}
.dashboard__main {
  width: 1404px;
  height: 804px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: $gap-lg;
}
.dashboard__content {
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  row-gap: $gap-xl;
}
</style>
