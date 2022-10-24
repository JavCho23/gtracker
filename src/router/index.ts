import { createRouter, createWebHistory } from "vue-router";
import { userState } from "./../state/user";
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("../views/HomeView.vue"),
    },
    {
      path: "/login",
      name: "login",
      component: () => import("../views/LoginView.vue"),
    },
  ],
});

router.beforeEach(async (to) => {
  const isAuthenticated = !!userState.user;
  if (
    // make sure the user is authenticated
    !isAuthenticated &&
    // ❗️ Avoid an infinite redirect
    to.name !== "login"
  ) {
    // redirect the user to the login page
    return { name: "login" };
  } else if (to.name === "login" && isAuthenticated) {
    return { name: "home" };
  }
});

export default router;
