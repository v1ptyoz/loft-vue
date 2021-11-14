<template src="./feed.pug"></template>

<script>
import xHeader from "../../x-header/x-header";
import Post from "@/components/post/post";
import Stories from "@/components/stories/stories";
import { mapState } from "vuex";

export default {
  name: "Feed",
  components: {
    xHeader,
    Post,
    Stories,
  },
  methods: {
    storyClick(ndx) {
      this.$router.push({ name: "stories", params: { initialSlide: ndx } });
    },
  },
  computed: {
    ...mapState({
      posts: (state) => state.repos,
    }),
  },
  created() {
    this.$store.dispatch("fetchRepos");
  },
};
</script>
<style lang="scss" src="./feed.scss"></style>
