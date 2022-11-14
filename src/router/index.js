import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import LandingPage from "@/views/LandingPage.vue";
import SignUpForm from "@/components/auth-and-pass/SignUpForm.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
      redirect: { name: "landing_page" },
    },
    {
      path: "/",
      name: "landing_page",
      component: LandingPage,
      children: [
        {
          path: "sign-up",
          name: "sign_up",
          component: SignUpForm,
        },
      ],
    },
  ],
});

export default router;
