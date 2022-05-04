import { ref } from "vue";
import { projectAuth } from "@/configs/firebase";

const error = ref(null);
const isPending = ref(null);

async function signUp(email, password, fullName, urlAvatar) {
  isPending.value = true;
  error.value = null;

  try {
    const response = await projectAuth.createUserWithEmailAndPassword(
      email,
      password
    );

    if (!response) throw new Error("Could not create a new User.");

    await response.user.updateProfile({
      displayName: fullName,
      photoURL: urlAvatar,
    });

    console.log(response);

    return response;
  } catch (err) {
    console.error(err);
    error.value = err.message;
  } finally {
    isPending.value = false;
  }
}

export function useSignUp() {
  return { error, isPending, signUp };
}
