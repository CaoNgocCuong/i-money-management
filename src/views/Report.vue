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
          v-for="transaction in transactionsFiltered"
          :key="transaction.id"
          class="transaction flex items-center bg-white rounded-lg p-4 mb-3 shadow-md"
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
      transactions.value = await getRecordsTransaction();

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
      categories.value = await getRecords();
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
  max-width: 140px;
  overflow: hidden;
  line-height: 24px;
  height: 24px;
}
</style>
