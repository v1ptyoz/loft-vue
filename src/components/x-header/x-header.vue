<template src="./x-header.pug"></template>

<script>
import xNav from "@/components/x-nav/x-nav";
import icons from "@/components/icons/icons";
export default {
  name: "Header",
  components: {
    xNav,
    icons,
  },
  data() {
    return {
      currentUser: {
        name: "user1",
        src: "https://picsum.photos/100",
      },
    };
  },
};
</script>

<style lang="scss" src="./x-header.scss" scoped></style>
