<template src="./post.pug">

</template>

<script>
import user from "@/components/user/user";
import actions from "@/components/actions/actions";
import toggler from "@/components/toggler/toggler";
import issues from "@/components/issues/issues";
export default {
  name: "Post",
  components: {
    user,
    actions,
    toggler,
    issues,
  },
  props: [
    "username",
    "avatar",
    "postTitle",
    "postContent",
    "url",
    "postDate",
    "forks",
    "stars",
  ],
  computed: {
    buttons() {
      return [
        {
          type: "star",
          label: "Star",
          value: this.stars,
        },
        {
          type: "fork",
          label: "Fork",
          value: this.forks,
        },
      ];
    },
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
    show(toggled) {
      this.shown = toggled;
    },
  },
};
</script>

<style lang="scss" src="./post.scss" scoped>

</style>
