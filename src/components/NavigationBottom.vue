<template>
  <footer
    id="footer"
    class="fixed bottom-0 left-0 w-full bg-white pt-4 p-b-safe-4"
  >
    <div class="container mx-auto px-8 h-full">
      <ul class="flex items-center h-full justify-between">
        <li v-for="navItem in navItems" :key="navItem.nameRoute">
          <router-link :to="{ name: navItem.nameRoute, params: {} }">
            <i class="t2ico text-2xl" :class="navItem.icon"></i>
          </router-link>
        </li>
      </ul>
    </div>

    <div
      data-circle
      class="absolute top-0 left-1/2 bg-dark-light transform -translate-x-1/2"
    ></div>
    <div
      @click="goToRoute"
      class="absolute flex justify-center items-center cursor-pointer bg-primary text-white w-12 h-12 rounded-full -top-6 left-1/2 transform -translate-x-1/2"
    >
      <i class="t2ico t2ico-plus"></i>
    </div>
  </footer>
</template>
<script>
import { reactive } from "vue";
import { useRouter } from "vue-router";

import { NAV_BOTTOM_ITEMS } from "@/constants";

export default {
  name: "NavigationBottom",
  setup() {
    const router = useRouter();
    const navItems = reactive(NAV_BOTTOM_ITEMS);

    const goToRoute = () => router.push({ name: "NewTransaction", params: {} });
    return { navItems, goToRoute };
  },
};
</script>
<style scoped>
footer#footer > div[data-circle] {
  width: 60px;
  height: 30px;
  border-bottom-left-radius: 60px;
  border-bottom-right-radius: 60px;
}

footer#footer ul li:nth-child(2) {
  margin-right: 10%;
}

footer#footer ul li:nth-child(3) {
  margin-left: 10%;
}
</style>
