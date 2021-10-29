<template src="./post.pug">

</template>

<script>
import author from "@/components/author/author";
import actions from "@/components/actions/actions";
import toggler from "@/components/toggler/toggler";
export default {
  name: "Post",
  components: {
    author,
    actions,
    toggler,
  },
  props: [
    "postTitle",
    "postContent",
    "postAuthor",
    "postAuthorImage",
    "stars",
    "forks",
    "postComments",
    "postDate",
  ],
  emits: ["toggled"],
};
</script>

<style src="./post.css" scoped>

</style>
