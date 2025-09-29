<script setup>
import AccountDetails from '@/components/views/dashboard/AccountDetails.vue'
import Header from '../components/baseComponents/Header.vue'
import Sidebar from '../components/views/dashboard/Sidebar.vue'
import TransactionsTable from '../components/views/dashboard/TransactionsTable.vue'
</script>

<template>
  <section class="dashboard">
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

<style scoped lang="scss">
.dashboard {
  display: flex;
  align-items: center;
  flex-direction: column;
  row-gap: 40px;
  // width: 1920px;
  width: $dashboard-width;
  // height: 1080px;
  height: $dashboard-height;
  /* background-color: #f7f8fa; */
  background-color: $background;
}
.dashboard__main {
  width: 1404px;
  height: 804px;
  display: flex;
  align-items: center;
  justify-content: center;
  // gap: 20px;
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
  // row-gap: 24px;
  row-gap: $gap-xl;
}
</style>
