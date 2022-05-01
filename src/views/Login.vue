<template>
  <div class="mt-8">
    <div class="container mx-auto px-8">
      <!-- Start: Form Login -->
      <form @submit.prevent="onSubmit" class="flex flex-col space-y-6">
        <div class="row">
          <label for="email" class="flex flex-col">
            <span class="font-semibold">Email</span>
            <input
              type="email"
              id="email"
              class="px-4 py-3 rounded-lg border border-gray-100 mt-1 outline-none"
              placeholder="email..."
              autocomplete="username"
              v-model="username"
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
            Sign In
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
        <span class="font-semibold">I'm a new user.</span>
        <span class="ml-1"
          ><router-link
            :to="{ name: 'Register', params: {} }"
            class="text-primary font-bold"
            >Sign Up</router-link
          ></span
        >
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import { useRouter } from "vue-router";

import { useSignIn } from "@/composables/useSignIn";

export default {
  name: "Login",
  setup() {
    const { error, isPending, signIn } = useSignIn();
    const router = useRouter();

    const username = ref("");
    const password = ref("");

    async function onSubmit() {
      await signIn(username.value, password.value);

      if (!error.value) router.push({ name: "Profile", params: {} });
    }

    return {
      username,
      password,
      onSubmit,
      error,
      isPending,
    };
  },
};
</script>
