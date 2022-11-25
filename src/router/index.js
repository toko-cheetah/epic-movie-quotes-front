import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/views/HomeView.vue";
import LandingPageView from "@/views/LandingPageView.vue";
import SignUpForm from "@/components/LandingPage/SignUpForm.vue";
import EmailVerificationNotice from "@/components/LandingPage/EmailVerificationNotice.vue";
import EmailVerified from "@/components/LandingPage/EmailVerified.vue";
import LoginForm from "@/components/LandingPage/LoginForm.vue";
import PasswordRequest from "@/components/LandingPage/PasswordRequest.vue";
import PasswordEmail from "@/components/LandingPage/PasswordEmail.vue";
import PasswordReset from "@/components/LandingPage/PasswordReset.vue";
import PasswordUpdate from "@/components/LandingPage/PasswordUpdate.vue";

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
      component: LandingPageView,
      children: [
        {
          path: "login",
          name: "login",
          component: LoginForm,
        },
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
        {
          path: "forgot-password",
          name: "password_request",
          component: PasswordRequest,
        },
        {
          path: "forgot-password",
          name: "password_email",
          component: PasswordEmail,
        },
        {
          path: "reset-password",
          name: "password_reset",
          component: PasswordReset,
        },
        {
          path: "reset-password",
          name: "password_update",
          component: PasswordUpdate,
        },
      ],
    },
  ],
});

export default router;
