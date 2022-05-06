<template>
  <div class="container mx-auto px-8">
    <ul v-if="categories" class="cate-list max-h-[450px] overflow-y-auto">
      <li
        v-for="cate in categories"
        :key="cate.id"
        @click="handleSetCate(cate)"
        class="flex items-center p-4 bg-white rounded-lg mb-5 shadow-md cursor-pointer"
      >
        <div
          class="cate-icon-circle w-8 h-8 rounded-full bg-slate-500 mr-4"
        ></div>
        <div class="text-lg font-bold text-dark">{{ cate.name }}</div>
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
    </form>
  </div>
</template>
<script>
import { ref, watchEffect } from "vue";

import useCollection from "@/composables/useCollection";
import Loading from "@/components/Loading.vue";

export default {
  name: "Category",
  components: {
    Loading,
  },
  setup() {
    const { error, isPending, addRecord, getRecords, updateRecord } =
      useCollection("categories");

    const isLoading = ref(true);
    const isUpdateCate = ref(null);
    const title = ref("");
    const cateId = ref("");
    const categories = ref([]);

    function handleSetCate(cate) {
      cateId.value = cate.id;
      title.value = cate.name;
      isUpdateCate.value = true;
    }

    async function getCategories() {
      categories.value = await getRecords();

      isLoading.value = false;
    }

    getCategories();

    async function handleCreateCategory() {
      isLoading.value = true;

      await addRecord({
        name: title.value,
      });

      getCategories();

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

    function reset() {
      title.value = "";
      isUpdateCate.value = false;
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
    };
  },
};
</script>

<style scoped>
ul.cate-list li:nth-child(3n) .cate-icon-circle {
  background-color: aqua;
}

ul.cate-list li:nth-child(3n + 1) .cate-icon-circle {
  background-color: burlywood;
}
</style>
