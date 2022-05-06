<template>
  <header id="header" class="py-8">
    <div class="container px-8 mx-auto">
      <div class="flex justify-between items-center">
        <div class="flex items-center">
          <div
            v-if="meta.leading"
            class="w-10 h-10 overflow-hidden rounded-full"
          >
            <img
              :src="user.photoURL"
              alt="User's profile avatar"
              size="sm"
              class="w-full h-full object-cover"
            />
          </div>
          <h1 class="font-bold text-xl ml-2 text-dark">
            {{ meta.text ? meta.text : user ? `Hey, ${user.displayName}` : "" }}
          </h1>
        </div>
        <div class="flex">
          <ul>
            <li>
              <i class="t2ico text-2xl" :class="meta.icon" v-if="meta.icon"></i>
              <button
                v-else
                class="flex items-center text-dark text-lg font-semibold"
                @click="onBackRoute"
              >
                Back
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </header>
</template>
<script>
import { computed } from "vue";
import { useRoute } from "vue-router";

import { useUser } from "@/composables/useUser";

export default {
  name: "Navigation Header",
  setup(props, { emit }) {
    const route = useRoute();
    const { getUser } = useUser();

    const { user } = getUser();

    function onBackRoute() {
      emit("onBackRoute");
    }

    return {
      user,
      meta: computed(() => route.meta),
      onBackRoute,
    };
  },
};
</script>
