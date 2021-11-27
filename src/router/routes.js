import Feed from "../components/pages/feed/feed";
import slider from "../components/pages/slider/slider";
import auth from "../components/pages/auth/auth";
import profile from "../components/pages/profile/profile";
import followersList from "../components/followersList/followersList";
import userRepos from "../components/userRepos/userRepos";

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
  {
    path: "/profile",
    component: profile,
    children: [
      {
        path: "info",
        component: userRepos,
        name: "info",
      },
      {
        path: "followers",
        component: followersList,
        name: "followers",
      },
    ],
  },
];
