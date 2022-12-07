import { defineStore } from "pinia";
import { ref } from "vue";

export const useUserStore = defineStore("user", () => {
  const user = ref(null);
  const componentKey = ref(0);
  function incrementKey() {
    componentKey.value++;
  }
  return { user, componentKey, incrementKey };
});
