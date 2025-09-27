<template>
  <aside class="sidebar">
    <div class="sidebar__header">
      <h3 class="sidebar__header-title">محمد جواد رحمانی نسب</h3>
      <p class="sidebar__header-nationalCode">کد ملی:<span>۰۹۱۲۳۴۵۶۷۸</span></p>
    </div>

    <div class="sidebar__divider"></div>

    <ul class="sidebar__menu">
      <li class="sidebar__menu-item sidebar__menu-item--active">
        <img src="../../../assets/icons/sidebar-icons/element-4.svg" alt="" />
        داشبورد
      </li>
      <li class="sidebar__menu-item">
        <img src="../../../assets/icons/sidebar-icons/Vector.svg" alt="" />
        حساب
      </li>
      <li class="sidebar__menu-item">
        <img src="../../../assets/icons/sidebar-icons/strongbox-2.svg" alt="" />
        تسهیلات
      </li>
      <li class="sidebar__menu-item">
        <img src="../../../assets/icons/sidebar-icons/cards.svg" alt="" />
        عملیات کارت
      </li>
      <li class="sidebar__menu-item">
        <img src="../../../assets/icons/sidebar-icons/receipt-search.svg" alt="" />
        سفته الکترونیک
      </li>
      <li class="sidebar__menu-item">
        <img src="../../../assets/icons/sidebar-icons/card-pos.svg" alt="" />
        خدمات
      </li>
      <li class="sidebar__menu-item sidebar__menu-item--danger">
        <img src="../../../assets/icons/sidebar-icons/path.svg" alt="" />
        خروج
      </li>
    </ul>
  </aside>
</template>

<script setup></script>

<style scoped>
.sidebar {
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 20px;
  background-color: #ffffff;
  min-width: 220px;
  height: 100%;
  border-radius: 12px;
  padding: 24px 0px 8px 0px;
  box-sizing: border-box;
}
.sidebar__header {
  box-sizing: border-box;
  padding: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  row-gap: 40px;
  border-radius: 8px;
  width: 172px;
  height: 116px;
}

.sidebar__header-title {
  font-size: 18px;
  line-height: 28px;
  color: #3c4351;
  font-weight: 700;
  text-align: center;
  margin: 14px 0px 0px 0px;
}

.sidebar__header-nationalCode {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 172px;
  font-size: 14px;
  font-weight: 600;
  font-family: 'peyda-semi-bold';
  color: #3c4351;
  margin: 0px 0px 15px 0px;
}
.sidebar__divider {
  width: 196px;
  height: 1px;
  background-color: #e2edff;
}
.sidebar__menu {
  margin: 0px;
  box-sizing: border-box;
  width: 100%;
  list-style: none;
  padding: 0px 8px;
}
.sidebar__menu-item {
  height: 44px;
  margin-bottom: 5px;
  font-size: 14px;
  padding: 0px 16px;
  border-radius: 6px;
  color: #8999b9;
  font-weight: 400;
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;

  img {
    width: 20px;
    height: 20px;
  }
}
.sidebar__menu-item--active {
  background-color: #f9fafb;
  color: #4152a0;
  font-weight: 700;
}
.sidebar__menu-item--danger {
  color: #eb482b;
}
</style>
