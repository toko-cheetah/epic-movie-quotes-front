import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/views/HomeView.vue";
import LandingPage from "@/views/LandingPage.vue";
import SignUpForm from "@/components/auth-and-pass/SignUpForm.vue";
import EmailVerificationNotice from "@/components/auth-and-pass/EmailVerificationNotice.vue";
import EmailVerified from "@/components/auth-and-pass/EmailVerified.vue";

const router = createRouter({
  history: createWebHistory(),
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
        {
          path: "verification-notice",
          name: "verification_notice",
          component: EmailVerificationNotice,
        },
        {
          path: "verification-verified",
          name: "verification_verified",
          component: EmailVerified,
        },
      ],
    },
  ],
});

export default router;
