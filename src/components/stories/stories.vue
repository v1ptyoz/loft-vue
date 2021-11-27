<template src="./stories.pug"></template>

<script>
import user from "../user/user";
import { mapState } from "vuex";

export default {
  name: "stories",
  data() {
    return {
      isActive: true,
    };
  },
  emits: ["storyClick"],
  computed: {
    ...mapState({
      trendings: (state) => state.trendings,
    }),
  },
  components: {
    user,
  },
};
</script>

<style lang="scss" src="./stories.scss" scoped></style>
