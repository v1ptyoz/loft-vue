<template lang="pug" src="./issues.pug"></template>

<script>
import placeholder from "../placeholder/placeholder";
export default {
  name: "issue",
  props: ["url"],
  components: { placeholder },
  computed: {
    issues() {
      return this.$store.getters.getIssue(this.url + "/issues");
    },
  },
  async created() {
    if (this.issues) {
      return;
    }
    await this.$store.dispatch("fetchIssues", this.url + "/issues");
  },
};
</script>

<style src="./issues.scss" lang="scss" scoped></style>
