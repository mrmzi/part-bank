<template>
  <section class="dashboard__transactions">
    <div class="transactions__header">
      <h3 class="transactions__title">لیست تراکنش ها <span>(ریال)</span></h3>
      <div class="transactions__filter">
        <div class="transactions__filter-sort">
          <label for="sortBox"><img src="@/assets/icons/arrow-sort.svg" alt="sort icon"> مرتب سازی:</label>
          <select name="sortBox" id="sortBox">
            <option value="all">همه</option>
          </select>
        </div>
        <div class="transactions__filter-search">
          <input
            type="text"
            name="transactions-search"
            id="transactions-search"
            placeholder="جستجو"
          />
          <button>
            <img src="../../../assets/icons/Search.svg" alt="Search Icon" />
          </button>
        </div>
      </div>
    </div>

    <table class="transactions__table">
      <thead class="transactions__thead">
        <tr class="transactions__tr">
          <th class="transactions__th">نوع تراکنش</th>
          <th class="transactions__th">تاریخ و ساعت تراکنش</th>
          <th class="transactions__th">مبلغ تراکنش</th>
        </tr>
      </thead>
      <tbody class="transactions__tbody">
        <tr v-for="transaction in transactions" :key="transaction.id" class="transactions__tr">
          <td class="transactions__td">
            {{ transaction.type === 'deposit' ? 'واریز' : 'برداشت' }}
            <img :src="transaction.icon" alt="transaction icon">
          </td>
          <td class="transactions__td">{{ transaction.date }}</td>
          <td class="transactions__td">{{ transaction.amount }}</td>
        </tr>
      </tbody>
    </table>

    <nav class="pagination">
      <button class="pagination__arrow pagination__arrow--prev" :disabled="currentPage === 1">
        <img src="@/assets/icons/arrow-left.svg" alt="" />
      </button>

      <button
        v-for="page in pages"
        :key="page"
        :class="['pagination__page', { 'pagination__page--active': page === currentPage }]"
        @click="currentPage = page"
      >
        {{ page }}
      </button>

      <button
        class="pagination__arrow pagination__arrow--next"
        :disabled="currentPage === pages.length"
      >
        <img src="@/assets/icons/arrow-right.svg" alt="" />
      </button>
    </nav>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import arrowDown from '@/assets/icons/arrow-down.svg'
import arrowUp from '@/assets/icons/arrow-up.svg'

const transactions = ref([
  { id: 1, type: 'deposit', icon: arrowDown , date: '۱۴۰۱/۰۸/۰۱، ۱۲:۴۴', amount: '۲۱٬۲۰۰٬۰۰۰' },
  { id: 2, type: 'deposit', icon: arrowDown , date: '۱۴۰۱/۰۸/۰۱، ۱۲:۴۴', amount: '۲۱٬۲۰۰٬۰۰۰' },
  { id: 3, type: 'withdraw', icon: arrowUp , date: '۱۴۰۱/۰۸/۰۱، ۱۲:۴۴', amount: '۲۱٬۲۰۰٬۰۰۰' },
  { id: 4, type: 'deposit', icon: arrowDown , date: '۱۴۰۱/۰۸/۰۱، ۱۲:۴۴', amount: '۲۱٬۲۰۰٬۰۰۰' },
  { id: 5, type: 'withdraw', icon: arrowUp , date: '۱۴۰۱/۰۸/۰۱، ۱۲:۴۴', amount: '۲۱٬۲۰۰٬۰۰۰' },
])

const pages = ref([1, 2, 3])
const currentPage = ref(2)
</script>

<style scoped lang="scss">
.dashboard__transactions {
  height: 520px;
  background-color: $color-white;
  border-radius: $radius-lg;
  padding: 24px 24px 14px 24px;
}
.transactions__header {
  @include flex-between;
  width: 1116px;
  height: 38px;
}
.transactions__title {
  color: $text-primary;
  font-size: $font-size-xl;

  span {
    @include text-style($font-size-md , $font-weight-400 , $text-secondary);
  }
}
.transactions__filter {
  @include flex-center($gap-md);
}
.transactions__filter-sort {
  width: 269px;
  height: 34px;
  display: flex;
  align-items: center;
  justify-content: end;
  gap: $gap-sm;

  label {
    width: 82px;
    font-size: $font-size-base;
    color: $text-secondary;
    @include flex-center($gap-xs);

    img{
      width: 14px; 
      height: 12px; 
    }
  }
}
.transactions__filter-sort select {
  width: 183px;
  height: 36px;
  border-radius: $radius-md;
  border: $border-width solid $border-color;
}
.transactions__filter-sort select::placeholder {
  @include text-style($font-size-base , $color: $text-primary , $family: $font-family-regular);
}

.transactions__filter-search {
  @include flex-center();
  width: 257px;
  height: 34px;
}
.transactions__filter-search input {
  width: 257px;
  height: 34px;
  border-top-right-radius: $radius-md;
  border-bottom-right-radius: $radius-md;
  border: $border-width solid $border-color;
  padding: 0px 8px;
}

.transactions__filter-search input::placeholder {
  @include text-style($font-size-base , $color: $text-secondary , $family: $font-family-regular);
}

.transactions__filter-search button {
  cursor: pointer;
  height: 36px;
  background-color: $control-bg;
  border-top-left-radius: 7px;
  border-bottom-left-radius: 7px;
  border: $border-width solid transparent;

  img {
    margin: 0px 0px 0px 2px;
  }
}

.transactions__table {
  width: 100%;
  height: 365px;
  border-collapse: collapse;
  margin-top: 24px;
  @include text-style($font-size-md , $font-weight-600 , $family: $font-family-regular);
}

.transactions__thead {
  background-color: $primary;
  color: $color-white;
}

.transactions__tr {
  border-radius: $radius-md;
  vertical-align: auto;
}

.transactions__th{
  height: 60px;
  text-align: center;
}

.transactions__th:first-child{
  border-top-left-radius: $radius-md;
  border-bottom-left-radius: $radius-md;
}
.transactions__th:last-child{
  border-top-right-radius: $radius-md;
  border-bottom-right-radius: $radius-md;
}

.transactions__td:nth-child(1){
  @include flex-center($gap-sm);
}

.transactions__tr:nth-child(even) {
  background-color: $surface-alt;
}

.transactions__td,
.transactions__date,
.transactions__amount,
.transactions__type {
  height: 60px;
  text-align: center;
  font-weight: $font-weight-400;
  color: $text-primary;
}

.pagination {
  margin-top: 15px;
  @include flex-center($gap-sm);

  &__page,
  &__arrow {
    width: 32px;
    height: 32px;
    border: $border-none;
    border-radius: $radius-sm;
    background-color: #f1f3f8;
    color: $text-primary;
    font-weight: $font-weight-500;
    cursor: pointer;
    @include flex-center();

    &:disabled {
      cursor: not-allowed;
      opacity: 0.5;
    }
  }

  &__page--active {
    background-color: $primary;
    color: $color-white;
  }

  &__arrow {
    background-color: $color-white;
    border: $border-width solid $border-color;
    font-weight: $font-weight-700;
  }

  &__arrow--prev,
  &__arrow--next {
    width: 36px;
    height: 36px;
  }
}
</style>