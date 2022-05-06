<template>
  <div class="container px-8 mx-auto">
    <!-- Start: Heading Image -->
    <div class="image mb-8">
      <img
        class="inline-block w-full h-auto object-cover"
        src="@/assets/images/money.gif"
        alt="money gif"
      />
    </div>
    <Loading v-if="!isLoading" />
    <!-- Start: Table All Wallet -->
    <div
      v-else
      class="table-wallet border w-full border-collapse bg-white rounded-lg text-dark font-semibold overflow-hidden shadow-lg"
    >
      <div class="flex items-center justify-between px-4 bg-primary text-white">
        <div class="flex items-center h-16">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6 inline-block mr-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"
            /></svg
          >Wallet Type
        </div>
        <div class="flex items-center h-16">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6 inline-block mr-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            /></svg
          >Remaining amount
        </div>
      </div>
      <div
        class="max-h-[250px] overflow-y-auto border-b-indigo-100 border-b-2 border-dashed"
      >
        <div
          v-for="(wallet, index) in wallets"
          :key="index"
          @click="setWallet(wallet)"
          class="flex items-center p-4 justify-between cursor-pointer hover:bg-slate-300"
        >
          <div>{{ wallet.walletType }}</div>
          <div>{{ $filter.formatNumber(wallet.amount) }}</div>
        </div>
      </div>
      <div class="flex items-center justify-end px-4 text-primary">
        <div class="flex items-center justify-center h-16 text-center mr-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6 mr-1"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"
            /></svg
          >Total:
        </div>
        <div>{{ $filter.formatNumber(total) }}</div>
      </div>
    </div>

    <!-- Start: Form Add/Edit Wallet -->
    <form class="min-h-[400px] mb-40">
      <div class="row">
        <h3 class="mt-4 p-4 font-semibold text-xl text-primary text-center">
          Actions Budget
        </h3>
      </div>
      <div class="row mb-4">
        <label for="walletType">
          <span class="block font-semibold text-dark mb-1.5">Wallet Type</span>
          <input
            class="w-full outline-none px-4 py-2 text-lg text-dark"
            type="text"
            id="walletType"
            placeholder="Type a wallet type..."
            v-model="walletType"
          />
        </label>
      </div>
      <div class="row mb-4">
        <label for="amount">
          <span class="block font-semibold text-dark mb-1.5">Amount</span>
          <input
            class="w-full outline-none px-4 py-2 text-lg text-dark"
            type="number"
            min="0"
            id="amount"
            placeholder="0"
            v-model="amount"
          />
        </label>
      </div>
      <div class="error w-full text-center text-red text-lg font-bold">
        {{ error }}
      </div>
      <div class="row">
        <button
          v-if="!isUpdate"
          @click.prevent="handleCreateWallet"
          class="flex items-center justify-center w-full mt-2 p-3 bg-primary text-lg text-white font-bold rounded-lg hover:opacity-90"
        >
          <i class="t2ico t2ico-plus mr-1 text-2xl"></i> Create
        </button>
        <button
          v-else
          @click.prevent="handleUpdateWallet"
          class="flex items-center justify-center w-full mt-2 p-3 leading-8 bg-primary text-lg text-white font-bold rounded-lg hover:opacity-90"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5 mr-1"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z"
            />
            <path
              fill-rule="evenodd"
              d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z"
              clip-rule="evenodd"
            />
          </svg>
          Update
        </button>
      </div>
      <div class="row rounded-lg mt-4 p-3 bg-red">
        <button
          @click.prevent="handleDeleteCategory"
          class="flex items-center justify-center w-full text-white font-semibold text-lg cursor-pointer"
        >
          <div
            class="flex items-center justify-center w-6 h-6 bg-red text-white mr-2"
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
          Delete
        </button>
      </div>
    </form>
  </div>
</template>
<script>
import { ref, watchEffect } from "vue";

import { useUser } from "@/composables/useUser";
import useCollection from "@/composables/useCollection";
import Loading from "@/components/Loading.vue";

export default {
  name: "Budget",
  components: {
    Loading,
  },
  setup() {
    const { error, addRecord, getRecords, updateRecord } =
      useCollection("wallets");
    const { getUser } = useUser();
    const { user } = getUser();

    const isLoading = ref(false);
    const walletType = ref("");
    const isUpdate = ref(false);
    const walletId = ref("");
    const amount = ref(0);
    const wallets = ref([]);
    const total = ref(0);

    const walletGetList = async () => {
      total.value = 0;
      const walletList = await getRecords();

      wallets.value = walletList.filter((wallet) => {
        if (wallet.userId === user.value.uid) {
          total.value += parseFloat(wallet.amount);
        }

        return wallet.userId === user.value.uid;
      });

      isLoading.value = true;
    };

    walletGetList();

    function setWallet(wallet) {
      walletType.value = wallet.walletType;
      walletId.value = wallet.id;
      amount.value = wallet.amount;

      isUpdate.value = true;
    }

    async function handleCreateWallet() {
      isLoading.value = false;

      const dataWallet = {
        walletType: walletType.value,
        amount: amount.value,
        userId: user.value.uid,
      };
      if (!error.value) {
        await addRecord(dataWallet);
      }

      walletType.value = "";
      amount.value = 0;

      walletGetList();
    }

    async function handleUpdateWallet(event) {
      event.preventDefault();
      isLoading.value = false;

      const record = {
        walletType: walletType.value,
        amount: amount.value,
        userId: user.value.uid,
      };

      await updateRecord(walletId.value, record);

      walletGetList();
    }

    watchEffect(() => {
      if (walletType.value === "") {
        isUpdate.value = false;
      }
    });

    return {
      walletType,
      walletId,
      amount,
      error,
      isUpdate,
      wallets,
      total,
      isLoading,
      setWallet,
      handleUpdateWallet,
      handleCreateWallet,
    };
  },
};
</script>
<style lang="scss" scoped></style>
