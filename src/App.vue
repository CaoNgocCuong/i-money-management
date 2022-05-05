<template>
  <component :is="layout">
    <router-view />
  </component>
</template>

<script>
import { computed } from "vue";
import { useRoute } from "vue-router";

import { DEFAULT_LAYOUT } from "@/constants/index";

export default {
  name: "App",
  setup() {
    const route = useRoute();

    return {
      layout: computed(() => (route.meta.layout || DEFAULT_LAYOUT) + "-layout"),
    };
  },
};
</script>

<style lang="css">
#app {
  @apply bg-dark-light;
  position: relative;
  max-width: 425px;
  width: 100%;
  min-height: 100vh;
  margin: 0 auto;
  border: 1px solid #eeededf2;
  border-radius: 8px;
}
</style>
