<template src="./x-header.pug"></template>

<script>
import Logo from "@/components/logo/logo";
import xNav from "@/components/x-nav/x-nav";
import Stories from "@/components/stories/stories";
import user1 from "@/assets/user1.png";
import user2 from "@/assets/user2.png";
export default {
  name: "Header",
  components: {
    Logo,
    xNav,
    Stories,
  },
  data() {
    return {
      userStories: [
        {
          userName: "user1",
          avatar: user1,
        },
        {
          userName: "user2",
          avatar: user2,
        },
      ],
      currentUser: {
        userName: "user1",
        avatar: user1,
      },
    };
  },
};
</script>

<style src="./x-header.css" scoped></style>
