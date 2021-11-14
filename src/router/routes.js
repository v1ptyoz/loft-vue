import Feed from "../components/pages/feed/feed";
import slider from "../components/pages/slider/slider";
export default [
  {
    path: "/",
    component: Feed,
  },
  {
    path: "/stories/:initialSlide",
    component: slider,
    name: "stories",
    props: true,
  },
];
