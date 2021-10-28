<template src="./stories.pug"></template>

<script>
import Storie from "@/components/storie/storie";
export default {
  name: "stories",
  props: ["userStories"],
  components: {
    Storie,
  },
};
</script>

<style src="./stories.css" scoped></style>
