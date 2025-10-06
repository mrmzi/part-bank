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
  @include flex-column($gap-lg , $align: center);
  background-color: $color-white;
  min-width: 220px;
  height: 100%;
  border-radius: $radius-lg;
  padding: 24px 0 8px 0;
  box-sizing: border-box;
  z-index: 999;

  &__header {
    box-sizing: border-box;
    padding: 16px;
    @include flex-column($gap-row , center ,center);
    border-radius: $radius-md;
    width: 172px;
    height: 116px;

    &-title {
      @include text-style($font-size-lg , $font-weight-700 ,$text-primary);
      line-height: 28px;
      text-align: center;
      margin: 38px 0 0 0;
    }

    &-nationalCode {
      @include flex-between;
      width: 172px;
      @include text-style($font-size-base , $font-weight-400 ,$text-secondary , $font-family-regular);
      margin: 0 0 20px 0;

      span {
        @include text-style($size: $font-size-base,$weight: $font-weight-600, $color: $text-primary, $family: $font-family-semi-bold);
      }
    }
  }

  &__divider {
    width: 196px;
    height: 1px;
    background-color: $border-color;
  }

  &__menu {
    margin: 0;
    padding: 0 8px;
    width: 100%;
    list-style: none;
    box-sizing: border-box;

    &-item {
      @include text-style($font-size-base , $font-weight-400, $text-secondary);
      box-sizing: border-box;
      height: 44px;
      margin: 1px 0 0 0;
      padding: 12px 16px;
      border-radius: $radius-sm;
      display: flex;
      align-items: center;
      gap: $gap-sm;
      cursor: pointer;

      img {
        width: 20px;
        height: 20px;
      }

      &--active {
        background-color: $surface-alt;
        color: $primary;
        font-weight: $font-weight-700;
      }

      &--danger {
        color: $danger;
      }
    }
  }
}

</style>
