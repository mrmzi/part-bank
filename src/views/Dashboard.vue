<script setup>
import AccountDetails from '@/components/views/dashboard/AccountDetails.vue'
import Header from '../components/baseComponents/Header.vue'
import Sidebar from '../components/views/dashboard/Sidebar.vue'
import TransactionsTable from '../components/views/dashboard/TransactionsTable.vue'
</script>

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

<style scoped>
.modal__section {
  position: absolute;
  width: 100px;
  height: 100px;
  background-color: transparent;
  top: 0;
  width: 328px;
  height: 237px;
  z-index: 999;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
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
  font-size: 16px;
  font-family: 'peyda-regular';
  margin-top: 20px;
  margin-bottom: 32px;
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
  background-color: #4152A0;
}
.dashboard {
  position: relative;
}
.dashboard {
  display: flex;
  align-items: center;
  flex-direction: column;
  row-gap: 40px;
  width: 1920px;
  height: 1080px;
  background-color: red;
}
.dashboard__main {
  width: 1404px;
  height: 804px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
}
.dashboard__content {
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  row-gap: 24px;
}
</style>
