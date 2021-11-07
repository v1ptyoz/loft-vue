<template src="./timeline.pug"></template>

<script>
export default {
  name: "timeline",
  data() {
    return {
      val: 80,
      max: 100,
    };
  },
  computed: {
    style() {
      return `right: ${this.val}%`;
    },
  },
};
</script>

<style lang="scss" src="./timeline.scss" scoped></style>
