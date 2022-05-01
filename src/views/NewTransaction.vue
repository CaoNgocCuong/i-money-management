<template>
  <form @submit.prevent="onSubmit">
    <!-- Start: Main Form -->
    <div class="row mt-8">
      <div class="bg-white rounded-lg py-8">
        <div class="container mx-auto px-8">
          <div class="row">
            <label for="total" class="flex items-end">
              <div class="w-10 text-right leading-10 mr-4 pb-1">
                <span
                  class="inline-block px-1 text-dark border-dark border rounded text-sm font-bold"
                  >USD</span
                >
              </div>
              <div class="flex flex-col border-b border-gray-100 pb-1">
                <span class="font-semibold text-xs text-dark">Total</span>
                <input
                  class="text-4xl text-dark w-full outline-none mt-1"
                  type="number"
                  placeholder="0"
                  id="total"
                  v-model="total"
                />
              </div>
            </label>
          </div>
          <div class="row">
            <label for="category" class="flex items-center">
              <div
                class="flex flex-none items-center w-10 text-right leading-10 mr-4"
              >
                <span
                  class="inline-block ml-auto rounded-full bg-blue-300 w-8 h-8"
                ></span>
              </div>
              <div class="flex-1 border-b border-gray-100 py-3">
                <input
                  class="text-xl text-dark w-full outline-none"
                  type="text"
                  placeholder="Select a category"
                  id="category"
                  v-model="category"
                />
              </div>
            </label>
          </div>
          <div class="row">
            <label for="note" class="flex items-center">
              <div
                class="flex flex-none items-center w-10 text-right leading-10 mr-4"
              >
                <span class="flex-none w-10 mr-4"
                  ><i class="t2ico t2ico-document text-2xl"></i
                ></span>
              </div>
              <div class="flex-1 border-b border-gray-100 py-3">
                <input
                  class="text-dark w-full outline-none"
                  type="text"
                  placeholder="Note something..."
                  id="note"
                  v-model="note"
                />
              </div>
            </label>
          </div>
          <div class="row">
            <label for="time" class="flex items-center">
              <div class="flex-none w-10 mr-4">
                <span class="flex items-center justify-end text-dark"
                  ><i class="t2ico t2ico-calendar text-2xl"></i
                ></span>
              </div>
              <div class="flex-1 border-gray-100 border-b py-3">
                <div class="text-dark w-full">{{ new Date() }}</div>
              </div>
            </label>
          </div>
          <div class="row">
            <label for="wallet" class="flex items-center">
              <div class="flex-none w-10 mr-4">
                <span class="flex items-center justify-end text-dark"
                  ><i class="t2ico t2ico-wallet text-2xl"></i
                ></span>
              </div>
              <div class="flex-1 py-2">
                <div class="text-dark w-full">My wallet</div>
              </div>
            </label>
          </div>
        </div>
      </div>
    </div>

    <div class="row mt-8" v-if="!isMoreDetails">
      <button
        @click="isMoreDetails = true"
        class="bg-white rounded-lg w-full py-3 text-primary font-semibold"
      >
        More Details
      </button>
    </div>

    <button type="submit" class="w-full text-white p-4 mx-auto bg-sky-400">
      Testing submit form
    </button>

    <template v-if="isMoreDetails">
      <!-- Start: Advanced Form  -->
      <div class="row mt-8">
        <div class="bg-white rounded-lg py-8">
          <div class="container mx-auto px-8">
            <div class="row">
              <label for="location" class="flex items-center">
                <div
                  class="flex flex-none items-center w-10 text-right leading-10 mr-4"
                >
                  <span class="flex-none w-10 mr-4"
                    ><i class="t2ico t2ico-location text-2xl"></i
                  ></span>
                </div>
                <div class="flex-1 border-b border-gray-100 py-3">
                  <input
                    class="text-dark w-full outline-none"
                    type="text"
                    placeholder="Type a location..."
                    id="location"
                  />
                </div>
              </label>
            </div>
            <div class="row">
              <label for="person" class="flex items-center">
                <div class="flex-none w-10 mr-4">
                  <span class="flex items-center justify-end text-dark"
                    ><i class="t2ico t2ico-users text-2xl"></i
                  ></span>
                </div>
                <div class="flex-1 py-2">
                  <input
                    class="text-dark w-full outline-none"
                    type="text"
                    placeholder="With person..."
                    id="person"
                  />
                </div>
              </label>
            </div>
          </div>
        </div>
      </div>

      <!-- Start: Upload File  -->
      <div class="row mt-8">
        <div class="bg-white rounded-lg py-8">
          <div class="container mx-auto px-8">
            <div class="row">
              <label for="uploadFile" class="flex items-center text-primary">
                <div class="flex-none w-10 mr-4">
                  <span class="flex items-center justify-end"
                    ><i class="t2ico t2ico-camera text-2xl"></i
                  ></span>
                </div>
                <div class="flex-1 py-2">
                  <div class="w-full font-semibold">Upload photos.</div>
                  <input
                    type="file"
                    id="uploadFile"
                    class="w-0 h-0 overflow-hidden absolute"
                    @change="onChangeFile"
                  />
                </div>
              </label>
            </div>
          </div>
        </div>
        <div class="text-red text-center py-3">{{ errorFile }}</div>
      </div>
    </template>
  </form>
</template>
<script>
import { ref } from "vue";

import { useUser } from "@/composables/useUser";
import useCollection from "@/composables/useCollection";

export default {
  name: "New Transaction",
  setup() {
    const { getUser } = useUser();
    const { error, addRecord } = useCollection("transactions");

    const isMoreDetails = ref(false);
    const total = ref(0);
    const category = ref("");
    const note = ref("");
    const time = ref(new Date());
    const file = ref(null);
    const errorFile = ref(null);

    function onChangeFile(event) {
      const selected = event.target.files[0];
      const typesFile = ["image/png", "image/jpg", "image/jpeg"];

      if (selected && typesFile.includes(selected.type)) {
        file.value = selected;
      } else {
        file.value = null;
        errorFile.value = "Please choose a file type PNG or JPG.";
      }
    }

    async function onSubmit() {
      const { user } = getUser();

      const transaction = {
        total: parseInt(total.value),
        category: category.value,
        note: note.value,
        time: time.value,
        userId: user.value.uid,
      };

      await addRecord(transaction);

      console.log(error);
      console.log("Created");
    }

    return {
      total,
      category,
      note,
      time,
      errorFile,
      isMoreDetails,
      onChangeFile,
      onSubmit,
    };
  },
};
</script>
