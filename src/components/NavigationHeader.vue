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
              src="https://haycafe.vn/wp-content/uploads/2021/11/Anh-avatar-dep-chat-lam-hinh-dai-dien.jpg"
              alt="User's profile avatar"
              size="sm"
              class="w-full h-auto object-cover"
            />
          </div>
          <h1 class="font-bold text-xl ml-2 text-dark">{{ meta.text }}</h1>
        </div>
        <div class="flex">
          <ul>
            <li>
              <i class="t2ico t2ico-notification text-2xl"></i>
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

export default {
  name: "Navigation Header",
  setup() {
    const route = useRoute();

    return {
      meta: computed(() => route.meta),
    };
  },
};
</script>
