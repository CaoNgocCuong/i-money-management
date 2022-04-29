<template>
  <div class="home"></div>
  <div class="mt-6" v-if="user">{{ user.displayName }}</div>
</template>

<script>
// @ is an alias to /src
import { useUser } from "@/composables/useUser";

export default {
  name: "HomeView",
  components: {},
  setup() {
    const { getUser } = useUser();
    const { user } = getUser();
    return { user };
  },
};
</script>
