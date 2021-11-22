import { createRouter, createWebHashHistory } from "vue-router";
import routes from "@/router/routes";
import { getUser } from "@/services/networkService";

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

router.beforeEach(async (to, from, next) => {
  const route = to.name === "auth";
  if (route) {
    next();
    return;
  }
  try {
    const response = await getUser();
    if (response.status === 401) {
      throw new Error();
    }
    next();
  } catch (e) {
    next({ name: "auth" });
  }
});

export default router;
