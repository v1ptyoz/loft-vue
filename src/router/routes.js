import Feed from "../components/pages/feed/feed";
import slider from "../components/pages/slider/slider";
import auth from "../components/pages/auth/auth";

export default [
  {
    path: "/",
    component: Feed,
    name: "home",
  },
  {
    path: "/stories/:initialSlide",
    component: slider,
    name: "stories",
    props: true,
  },
  {
    path: "/auth",
    component: auth,
    name: "auth",
  },
];
