<template src="./stories.pug"></template>

<script>
import user from "../user/user";
export default {
  name: "stories",
  props: {
    userStories: {
      type: Array,
      required: true,
    },
    isActive: {
      type: Boolean,
      required: false,
    },
    isOnline: {
      type: Boolean,
      required: false,
    }
  },
  components: {
    user,
  },
};
</script>

<style lang="scss" src="./stories.scss" scoped></style>
