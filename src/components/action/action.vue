<template src="./action.pug"></template>

<script>
import icons from "../icons/icons";
export default {
  name: "action",
  props: ["type", "label", "value"],
  components: { icons },
};
</script>

<style lang="scss" src="./action.scss" scoped></style>
