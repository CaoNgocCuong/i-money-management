<template>
  <div class="mt-8">
    <div class="container mx-auto px-8">
      <!-- Start: Form Register -->
      <form @submit.prevent="onSubmit" class="flex flex-col space-y-6">
        <div class="row">
          <label for="fullName" class="flex flex-col">
            <span class="font-semibold">Full Name</span>
            <input
              type="text"
              id="fullName"
              class="px-4 py-3 rounded-lg border border-gray-100 mt-1 outline-none"
              placeholder="IMoney..."
              v-model="fullName"
            />
          </label>
        </div>
        <div class="row">
          <label for="email" class="flex flex-col">
            <span class="font-semibold">Email</span>
            <input
              type="email"
              id="email"
              class="px-4 py-3 rounded-lg border border-gray-100 mt-1 outline-none"
              placeholder="email..."
              autocomplete="username"
              v-model="email"
            />
          </label>
        </div>
        <div class="row">
          <label for="password" class="flex flex-col">
            <span class="font-semibold">Password</span>
            <input
              type="password"
              id="password"
              class="px-4 py-3 rounded-lg border border-gray-100 mt-1 outline-none"
              placeholder="IMoney..."
              autocomplete="current-password"
              v-model="password"
            />
          </label>
        </div>
        <div v-show="error" class="error text-left mt-4 text-red">
          <span>{{ error }}</span>
        </div>
        <div class="row">
          <button
            v-if="!isPending"
            type="submit"
            class="py-3 text-center w-full bg-primary text-white font-bold rounded-lg"
          >
            Sign Up
          </button>
          <button
            v-else
            type="button"
            class="py-3 text-center w-full bg-gray-800 cursor-not-allowed text-white font-bold rounded-lg"
          >
            Loading...
          </button>
        </div>
      </form>

      <!-- Start: Direction -->
      <div class="w-full text-center mt-6">
        <span class="font-semibold">I'm already a member.</span>
        <span class="ml-1"
          ><router-link
            :to="{ name: 'Login', params: {} }"
            class="text-primary font-bold"
            >Sign In</router-link
          ></span
        >
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import { useSignUp } from "@/composables/useSignUp";

export default {
  setup() {
    const fullName = ref("");
    const password = ref("");
    const email = ref("");

    const { isPending, error, signUp } = useSignUp();

    const onSubmit = async () => {
      await signUp(email.value, password.value);
    };

    return {
      fullName,
      password,
      email,
      isPending,
      error,
      onSubmit,
    };
  },
};
</script>
