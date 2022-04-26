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

<style lang="scss"></style>
