<template>
  <div class="container mx-auto px-8">
    <h3 class="font-bold text-primary text-xl text-center uppercase">
      Detail Transaction
    </h3>
    <Loading v-if="isLoading" />
    <div v-else class="report-wrap relative">
      <div class="categories">
        <ul class="flex items-center mt-4 flex-nowrap overflow-x-scroll py-4">
          <li>
            <span
              @click="handleActiveCate($event, '')"
              class="cate active inline-block whitespace-nowrap px-4 py-2 bg-white text-gray-500 font-semibold text-lg rounded-lg cursor-pointer"
              >All</span
            >
          </li>
          <li v-for="cate in categories" :key="cate.id">
            <span
              @click="handleActiveCate($event, cate.id)"
              class="cate inline-block whitespace-nowrap px-4 py-2 bg-white text-gray-500 font-semibold text-lg rounded-lg cursor-pointer"
              >{{ cate.name }}</span
            >
          </li>
        </ul>
      </div>
      <div class="transactions-wrap mt-4 max-h-[525px] overflow-y-auto">
        <div
          v-if="transactionsFiltered.length === 0"
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
          v-for="transaction in transactionsFiltered"
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
                >-
                {{ $filter.formatNumber(transaction.total) }}
              </span>
            </div>
            <div
              class="transaction-info__bottom flex items-center justify-between text-md font-light text-gray-400"
            >
              <span class="over-text">{{ transaction.location }}</span>
              <span>{{
                $moment(`${transaction.time.toDate().toDateString()}`).fromNow()
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
  </div>
</template>

<script>
import { computed, ref } from "vue";
import useCollection from "@/composables/useCollection";
import { useUser } from "@/composables/useUser";
import Loading from "@/components/Loading.vue";

export default {
  name: "Report",
  components: {
    Loading,
  },
  setup() {
    const { error, getRecords } = useCollection("categories");
    const { getRecords: getRecordsTransaction } = useCollection("transactions");
    const { getUser } = useUser();
    const { user } = getUser();

    const categories = ref([]);
    const transactions = ref([]);
    const cateId = ref("");
    const isLoading = ref(true);

    async function getTransactions() {
      transactions.value = [];

      const transactionsSnapShot = await getRecordsTransaction();

      transactionsSnapShot.forEach((transaction) => {
        if (user.value.uid === transaction.userId) {
          transactions.value.push(transaction);
        }
      });

      isLoading.value = false;
    }

    getTransactions();

    const transactionsFiltered = computed(() => {
      return transactions.value.filter(
        (transaction) =>
          transaction.cateId.includes(cateId.value) &&
          transaction.userId === user.value.uid
      );
    });

    async function getCategories() {
      categories.value = [];

      const categoriesSnapShot = await getRecords();

      categoriesSnapShot.forEach((cate) => {
        if (cate.userId === user.value.uid) {
          categories.value.push(cate);
        }
      });

      isLoading.value = false;
    }

    getCategories();

    function handleActiveCate(event, cateIdParam) {
      cateId.value = cateIdParam;
      const cateListEle = document.querySelectorAll(".categories .cate");

      cateListEle.forEach((cate) => {
        cate.classList.remove("active");
      });

      event.target.classList.add("active");
    }

    return {
      error,
      cateId,
      categories,
      isLoading,
      transactionsFiltered,
      handleActiveCate,
    };
  },
};
</script>

<style scoped>
.categories ul li:not(:last-child) {
  margin-right: 8px;
}

.categories ul li span.cate.active {
  background-color: rgb(0, 18, 255);
  color: rgb(235, 235, 235);
}

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
