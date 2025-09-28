<template>
  <aside class="sidebar">
    <div class="sidebar__header">
      <h3 class="sidebar__header-title">محمد جواد رحمانی نسب</h3>
      <p class="sidebar__header-nationalCode">کد ملی:<span>۰۹۱۲۳۴۵۶۷۸</span></p>
    </div>

    <div class="sidebar__divider"></div>

    <ul class="sidebar__menu">
      <li :class="['sidebar__menu-item' , (menuItem.id === 1) ? 'sidebar__menu-item--active' : null]" v-for="menuItem in menuItems" :key="menuItem.id">
        <img :src="menuItem.icon" alt="Menu icon" />
        {{menuItem.title}}
      </li>
    </ul>
  </aside>
</template>

<script setup>
import { ref } from 'vue';
import element4 from '@/assets/icons/sidebar-icons/element-4.svg'
import vector from '@/assets/icons/sidebar-icons/Vector.svg'
import strongbox2 from '@/assets/icons/sidebar-icons/strongbox-2.svg'
import cards from '@/assets/icons/sidebar-icons/cards.svg'
import receiptSearch from '@/assets/icons/sidebar-icons/receipt-search.svg'
import cardPos from '@/assets/icons/sidebar-icons/card-pos.svg'
import path from '@/assets/icons/sidebar-icons/path.svg'

const menuItems = ref([
  { id:1 , title: 'داشبورد' , icon: element4},
  { id:2 , title: 'حساب' , icon: vector},
  { id:3 , title: 'تسهیلات' , icon: strongbox2},
  { id:4 , title: 'عملیات کارت' , icon: cards},
  { id:5 , title: 'سفته الکترونیک' , icon: receiptSearch},
  { id:6 , title: 'خدمات' , icon: cardPos},
  { id:7 , title: 'خروج' , icon: path},
])

</script>

<style scoped lang="scss">
.sidebar {
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 20px;
  background-color: #ffffff;
  min-width: 220px;
  height: 100%;
  border-radius: 12px;
  padding: 24px 0 8px 0;
  box-sizing: border-box;

  &__header {
    box-sizing: border-box;
    padding: 16px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    row-gap: 26px;
    border-radius: 8px;
    width: 172px;
    height: 116px;

    &-title {
      font-size: 18px;
      line-height: 28px;
      color: #3c4351;
      font-weight: 700;
      text-align: center;
      margin: 38px 0 0 0;
    }

    &-nationalCode {
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 172px;
      font-size: 14px;
      font-weight: 400;
      font-family: 'peyda-regular';
      color: #8999b9;
      margin: 0 0 20px 0;

      span {
        font-weight: 600;
        font-family: 'peyda-semi-bold';
        color: #3c4351;
      }
    }
  }

  &__divider {
    width: 196px;
    height: 1px;
    background-color: #e2edff;
  }

  &__menu {
    margin: 0;
    padding: 0 8px;
    width: 100%;
    list-style: none;
    box-sizing: border-box;

    &-item {
      box-sizing: border-box;
      height: 44px;
      margin: 1px 0 0 0;
      font-size: 14px;
      padding: 12px 16px;
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

      &--active {
        background-color: #f9fafb;
        color: #4152a0;
        font-weight: 700;
      }

      &--danger {
        color: #eb482b;
      }
    }
  }
}

</style>
