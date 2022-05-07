<template>
  <div class="container mx-auto px-8">
    <ul class="cate-list max-h-[450px] overflow-y-auto">
      <li v-if="categories.length === 0">
        <div class="transactions-wrap mt-2">
          <h3
            class="flex items-center justify-center bg-white p-6 text-center font-semibold text-red rounded-lg cursor-not-allowed"
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
                d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            No categories available here.
          </h3>
        </div>
      </li>
      <li
        v-else
        v-for="cate in categories"
        :key="cate.id"
        @click="handleSetCate($event, cate)"
        class="category flex items-center p-4 bg-white rounded-lg mb-5 shadow-md cursor-pointer"
      >
        <div
          class="cate-icon-circle w-8 h-8 rounded-full bg-slate-500 mr-4 pointer-events-none"
        ></div>
        <div class="text-lg font-bold text-dark pointer-events-none">
          {{ cate.name }}
        </div>
      </li>
    </ul>
    <form class="mt-4">
      <div class="row">
        <label for="cateName">
          <span class="block font-semibold text-dark text-xl">Title</span>
          <input
            class="outline-none p-4 w-full rounded-lg text-lg"
            type="text"
            id="cateName"
            placeholder="Type a title for category..."
            v-model="title"
          />
        </label>
      </div>
      <div v-if="error" class="text-red text-center text-lg">{{ error }}</div>
      <Loading v-if="isLoading" />
      <div v-else class="bg-white rounded-lg p-3 mt-3">
        <button
          v-if="!isPending && !isUpdateCate"
          @click.prevent="handleCreateCategory"
          class="flex items-center w-full text-primary font-semibold text-lg cursor-pointer"
        >
          <i
            class="t2ico t2ico-plus flex items-center justify-center w-8 h-8 text-xl p-2 mr-4 bg-primary text-white rounded-full"
          ></i>
          Add new category
        </button>
        <button
          v-else
          @click.prevent="handleUpdateCategory"
          class="flex items-center w-full text-primary font-semibold text-lg cursor-pointer"
        >
          <i
            class="t2ico t2ico-plus flex items-center justify-center w-8 h-8 text-xl p-2 mr-4 bg-primary text-white rounded-full"
          ></i>
          Update category
        </button>
      </div>
      <div class="row rounded-lg mt-4 p-3 bg-white">
        <button
          @click.prevent="handleDeleteCategory"
          class="flex items-center w-full text-red font-semibold text-lg cursor-pointer"
        >
          <div
            class="flex items-center justify-center w-8 h-8 bg-red text-white p-2 rounded-full mr-4"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
              />
            </svg>
          </div>
          Delete category
        </button>
      </div>
    </form>
  </div>
</template>
<script>
import { ref, watchEffect } from "vue";

import useCollection from "@/composables/useCollection";
import { useUser } from "@/composables/useUser";
import Loading from "@/components/Loading.vue";

export default {
  name: "Category",
  components: {
    Loading,
  },
  setup() {
    const {
      error,
      isPending,
      addRecord,
      getRecords,
      updateRecord,
      deleteRecordById,
    } = useCollection("categories");

    const { getUser } = useUser();
    const { user } = getUser();

    const isLoading = ref(true);
    const isUpdateCate = ref(null);
    const title = ref("");
    const cateId = ref("");
    const categories = ref([]);

    function handleSetCate(event, cate) {
      const categoriesEle = document.querySelectorAll(".cate-list .category");

      categoriesEle.forEach((cate) => {
        cate.classList.remove("active");
      });

      event.target.classList.add("active");

      cateId.value = cate.id;
      title.value = cate.name;
      isUpdateCate.value = true;
    }

    function reset() {
      title.value = "";
      isUpdateCate.value = false;
    }

    async function getCategories() {
      categories.value = [];

      const dataSnapShot = await getRecords();

      dataSnapShot.forEach((cate) => {
        if (cate.userId === user.value.uid) {
          categories.value.push(cate);
        }
      });

      isLoading.value = false;
    }

    getCategories();

    async function handleCreateCategory() {
      isLoading.value = true;

      await addRecord({
        name: title.value,
        userId: user.value.uid,
      });

      getCategories();

      reset();

      isLoading.value = false;
    }

    async function handleUpdateCategory() {
      isLoading.value = true;

      const data = {
        name: title.value,
      };

      await updateRecord(cateId.value, data);

      getCategories();

      reset();

      isLoading.value = false;
    }

    async function handleDeleteCategory() {
      isLoading.value = true;

      await deleteRecordById(cateId.value);

      getCategories();

      reset();

      isLoading.value = false;
    }

    watchEffect(() => {
      if (title.value === "") {
        isUpdateCate.value = false;
      }
    });

    return {
      title,
      error,
      categories,
      isPending,
      isUpdateCate,
      isLoading,
      handleSetCate,
      handleCreateCategory,
      handleUpdateCategory,
      handleDeleteCategory,
    };
  },
};
</script>

<style scoped>
ul.cate-list li:nth-child(3n) .cate-icon-circle {
  background-color: aqua;
}

ul.cate-list .category.active {
  @apply bg-gray-400;
}

ul.cate-list li:nth-child(3n + 1) .cate-icon-circle {
  background-color: burlywood;
}
</style>
