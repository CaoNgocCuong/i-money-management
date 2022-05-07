<template>
  <Loading v-if="isPending" />

  <div v-else class="container mx-auto px-8">
    <div class="total p-8 bg-gray-100 border rounded-lg cursor-not-allowed">
      <p class="font-semibold text-gray-500 text-2xl text-center">
        Total Available Amount
      </p>
      <h2
        class="flex items-center justify-center py-4 text-primary text-3xl font-semibold"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-10 w-10 mr-3"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          stroke-width="2"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"
          />
        </svg>
        {{ total ? $filter.formatNumber(total) : $filter.formatNumber(0) }}
      </h2>
    </div>
    <section>
      <h3 class="text-2xl text-center text-primary font-semibold py-7">
        Recent Transaction
      </h3>
      <div class="transaction-today">
        <h5 class="text-gray-400 text-lg font-semibold">Today</h5>
        <div
          v-if="transactionsToday.length === 0"
          class="transactions-wrap mt-2 max-h-[300px] overflow-y-auto"
        >
          <h3
            class="bg-white p-8 text-center text-sm font-semibold text-red rounded-lg"
          >
            <router-link
              :to="{ name: 'NewTransaction', params: {} }"
              class="flex items-center justify-center"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6 mr-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              There are no transactions here. <br />
              Let's add a new transaction.
            </router-link>
          </h3>
        </div>
        <div
          v-else
          class="transactions-wrap mt-2 max-h-[300px] overflow-y-auto"
        >
          <div
            v-for="transaction in transactionsToday"
            :key="transaction.id"
            class="transaction relative flex items-center bg-white rounded-lg p-4 mb-3 shadow-md overflow-hidden cursor-pointer"
          >
            <div class="img h-10 w-10 overflow-hidden mr-4">
              <img
                v-if="transaction.image"
                class="w-full h-full object-cover rounded-full"
                :src="transaction.image"
                alt="transaction's image"
              />
              <span
                v-else
                class="inline-block h-full w-full bg-slate-500 rounded-full"
              ></span>
            </div>
            <div class="transaction-info flex-1">
              <div
                class="transaction-info__top flex justify-between items-center mb-1"
              >
                <span class="over-text font-bold text-dark text-lg">{{
                  transaction.note
                }}</span>
                <span class="text-red font-semibold text-lg"
                  >- {{ $filter.formatNumber(transaction.total) }}
                </span>
              </div>
              <div
                class="transaction-info__bottom flex items-center justify-between text-md font-light text-gray-400"
              >
                <span class="over-text">{{ transaction.location }}</span>
                <span>{{
                  $moment(
                    `${transaction.time.toDate().toDateString()}`
                  ).fromNow()
                }}</span>
              </div>
            </div>
            <div
              class="overlay absolute top-0 right-0 bottom-0 transform translate-y-full left-0 text-dark font-semibold bg-slate-200 opacity-95 flex items-center justify-center"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6 mr-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z"
                />
              </svg>
              {{ transaction.walletType }}
            </div>
          </div>
        </div>
      </div>
      <div class="transaction-yesterday mt-4 mb-32">
        <h5 class="text-gray-400 text-lg font-semibold">Yesterday</h5>
        <div
          v-if="transactionsYesterday.length === 0"
          class="transactions-wrap mt-2 max-h-[300px] overflow-y-auto"
        >
          <h3
            class="bg-white p-8 text-center text-sm font-semibold text-red rounded-lg"
          >
            <router-link
              :to="{ name: 'NewTransaction', params: {} }"
              class="flex items-center justify-center"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6 mr-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              There are no transactions here. <br />
              Let's add a new transaction.
            </router-link>
          </h3>
        </div>
        <div
          v-else
          class="transactions-wrap mt-2 max-h-[300px] overflow-y-auto"
        >
          <div
            v-for="transaction in transactionsYesterday"
            :key="transaction.id"
            class="transaction relative flex items-center bg-white rounded-lg p-4 mb-3 shadow-md overflow-hidden cursor-pointer"
          >
            <div class="img h-10 w-10 overflow-hidden mr-4">
              <img
                v-if="transaction.image"
                class="w-full h-full object-cover rounded-full"
                :src="transaction.image"
                alt="transaction's image"
              />
              <span
                v-else
                class="inline-block h-full w-full bg-slate-500 rounded-full"
              ></span>
            </div>
            <div class="transaction-info flex-1">
              <div
                class="transaction-info__top flex justify-between items-center mb-1"
              >
                <span class="over-text font-bold text-dark text-lg">{{
                  transaction.note
                }}</span>
                <span class="text-red font-semibold text-lg"
                  >- {{ $filter.formatNumber(transaction.total) }}
                </span>
              </div>
              <div
                class="transaction-info__bottom flex items-center justify-between text-md font-light text-gray-400"
              >
                <span class="over-text">{{ transaction.location }}</span>
                <span>{{
                  $moment(transaction.time.toDate().toDateString()).fromNow()
                }}</span>
              </div>
            </div>
            <div
              class="overlay absolute top-0 right-0 bottom-0 transform translate-y-full left-0 text-dark font-semibold bg-slate-200 opacity-95 flex items-center justify-center"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6 mr-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z"
                />
              </svg>
              {{ transaction.walletType }}
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { ref } from "vue";

import { useUser } from "@/composables/useUser";
import useCollection from "@/composables/useCollection";
import Loading from "@/components/Loading.vue";

export default {
  name: "HomeView",
  components: { Loading },
  setup() {
    const { getUser } = useUser();
    const { user } = getUser();

    const { error, isPending, getRecords } = useCollection("wallets");
    const { getRecords: getTransactions } = useCollection("transactions");

    const total = ref(0);
    const transactionsToday = ref([]);
    const transactionsYesterday = ref([]);

    async function getTotalWallets() {
      total.value = 0;

      const dataSnapShot = await getRecords();

      dataSnapShot.filter((wallet) => {
        if (user.value.uid === wallet.userId) {
          total.value += wallet.amount;
        }
      });
    }
    getTotalWallets();

    async function getTransactionsRecent() {
      const date = new Date();
      const fullYearCurrent = date.getFullYear();
      const monthCurrent = date.getUTCMonth() + 1;
      const dateCurrent = date.getDate();

      const data = await getTransactions();

      data.forEach((transaction) => {
        if (transaction.userId === user.value.uid) {
          const timeSnapShot = new Date(transaction.time.seconds * 1000);
          const fullYearSnapShot = timeSnapShot.getFullYear();
          const monthSnapShot = timeSnapShot.getMonth() + 1;
          const dateSnapShot = timeSnapShot.getDate();

          if (
            fullYearCurrent === fullYearSnapShot &&
            monthCurrent === monthSnapShot &&
            dateCurrent === dateSnapShot
          ) {
            transactionsToday.value.push(transaction);
          } else if (
            fullYearCurrent === fullYearSnapShot &&
            monthCurrent === monthSnapShot &&
            dateCurrent - 1 === dateSnapShot
          ) {
            transactionsYesterday.value.push(transaction);
          }
        }
      });
    }

    getTransactionsRecent();

    return {
      user,
      total,
      error,
      isPending,
      transactionsToday,
      transactionsYesterday,
    };
  },
};
</script>
<style scoped>
.over-text {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
  max-width: 120px;
  overflow: hidden;
  line-height: 24px;
  height: 24px;
}

.transaction:hover .overlay {
  transition: all 0.5s ease;
  transform: translateY(0);
}
</style>
