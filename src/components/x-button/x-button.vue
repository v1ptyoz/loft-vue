<template src="./x-button.pug"></template>

<script>
import spinner from "../../components/spinner/spinner";
export default {
  name: "x-button",
  components: {
    spinner,
  },
  props: ["loading"],
};
</script>

<style lang="scss" src="./x-button.scss" scoped></style>
