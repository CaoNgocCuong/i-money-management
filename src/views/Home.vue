<template>
  <div class="container mx-auto px-8">
    <div class="total p-8 bg-gray-100 border rounded-lg">
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
        {{ $filter.formatNumber(4500000) }}
      </h2>
    </div>
    <section>
      <h3 class="text-2xl text-center text-primary font-semibold py-7">
        Recent Transaction
      </h3>
      <div class="transaction-today">
        <h5 class="text-gray-400 text-lg font-semibold">Today</h5>
        <div class="transactions-wrap mt-2 max-h-[300px] overflow-y-auto">
          <div
            class="transaction relative flex items-center bg-white rounded-lg p-4 mb-3 shadow-md overflow-hidden cursor-pointer"
          >
            <div class="img h-10 w-10 overflow-hidden mr-4">
              <img
                class="w-full h-full object-cover rounded-full"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2UHfeaksWuTRnmAqU071vdMEYebYyHJDt2pw8E722FQ&s"
                alt="transaction's image"
              />
            </div>
            <div class="transaction-info flex-1">
              <div
                class="transaction-info__top flex justify-between items-center mb-1"
              >
                <span class="over-text font-bold text-dark text-lg">text</span>
                <span class="text-red font-semibold text-lg">- text </span>
              </div>
              <div
                class="transaction-info__bottom flex items-center justify-between text-md font-light text-gray-400"
              >
                <span class="over-text">text</span>
                <span>text</span>
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
              text
            </div>
          </div>
          <div
            class="transaction relative flex items-center bg-white rounded-lg p-4 mb-3 shadow-md overflow-hidden cursor-pointer"
          >
            <div class="img h-10 w-10 overflow-hidden mr-4">
              <img
                class="w-full h-full object-cover rounded-full"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2UHfeaksWuTRnmAqU071vdMEYebYyHJDt2pw8E722FQ&s"
                alt="transaction's image"
              />
            </div>
            <div class="transaction-info flex-1">
              <div
                class="transaction-info__top flex justify-between items-center mb-1"
              >
                <span class="over-text font-bold text-dark text-lg">text</span>
                <span class="text-red font-semibold text-lg">- text </span>
              </div>
              <div
                class="transaction-info__bottom flex items-center justify-between text-md font-light text-gray-400"
              >
                <span class="over-text">text</span>
                <span>text</span>
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
              text
            </div>
          </div>
          <div
            class="transaction relative flex items-center bg-white rounded-lg p-4 mb-3 shadow-md overflow-hidden cursor-pointer"
          >
            <div class="img h-10 w-10 overflow-hidden mr-4">
              <img
                class="w-full h-full object-cover rounded-full"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2UHfeaksWuTRnmAqU071vdMEYebYyHJDt2pw8E722FQ&s"
                alt="transaction's image"
              />
            </div>
            <div class="transaction-info flex-1">
              <div
                class="transaction-info__top flex justify-between items-center mb-1"
              >
                <span class="over-text font-bold text-dark text-lg">text</span>
                <span class="text-red font-semibold text-lg">- text </span>
              </div>
              <div
                class="transaction-info__bottom flex items-center justify-between text-md font-light text-gray-400"
              >
                <span class="over-text">text</span>
                <span>text</span>
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
              text
            </div>
          </div>
          <div
            class="transaction relative flex items-center bg-white rounded-lg p-4 mb-3 shadow-md overflow-hidden cursor-pointer"
          >
            <div class="img h-10 w-10 overflow-hidden mr-4">
              <img
                class="w-full h-full object-cover rounded-full"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2UHfeaksWuTRnmAqU071vdMEYebYyHJDt2pw8E722FQ&s"
                alt="transaction's image"
              />
            </div>
            <div class="transaction-info flex-1">
              <div
                class="transaction-info__top flex justify-between items-center mb-1"
              >
                <span class="over-text font-bold text-dark text-lg">text</span>
                <span class="text-red font-semibold text-lg">- text </span>
              </div>
              <div
                class="transaction-info__bottom flex items-center justify-between text-md font-light text-gray-400"
              >
                <span class="over-text">text</span>
                <span>text</span>
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
              text
            </div>
          </div>
        </div>
      </div>
      <div class="transaction-yesterday mt-4 mb-32">
        <h5 class="text-gray-400 text-lg font-semibold">Yesterday</h5>
        <div class="transactions-wrap mt-2 max-h-[300px] overflow-y-auto">
          <div
            class="transaction relative flex items-center bg-white rounded-lg p-4 mb-3 shadow-md overflow-hidden cursor-pointer"
          >
            <div class="img h-10 w-10 overflow-hidden mr-4">
              <img
                class="w-full h-full object-cover rounded-full"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2UHfeaksWuTRnmAqU071vdMEYebYyHJDt2pw8E722FQ&s"
                alt="transaction's image"
              />
            </div>
            <div class="transaction-info flex-1">
              <div
                class="transaction-info__top flex justify-between items-center mb-1"
              >
                <span class="over-text font-bold text-dark text-lg">text</span>
                <span class="text-red font-semibold text-lg">- text </span>
              </div>
              <div
                class="transaction-info__bottom flex items-center justify-between text-md font-light text-gray-400"
              >
                <span class="over-text">text</span>
                <span>text</span>
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
              text
            </div>
          </div>
          <div
            class="transaction relative flex items-center bg-white rounded-lg p-4 mb-3 shadow-md overflow-hidden cursor-pointer"
          >
            <div class="img h-10 w-10 overflow-hidden mr-4">
              <img
                class="w-full h-full object-cover rounded-full"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2UHfeaksWuTRnmAqU071vdMEYebYyHJDt2pw8E722FQ&s"
                alt="transaction's image"
              />
            </div>
            <div class="transaction-info flex-1">
              <div
                class="transaction-info__top flex justify-between items-center mb-1"
              >
                <span class="over-text font-bold text-dark text-lg">text</span>
                <span class="text-red font-semibold text-lg">- text </span>
              </div>
              <div
                class="transaction-info__bottom flex items-center justify-between text-md font-light text-gray-400"
              >
                <span class="over-text">text</span>
                <span>text</span>
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
              text
            </div>
          </div>
          <div
            class="transaction relative flex items-center bg-white rounded-lg p-4 mb-3 shadow-md overflow-hidden cursor-pointer"
          >
            <div class="img h-10 w-10 overflow-hidden mr-4">
              <img
                class="w-full h-full object-cover rounded-full"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2UHfeaksWuTRnmAqU071vdMEYebYyHJDt2pw8E722FQ&s"
                alt="transaction's image"
              />
            </div>
            <div class="transaction-info flex-1">
              <div
                class="transaction-info__top flex justify-between items-center mb-1"
              >
                <span class="over-text font-bold text-dark text-lg">text</span>
                <span class="text-red font-semibold text-lg">- text </span>
              </div>
              <div
                class="transaction-info__bottom flex items-center justify-between text-md font-light text-gray-400"
              >
                <span class="over-text">text</span>
                <span>text</span>
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
              text
            </div>
          </div>
          <div
            class="transaction relative flex items-center bg-white rounded-lg p-4 mb-3 shadow-md overflow-hidden cursor-pointer"
          >
            <div class="img h-10 w-10 overflow-hidden mr-4">
              <img
                class="w-full h-full object-cover rounded-full"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2UHfeaksWuTRnmAqU071vdMEYebYyHJDt2pw8E722FQ&s"
                alt="transaction's image"
              />
            </div>
            <div class="transaction-info flex-1">
              <div
                class="transaction-info__top flex justify-between items-center mb-1"
              >
                <span class="over-text font-bold text-dark text-lg">text</span>
                <span class="text-red font-semibold text-lg">- text </span>
              </div>
              <div
                class="transaction-info__bottom flex items-center justify-between text-md font-light text-gray-400"
              >
                <span class="over-text">text</span>
                <span>text</span>
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
              text
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
// @ is an alias to /src
import { useUser } from "@/composables/useUser";

export default {
  name: "HomeView",
  components: {},
  setup() {
    const { getUser } = useUser();
    const { user } = getUser();
    return { user };
  },
};
</script>
<style scoped>
.over-text {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
  max-width: 140px;
  overflow: hidden;
  line-height: 24px;
  height: 24px;
}

.transaction:hover .overlay {
  transition: all 0.5s ease;
  transform: translateY(0);
}
</style>
