import { ref } from "vue";
import { projectStorage } from "@/configs/firebase";
import { useUser } from "@/composables/useUser";

const { getUser } = useUser();

const { user } = getUser();

const userId = user.value ? user.value.uid : "users";

function useStorage(name) {
  const error = ref(null);
  const filePath = ref(null);
  const url = ref(null);

  async function uploadFile(file) {
    filePath.value = `${name}/${userId}/${file.name}`;

    const fileRef = projectStorage.ref(filePath.value);

    console.log("FilePath", filePath.value);

    try {
      const response = await fileRef.put(file);

      url.value = await response.ref.getDownloadURL();

      console.log(url.value);

      return url.value;
    } catch (err) {
      console.log(err);
      error.value = err.message;
    }
  }

  return { error, url, uploadFile };
}

export default useStorage;
