<template>
  <h1>Logout page...</h1>
</template>
<script>
import { useRouter } from "vue-router";

import { useLogOut } from "@/composables/useLogOut";

export default {
  name: "LogOut",
  setup() {
    const router = useRouter();

    const { error, logOut } = useLogOut();

    async function handleLogout() {
      await logOut();

      if (!error.value) {
        router.push({ name: "Login", params: {} });
      }
    }

    handleLogout();

    return {};
  },
};
</script>
