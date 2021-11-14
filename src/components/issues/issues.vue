<template src="./issues.pug">

</template>

<script>

export default {
  name: "issue",
  props: ["url"],
  computed: {
    issues() {
      return this.$store.getters.getIssue(this.url + "/issues");
    },
  },
  async created() {
    // this.$store.dispatch("fetchIssues", this.url + "/issues");
  },
};
</script>

<style src="./issues.scss" lang="scss" scoped>

</style>
