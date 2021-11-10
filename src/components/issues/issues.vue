<template src="./issues.pug">

</template>

<script>
import { getIssues } from "@/services/networkService";

export default {
  name: "issue",
  props: ["url", "postIssuesCount"],
  data() {
    return {
      issues: {},
    };
  },
  async created() {
    try {
      const { data } = await getIssues(this.url + "/issues");
      this.issues = data;
    } catch (e) {
      throw new Error(e);
    }
  },
};
</script>

<style src="./issues.scss" lang="scss" scoped>

</style>
