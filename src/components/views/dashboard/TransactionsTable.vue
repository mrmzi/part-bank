<template>
  <section class="dashboard__transactions">
    <div class="transactions__header">
      <h3 class="transactions__title">لیست تراکنش ها <span>(ریال)</span></h3>
      <div class="transactions__filter">
        <div class="transactions__filter-sort">
          <label for="sortBox">مرتب سازی:</label>
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
        <tr class="transactions__tr">
          <td class="transactions__type transactions__type--deposit">واریز</td>
          <td class="transactions__date">۱۴۰۱/۰۸/۰۱، ۱۲:۴۴</td>
          <td class="transactions__amount">۲۱٬۲۰۰٬۰۰۰</td>
        </tr>
        <tr class="transactions__tr">
          <td class="transactions__type transactions__type--deposit">واریز</td>
          <td class="transactions__date">۱۴۰۱/۰۸/۰۱، ۱۲:۴۴</td>
          <td class="transactions__amount">۲۱٬۲۰۰٬۰۰۰</td>
        </tr>
        <tr class="transactions__tr">
          <td class="transactions__type transactions__type--withdraw">برداشت</td>
          <td class="transactions__date">۱۴۰۱/۰۸/۰۱، ۱۲:۴۴</td>
          <td class="transactions__amount">۲۱٬۲۰۰٬۰۰۰</td>
        </tr>
        <tr class="transactions__tr">
          <td class="transactions__type transactions__type--deposit">واریز</td>
          <td class="transactions__date">۱۴۰۱/۰۸/۰۱، ۱۲:۴۴</td>
          <td class="transactions__amount">۲۱٬۲۰۰٬۰۰۰</td>
        </tr>
        <tr class="transactions__tr">
          <td class="transactions__type transactions__type--withdraw">برداشت</td>
          <td class="transactions__date">۱۴۰۱/۰۸/۰۱، ۱۲:۴۴</td>
          <td class="transactions__amount">۲۱٬۲۰۰٬۰۰۰</td>
        </tr>
      </tbody>
    </table>
  </section>
</template>

<script></script>

<style scoped>
.dashboard__transactions {
  height: 520px;
  background-color: #ffffff;
  border-radius: 12px;
  padding: 24px 24px 16px 24px;
}
.transactions__header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 1116px;
  height: 38px;
}
.transactions__title {
  color: #3c4351;
  font-size: 20px;

  span {
    color: #8999b9;
    font-size: 16px;
    font-weight: 400;
  }
}
.transactions__filter {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 13px;
}
.transactions__filter-sort {
  width: 269px;
  height: 34px;
  display: flex;
  align-items: center;
  justify-content: end;
  gap: 8px;

  label {
    font-size: 14px;
    color: #8999b9;
  }
}
.transactions__filter-sort select {
  width: 183px;
  height: 34px;
  border-radius: 8px;
  border: 1px solid #e2edff;
}
.transactions__filter-sort select::placeholder {
  color: #3c4351;
  font-size: 14px;
  font-family: 'peyda-regular';
}

.transactions__filter-search {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 257px;
  height: 34px;
}
.transactions__filter-search input {
  width: 257px;
  height: 34px;
  border-top-right-radius: 8px;
  border-bottom-right-radius: 8px;
  border: 1px solid #e2edff;
  padding: 0px 8px;
}

.transactions__filter-search input::placeholder {
  color: #8999b9;
  font-size: 14px;
  font-family: 'peyda-regular';
}

.transactions__filter-search button {
  cursor: pointer;
  height: 36px;
  background-color: #eceef6;
  border-top-left-radius: 7px;
  border-bottom-left-radius: 7px;
  border: 1px solid transparent;

  img {
    margin: 0px 0px 0px 2px;
  }
}

.transactions__table {
  width: 100%;
  height: 365px;
  border-collapse: collapse;
  margin-top: 30px;
  font-size: 16px;
  font-weight: 600;
  font-family: 'peyda-regular';
}

.transactions__thead {
  background-color: #4152a0;
  color: #fff;
}

.transactions__th {
  height: 60px;
  text-align: center;
}

.transactions__tr:nth-child(even) {
  border-radius: 8px;
  background-color: #f9fafb;
}

.transactions__td,
.transactions__date,
.transactions__amount,
.transactions__type {
  height: 60px;
  text-align: center;
  font-weight: 400;
  color: #3c4351;
}
</style>
