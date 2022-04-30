import { ref } from "vue";
import { projectAuth } from "@/configs/firebase";

const error = ref("");

async function logOut() {
  try {
    const response = await projectAuth.signOut();

    return response;
  } catch (err) {
    console.log(err);
    error.value = err.message;
  }
}

export function useLogOut() {
  return { error, logOut };
}
