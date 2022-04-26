<template>
  <NavigationBrand />
  <slot></slot>
</template>
<script>
import NavigationBrand from "@/components/NavigationBrand.vue";

export default {
  name: "Auth Layout",
  components: {
    NavigationBrand,
  },
  setup() {},
};
</script>
