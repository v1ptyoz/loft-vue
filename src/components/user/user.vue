<template src="./user.pug"></template>

<script>
export default {
  name: "user",
  props: [
    "name",
    "src",
    "inStories",
    "active",
    "online",
    "inNav",
    "inStoriesPost",
  ],
};
</script>

<style lang="scss" src="./user.scss" scoped></style>
