<template>
  <!-- Start: Info -->
  <div class="row">
    <div class="container mx-auto p-8">
      <div class="text-center">
        <div class="w-24 h-25 rounded-full overflow-hidden mx-auto">
          <img
            class="w-full h-auto object-cover"
            src="https://haycafe.vn/wp-content/uploads/2021/11/Anh-avatar-dep-chat-lam-hinh-dai-dien.jpg"
            size="xs"
            alt="User's Profile Avatar"
          />
        </div>
        <div class="font-bold text-primary mt-3 text-2xl">Cao Ngọc Cường</div>
        <p class="font-semibold text-gray-400 mt-1">cuong.cn0103@gmail.com</p>
      </div>
    </div>
  </div>

  <!-- Start: Menu -->
  <div class="row">
    <div class="container mx-auto px-8">
      <div class="grid grid-cols-1">
        <div class="col-span-1">
          <h3 class="font-bold text-primary text-xl mb-2">General</h3>
        </div>
        <div class="col-span-1">
          <ul class="list-routes">
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

export default {
  name: "Profile",
  setup() {
    const profileOptions = reactive([
      {
        name: "My Wallet",
        icon: "t2ico-wallet",
        route: {
          name: "Home",
          params: {},
        },
      },
      {
        name: "Tools",
        icon: "t2ico-ticket-star",
        route: {
          name: "Home",
          params: {},
        },
      },
      {
        name: "Privacy",
        icon: "t2ico-lock",
        route: {
          name: "Home",
          params: {},
        },
      },
      {
        name: "About",
        icon: "t2ico-info-square",
        route: {
          name: "Home",
          params: {},
        },
      },
      {
        name: "Logout",
        icon: "t2ico-logout",
        route: {
          name: "Home",
          params: {},
        },
      },
    ]);

    return { profileOptions };
  },
};
</script>
