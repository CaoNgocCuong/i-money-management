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
                <select
                  id="category"
                  class="text-lg text-dark w-full outline-none"
                  v-model="category"
                  v-if="categories.length !== 0"
                >
                  <option value="" disabled>Choose a category</option>
                  <option
                    :value="cate.id"
                    v-for="cate in categories"
                    :key="cate.id"
                  >
                    {{ cate.name }}
                  </option>
                </select>
              </div>
            </label>
          </div>
          <div class="row">
            <label for="note" class="flex items-center">
              <div class="flex-none w-10 mr-4">
                <span class="flex items-center justify-end text-dark"
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
                <div class="text-dark w-full">
                  <date-picker
                    v-model="date"
                    class="w-full text-dark outline-none"
                  ></date-picker>
                </div>
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
              <select
                id="walletType"
                v-model="walletType"
                @change="handleUpdateWallet"
                v-if="wallets.length !== 0"
                class="text-dark text-lg w-full outline-none"
              >
                <option value="" disabled>Choose a wallet type</option>
                <option
                  v-for="wl in wallets"
                  :key="wl.id"
                  :value="wl.walletType"
                  :data-id="wl.id"
                >
                  {{ wl.walletType }}
                </option>
              </select>
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
                    v-model="location"
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
                    v-model="person"
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
    <div
      v-if="errorCreateTransaction"
      class="error w-full text-center text-red font-semibold p-3"
    >
      {{ errorCreateTransaction }}
    </div>
    <div class="w-full my-10 text-center">
      <Loading v-if="isLoading && !errorCreateTransaction" />
      <button
        v-else
        type="submit"
        class="w-32 h-auto text-white p-2 bg-sky-400 rounded-lg text-xl"
      >
        <i class="t2ico t2ico-plus text-3xl"></i>
      </button>
    </div>
  </form>
</template>
<script>
import { reactive, ref } from "vue";
import { useRouter } from "vue-router";

import { useUser } from "@/composables/useUser";
import useCollection from "@/composables/useCollection";
import useStorage from "@/composables/useStorage";
import DatePicker from "vue3-datepicker";
import Loading from "@/components/Loading.vue";

export default {
  name: "New Transaction",
  components: {
    DatePicker,
    Loading,
  },
  setup() {
    const { getUser } = useUser();
    const { user } = getUser();

    const router = useRouter();

    const { error, isPending, addRecord } = useCollection("transactions");
    const { getRecords } = useCollection("categories");
    const {
      getRecords: getWalletList,
      getRecordById,
      updateRecord,
    } = useCollection("wallets");
    const { url, uploadFile } = useStorage("transactions");

    const isMoreDetails = ref(false);
    const total = ref(0);
    const category = ref("");
    const categories = ref([]);
    const walletId = ref("");
    const walletType = ref("");
    const wallet = reactive({
      amount: null,
      userId: "",
      walletType: "",
    });
    const wallets = ref([]);
    const note = ref("");
    const location = ref("");
    const person = ref("");
    const file = ref(null);
    const errorFile = ref(null);
    const date = ref(new Date());
    const isLoading = ref(false);
    const errorCreateTransaction = ref(null);

    async function getCategoriesAndWallets() {
      isLoading.value = true;

      const categoriesSnapShot = await getRecords();
      const walletsSnapShot = await getWalletList();

      walletsSnapShot.forEach((wallet) => {
        if (user.value.uid === wallet.userId) {
          wallets.value.push(wallet);
        }
      });

      categoriesSnapShot.forEach((cate) => {
        if (user.value.uid === cate.userId) {
          categories.value.push(cate);
        }
      });

      if (wallets.value.length === 0) {
        if (
          confirm(
            "You don't have any wallet type. Please add a new wallet type before creating a new transaction!!!"
          )
        ) {
          router.push({ name: "Budget", params: {} });
        } else {
          router.push({ name: "Home", params: {} });
        }
      } else if (categories.value.length === 0) {
        if (
          confirm(
            "You don't have any category. Please add a new category before creating a new transaction!!!"
          )
        ) {
          router.push({ name: "Categories", params: {} });
        } else {
          router.push({ name: "Home", params: {} });
        }
      }

      isLoading.value = false;
    }

    getCategoriesAndWallets();

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

    function resetForm() {
      total.value = "";
      note.value = "";
      category.value = "";
      date.value = new Date();
      location.value = "";
      person.value = "";
    }

    async function handleUpdateWallet(event) {
      walletId.value = event.target.selectedOptions[0].dataset.id;

      const data = await getRecordById(walletId.value);

      wallet.amount = data.amount;
      wallet.userId = data.userId;
      wallet.walletType = data.walletType;
    }

    async function onSubmit() {
      isLoading.value = true;
      errorCreateTransaction.value = null;

      if (user.value.uid === wallet.userId) {
        try {
          if (wallet.amount - parseInt(total.value) < 0)
            throw new Error(
              "Invalid Transaction. You are not enough money to create this transaction. Please check your wallet."
            );

          if (file.value) await uploadFile(file.value);

          const newAmount = wallet.amount - parseInt(total.value);
          wallet.amount = newAmount;

          await updateRecord(walletId.value, wallet);

          const transaction = {
            total: parseInt(total.value),
            cateId: category.value,
            note: note.value,
            time: date.value,
            location: location.value,
            walletType: walletType.value,
            person: person.value,
            image: url.value,
            userId: user.value.uid,
          };

          await addRecord(transaction);
        } catch (err) {
          console.log(err);
          errorCreateTransaction.value = err.message;

          return;
        } finally {
          isLoading.value = false;
        }
      }

      resetForm();
    }

    return {
      total,
      category,
      categories,
      note,
      date,
      location,
      person,
      isLoading,
      walletId,
      walletType,
      wallets,
      errorFile,
      isMoreDetails,
      error,
      errorCreateTransaction,
      isPending,
      handleUpdateWallet,
      onChangeFile,
      onSubmit,
    };
  },
};
</script>
