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
            />
          </label>
        </div>
        <div class="row">
          <button
            type="submit"
            class="py-3 text-center w-full bg-primary text-white font-bold rounded-lg"
          >
            Sign Up
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
            >Sign In</router-link
          ></span
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  setup() {
    return {
      onsubmit,
    };
  },
};
</script>
