<template>
  <div class="container mx-auto px-8">
    <ul v-if="categories" class="cate-list max-h-[450px] overflow-y-auto">
      <li
        v-for="cate in categories"
        :key="cate.id"
        class="flex items-center p-4 bg-white rounded-lg mb-5 shadow-md"
      >
        <div
          class="cate-icon-circle w-8 h-8 rounded-full bg-slate-500 mr-4"
        ></div>
        <div class="text-lg font-bold text-dark">{{ cate.name }}</div>
      </li>
    </ul>
    <form @submit.prevent="onSubmit" class="mt-4">
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
      <div class="bg-white rounded-lg p-3 mt-3">
        <button
          type="submit"
          class="flex items-center text-primary font-semibold text-lg"
        >
          <i
            class="t2ico t2ico-plus flex items-center justify-center w-8 h-8 text-xl p-2 mr-4 bg-primary text-white rounded-full"
          ></i>
          Add new category
        </button>
      </div>
    </form>
  </div>
</template>
<script>
import { ref } from "vue";

import useCollection from "@/composables/useCollection";

export default {
  name: "Category",
  setup() {
    const title = ref("");
    const categories = ref([]);

    const { error, addRecord, getRecords } = useCollection("categories");

    async function getCategories() {
      categories.value = await getRecords();
    }

    getCategories();

    async function onSubmit() {
      const response = await addRecord({
        name: title.value,
      });

      getCategories();

      console.log(response);
    }

    return {
      title,
      error,
      categories,
      onSubmit,
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
