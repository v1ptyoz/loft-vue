<template src="./post.pug">

</template>

<script>
import user from "@/components/user/user";
import actions from "@/components/actions/actions";
import toggler from "@/components/toggler/toggler";
import issues from "@/components/issues/issues";
import { mapActions } from "vuex";
export default {
  name: "Post",
  components: {
    user,
    actions,
    toggler,
    issues,
  },
  props: [
    "hasHeader",
    "username",
    "avatar",
    "postTitle",
    "postContent",
    "url",
    "postDate",
    "forks",
    "stars",
    "id",
    "owner",
    "repo",
    "postReadme",
  ],
  computed: {
    date() {
      const months = [
        "JAN",
        "FEB",
        "MAR",
        "APR",
        "MAY",
        "JUN",
        "JUL",
        "AUG",
        "SEP",
        "OCT",
        "NOV",
        "DEC",
      ];
      const d = new Date(this.postDate);
      return [d.getDate(), months[d.getMonth()]].join(" ");
    },
  },
  data() {
    return {
      shown: false,
    };
  },
  methods: {
    ...mapActions({
      doStarOnRepo: "doStarOnRepo",
    }),
    show(toggled) {
      this.shown = toggled;
    },
  },
};
</script>

<style lang="scss" src="./post.scss" scoped></style>
