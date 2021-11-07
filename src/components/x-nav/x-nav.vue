<template src="./x-nav.pug"></template>

<script>
import icons from "../icons/icons";
import user from "../user/user";
export default {
  name: "xNav",
  props: ["currentUser"],
  components: { icons, user },
};
</script>

<style lang="scss" src="./x-nav.scss" scoped></style>
