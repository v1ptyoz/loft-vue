<template src="./x-header.pug"></template>

<script>
import xNav from "@/components/x-nav/x-nav";
import Stories from "@/components/stories/stories";
import icons from "@/components/icons/icons";
export default {
  name: "Header",
  components: {
    xNav,
    Stories,
    icons,
  },
  data() {
    return {
      userStories: [
        {
          user: {
            name: "user1",
            src: "https://picsum.photos/100",
          },
        },
        {
          user: {
            name: "user2",
            src: "https://picsum.photos/100",
          },
        },
        {
          user: {
            name: "user3",
            src: "https://picsum.photos/100",
          },
        },
      ],
      currentUser: {
        name: "user1",
        src: "https://picsum.photos/100",
      },
    };
  },
};
</script>

<style lang="scss" src="./x-header.scss" scoped></style>
