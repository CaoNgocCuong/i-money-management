<template>
  <div class="container mx-auto px-8">
    <!-- Start: Info -->
    <div class="row" v-if="user">
      <div class="text-center">
        <div class="w-24 h-24 rounded-full overflow-hidden mx-auto shadow-lg">
          <img
            class="w-full h-full object-cover"
            :src="user.photoURL"
            size="xs"
            alt="User's Profile Avatar"
          />
        </div>
        <div class="font-bold text-primary mt-3 text-2xl">
          {{ user.displayName }}
        </div>
        <p class="font-semibold text-gray-400 mt-1">{{ user.email }}</p>
      </div>
    </div>

    <!-- Start: Menu -->
    <div class="row">
      <div class="grid grid-cols-1">
        <div class="col-span-1">
          <h3 class="font-bold text-primary text-xl mb-2 mt-4">General</h3>
        </div>
        <div class="col-span-1">
          <ul class="list-routes mb-32">
            <li
              v-for="(profileOption, index) in profileOptions"
              :key="profileOption.name"
              class="text-dark"
            >
              <router-link
                :to="profileOption.route"
                class="flex items-center justify-between py-3"
              >
                <div
                  class="flex items-center text-left"
                  :class="{ 'text-red': index === profileOptions.length - 1 }"
                >
                  <i class="t2icon text-2xl" :class="profileOption.icon"></i>
                  <h5 class="font-semibold ml-3">{{ profileOption.name }}</h5>
                </div>
                <div class="text-right">
                  <i class="t2ico t2ico-arrow-right text-xl"></i>
                </div>
              </router-link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { reactive } from "vue";

import { useUser } from "@/composables/useUser";
import { PROFILE_OPTIONS } from "@/constants";

export default {
  name: "Profile",
  setup() {
    const { getUser } = useUser();
    const { user } = getUser();
    const profileOptions = reactive(PROFILE_OPTIONS);

    return { profileOptions, user };
  },
};
</script>
