import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/views/HomeView.vue";
import LandingPageView from "@/views/LandingPageView.vue";
import SignUpForm from "@/components/LandingPage/SignUpForm.vue";
import EmailVerificationNotice from "@/components/LandingPage/EmailVerificationNotice.vue";
import EmailVerified from "@/components/LandingPage/EmailVerified.vue";
import AuthGoogleView from "@/views/AuthGoogleView.vue";
import LoginForm from "@/components/LandingPage/LoginForm.vue";
import PasswordRequest from "@/components/LandingPage/PasswordRequest.vue";
import PasswordEmail from "@/components/LandingPage/PasswordEmail.vue";
import PasswordReset from "@/components/LandingPage/PasswordReset.vue";
import PasswordUpdate from "@/components/LandingPage/PasswordUpdate.vue";
import ForbiddenView from "@/views/ForbiddenView.vue";
import ProfileView from "@/views/ProfileView.vue";
import NewEmailAdd from "@/components/Profile/NewEmailAdd.vue";
import NewEmailCheck from "@/components/Profile/NewEmailCheck.vue";
import NewEmailVerify from "@/components/Profile/NewEmailVerify.vue";
import MovieListView from "@/views/MovieListView.vue";
import MovieAdd from "@/components/MovieList/MovieAdd.vue";

import isAuthenticated from "@/router/guards.js";
import axios from "axios";
import { useAuthStore } from "@/stores/auth.js";
import { useUserStore } from "@/stores/user.js";

axios.defaults.withCredentials = true;

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
      beforeEnter: isAuthenticated,
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
    {
      path: "/auth/google/callback",
      name: "auth_google",
      component: AuthGoogleView,
    },
    {
      path: "/profile",
      name: "profile",
      component: ProfileView,
      children: [
        {
          path: "new-email",
          name: "new_email",
          component: NewEmailAdd,
        },
        {
          path: "new-email/check",
          name: "new_email.check",
          component: NewEmailCheck,
        },
        {
          path: "new-email/verify",
          name: "new_email.verify",
          component: NewEmailVerify,
        },
      ],
    },
    {
      path: "/movie-list",
      name: "movie_list",
      component: MovieListView,
      children: [
        {
          path: " ",
          name: "movie.add",
          component: MovieAdd,
        },
      ],
    },
    {
      path: "/401",
      name: "forbidden",
      component: ForbiddenView,
    },
  ],
});

router.beforeEach(async (to, from, next) => {
  const authStore = useAuthStore();
  const userStore = useUserStore();

  if (authStore.authenticated === null) {
    try {
      await axios
        .get(`${import.meta.env.VITE_BACKEND_BASE_URL}api/me`)
        .then(
          (res) => (
            (userStore.user = res.data.user),
            (userStore.user.avatar = res.data.avatar)
          )
        );
      authStore.authenticated = true;
    } catch (err) {
      authStore.authenticated = false;
    }
  }
  return next();
});

export default router;
