import { reactive } from "vue";
import { defineStore } from "pinia";

export const useSignUpStore = defineStore("signUp", () => {
  const signUpData = reactive({
    name: null,
    email: null,
    password: null,
  });

  return { signUpData };
});
