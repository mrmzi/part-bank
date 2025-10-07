<script setup>
import arrowDown from '@/assets/icons/arrow-down.svg'
import arrowUp from '@/assets/icons/arrow-up.svg'
import BaseButton from '@/components/base/BaseButton.vue'
import { fetchTransactions } from '@/services/getTransactions'
import { useFormStore } from '@/stores/formStore'
import { ref, onMounted, computed } from 'vue'

const currentPage = ref(1)
const rowsPerPage = 5
const transactions = ref([])
const formStore = useFormStore()
const isFormSubmitted = formStore.isSubmitted
onMounted(async () => {
  if (isFormSubmitted) {
    transactions.value = await fetchTransactions()
  }
})

const pages = computed(() =>
  transactions.value.length
    ? Array.from({ length: Math.ceil(transactions.value.length / rowsPerPage) }, (_, i) => i + 1)
    : [],
)

const cuttedTransactions = computed(() => {
  const start = (currentPage.value - 1) * rowsPerPage
  const end = start + rowsPerPage
  return sortedTransactions.value.slice(start, end)
})

const nextPage = () => {
  if (currentPage.value < pages.value.length) currentPage.value++
}
const prevPage = () => {
  if (currentPage.value > 1) currentPage.value--
}

const sortKey = ref('all')

const sortedTransactions = computed(() => {
  return [...transactions.value].sort((a, b) => {
    if (sortKey.value === 'type') {
      return a.type.localeCompare(b.type)
    }
    if (sortKey.value === 'date') {
      return new Date(b.date) - new Date(a.date)
    }
    if (sortKey.value === 'amount') {
      return b.amount - a.amount
    }
    if (sortKey.value === 'all') {
      return transactions.value
    }
    return 0
  })
})
</script>

<template>
  <section class="dashboard__transactions">
    <div class="transactions__header">
      <h3 class="transactions__title">لیست تراکنش ها <span>(ریال)</span></h3>
      <div class="transactions__filter">
        <div class="transactions__filter-sort">
          <label for="sortBox"
            ><img src="@/assets/icons/arrow-sort.svg" alt="sort icon" /> مرتب سازی:</label
          >
          <select v-model="sortKey" id="sortBox">
            <option value="all">همه</option>
            <option value="type">نوع تراکنش</option>
            <option value="date">تاریخ تراکنش</option>
            <option value="amount">مبلغ تراکنش</option>
          </select>
        </div>
        <div class="transactions__filter-search">
          <input type="search" class="transactions__searchInput" placeholder="جستجو" />
          <button>
            <img src="@/assets/icons/Search.svg" alt="Search Icon" />
          </button>
        </div>
      </div>
    </div>

    <table v-if="isFormSubmitted" class="transactions__table">
      <thead class="transactions__thead">
        <tr class="transactions__tr">
          <th class="transactions__th">نوع تراکنش</th>
          <th class="transactions__th">تاریخ و ساعت تراکنش</th>
          <th class="transactions__th">مبلغ تراکنش</th>
        </tr>
      </thead>
      <tbody class="transactions__tbody">
        <tr v-for="tx in cuttedTransactions" :key="tx.id" class="transactions__tr">
          <td class="transactions__td">
            <img :src="tx.type === 'deposit' ? arrowDown : arrowUp" alt="transaction icon" />
            {{ tx.type === 'deposit' ? 'واریز' : 'برداشت' }}
          </td>
          <td class="transactions__td">{{ tx.date }}</td>
          <td class="transactions__td">{{ tx.amount }}</td>
        </tr>
      </tbody>
    </table>

    <nav v-if="isFormSubmitted" class="pagination">
      <button
        class="pagination__arrow pagination__arrow--next"
        :disabled="currentPage === 1"
        @click="prevPage"
      >
        <img src="@/assets/icons/arrow-right.svg" alt="" />
      </button>

      <button
        v-for="page in pages"
        :key="page"
        @click="currentPage = page"
        :class="['pagination__page', { 'pagination__page--active': page === currentPage }]"
        :style="`background-color: ${page === currentPage ? '#4152a0' : ''}`"
      >
        {{ page }}
      </button>

      <button
        class="pagination__arrow pagination__arrow--prev"
        :disabled="currentPage === pages.length"
        @click="nextPage"
      >
        <img src="@/assets/icons/arrow-left.svg" alt="" />
      </button>
    </nav>
  </section>
</template>

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
  @include text-style($font-size-xl, $font-weight-700, $text-primary);

  span {
    @include text-style($font-size-md, $font-weight-400, $text-secondary);
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

    img {
      width: 14px;
      height: 12px;
    }
  }
}

.transactions__filter-sort select {
  width: 183px;
  height: 34px;
  border-radius: $radius-md;
  border: $border-width solid $border-color;
}

.transactions__filter-sort select::placeholder {
  @include text-style($font-size-base, $color: $text-primary, $family: $font-family-regular);
}

.transactions__filter-search {
  @include flex-center();
  width: 257px;
  height: 34px;

  .transactions__searchInput {
    width: 257px;
    height: 34px;
    border-top-right-radius: $radius-md;
    border-bottom-right-radius: $radius-md;
    padding: 0px 8px;
    background-color: transparent;
    border: 1px solid #eeeeee;

    &::placeholder {
      @include text-style($font-size-base, $color: $text-secondary, $family: $font-family-regular);
    }
  }
  input {
    width: 257px;
    height: 34px;
    border-top-right-radius: $radius-md;
    border-bottom-right-radius: $radius-md;
    padding: 0px 8px;

    &::placeholder {
      @include text-style($font-size-base, $color: $text-secondary, $family: $font-family-regular);
    }
  }

  button {
    cursor: pointer;
    @include flex-center();
    height: 34px;
    background-color: $control-bg;
    border-top-left-radius: 7px;
    border-bottom-left-radius: 7px;
    border: $border-width solid transparent;

    img {
      margin: 0px 0px 0px 2px;
    }
  }
}

.transactions__table {
  width: 100%;
  height: 365px;
  border-collapse: collapse;
  margin-top: 24px;
  @include text-style($font-size-md, $font-weight-600, $family: $font-family-regular);
}

.transactions__thead {
  background-color: $primary;
  color: $color-white;
}

.transactions__tr {
  border-radius: $radius-md;
  vertical-align: auto;
}

.transactions__th {
  height: 60px;
  text-align: center;

  &:first-child {
    border-top-right-radius: $radius-md;
    border-bottom-right-radius: $radius-md;
  }

  &:last-child {
    border-top-left-radius: $radius-md;
    border-bottom-left-radius: $radius-md;
  }
}

.transactions__td:nth-child(1) {
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
  @include flex-center($gap-md);

  &__page,
  &__arrow {
    width: 32px;
    height: 32px;
    border: $border-none;
    border-radius: 4px;
    padding: 4px;
    background-color: #f1f3f8;
    @include text-style(
      $size: $font-size-base,
      $weight: $font-weight-600,
      $color: $text-secondary,
      $family: $font-family-semi-bold
    );
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
    background-color: #f1f3f8;
    font-weight: $font-weight-700;
  }

  &__arrow--prev,
  &__arrow--next {
    width: 32px;
    height: 32px;
  }
}
</style>
