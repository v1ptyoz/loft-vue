<template src="./actions.pug"></template>

<script>
import action from "../action/action";
export default {
  name: "actions",
  components: { action },
  props: ["stars", "forks"],
};
</script>

<style lang="scss" src="./actions.scss" scoped></style>
