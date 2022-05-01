<template>
  <NavigationHeader />
  <slot />
  <NavigationBottom v-if="meta.isShowFooter" />
</template>
<script>
import { useRoute } from "vue-router";
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

    return {
      meta: computed(() => route.meta),
    };
  },
};
</script>
