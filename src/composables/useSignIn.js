import { ref } from "vue";
import { projectAuth } from "@/configs/firebase";

const error = ref(null);
const isPending = ref(null);

async function signIn(email, password) {
  error.value = null;
  isPending.value = true;
  try {
    const response = await projectAuth.signInWithEmailAndPassword(
      email,
      password
    );

    if (!response) throw new Error("Something went wrong!!");

    return response;
  } catch (err) {
    console.log(err);
    error.value = err.message;
  } finally {
    isPending.value = false;
  }
}

export function useSignIn() {
  return { error, isPending, signIn };
}
