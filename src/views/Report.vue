<template>
  <div class="container mx-auto px-8">
    <h3 class="font-bold text-primary text-xl text-center uppercase">
      Detail Transaction
    </h3>
    <div class="categories">
      <ul class="flex items-center mt-4 flex-nowrap overflow-x-scroll py-4">
        <li>
          <span
            @click="cateId = ''"
            class="inline-block whitespace-nowrap px-4 py-2 bg-white text-gray-500 font-semibold text-lg rounded-lg cursor-pointer"
            >All</span
          >
        </li>
        <li v-for="cate in categories" :key="cate.id">
          <span
            @click="cateId = cate.id"
            class="inline-block whitespace-nowrap px-4 py-2 bg-white text-gray-500 font-semibold text-lg rounded-lg cursor-pointer"
            >{{ cate.name }}</span
          >
        </li>
      </ul>
    </div>
    <div class="transactions-wrap mt-4 max-h-[525px] overflow-y-auto">
      <div
        v-for="transaction in transactionsFiltered"
        :key="transaction.id"
        class="transaction flex items-center bg-white rounded-lg p-4 mb-3"
      >
        <div class="img h-10 w-10 overflow-hidden mr-4">
          <img
            class="w-full h-full object-cover rounded-full"
            :src="transaction.image"
            alt="transaction's image"
          />
        </div>
        <div class="transaction-info flex-1">
          <div
            class="transaction-info__top flex justify-between items-center mb-1"
          >
            <span class="over-text font-bold text-dark text-lg">{{
              transaction.note
            }}</span>
            <span class="text-red font-semibold text-lg"
              >- {{ transaction.total }} VNĐ</span
            >
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
      </div>
    </div>
  </div>
</template>

<script>
import { computed, ref } from "vue";
import useCollection from "@/composables/useCollection";

export default {
  name: "Report",
  setup() {
    const { error, getRecords } = useCollection("categories");
    const { getRecords: getRecordsTransaction } = useCollection("transactions");

    const categories = ref([]);
    const transactions = ref([]);
    const cateId = ref("");

    async function getTransactions() {
      transactions.value = await getRecordsTransaction();
    }

    getTransactions();

    const transactionsFiltered = computed(() => {
      return transactions.value.filter((transaction) =>
        transaction.cateId.includes(cateId.value)
      );
    });

    async function getCategories() {
      categories.value = await getRecords();
    }

    getCategories();

    return {
      error,
      cateId,
      categories,
      transactionsFiltered,
    };
  },
};
</script>

<style scoped>
.categories ul li:not(:last-child) {
  margin-right: 8px;
}

.over-text {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
  max-width: 140px;
  overflow: hidden;
  line-height: 24px;
  height: 24px;
}
</style>
