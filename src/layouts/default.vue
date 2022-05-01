<template>
  <NavigationHeader @onBackRoute="handleBackRoute" />
  <slot />
  <NavigationBottom v-if="meta.isShowFooter" />
</template>
<script>
import { useRoute, useRouter } from "vue-router";
import { computed } from "vue";

import NavigationBottom from "@/components/NavigationBottom.vue";
import NavigationHeader from "@/components/NavigationHeader.vue";
export default {
  name: "Default Layout",
  components: {
    NavigationBottom,
    NavigationHeader,
  },
  setup() {
    const route = useRoute();
    const router = useRouter();

    function handleBackRoute() {
      router.push({ name: "Home", params: {} });
    }

    return {
      meta: computed(() => route.meta),
      handleBackRoute,
    };
  },
};
</script>
