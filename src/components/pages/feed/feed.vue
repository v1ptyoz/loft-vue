<template src="./feed.pug"></template>

<script>
import xHeader from "../../x-header/x-header";
import Post from "@/components/post/post";
import { getPosts } from "@/services/networkService";

export default {
  name: "Feed",
  components: {
    xHeader,
    Post,
  },
  data() {
    return {
      posts: [],
    };
  },
  async created() {
    try {
      const { data } = await getPosts();
      this.posts = data.items;
    } catch (e) {
      throw new Error(e);
    }
  },
};
</script>
