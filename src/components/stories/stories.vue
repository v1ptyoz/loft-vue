<template src="./stories.pug"></template>

<script>
import user from "../user/user";
import { mapState } from "vuex";

export default {
  name: "stories",
  data() {
    return {
      inStories: true,
      isActive: true,
    };
  },
  emits: ["storyClick"],
  props: ["id"],
  computed: {
    ...mapState({
      trendings: (state) => state.repos,
    }),
  },
  components: {
    user,
  },
};
</script>

<style lang="scss" src="./stories.scss" scoped></style>
