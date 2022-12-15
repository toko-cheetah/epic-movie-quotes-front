import { useAuthStore } from "@/stores/auth.js";

const isAuthenticated = () => {
  const authStore = useAuthStore();
  if (!authStore.authenticated) {
    return { name: "forbidden" };
  }
};

const redirectToLandingPage = () => {
  const authStore = useAuthStore();
  if (!authStore.authenticated) {
    return { name: "landing_page" };
  }
};

export { isAuthenticated, redirectToLandingPage };
