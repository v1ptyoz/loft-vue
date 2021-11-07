<template src="./actions.pug"></template>

<script>
import icons from "../icons/icons";
import action from "../action/action";
export default {
  name: "actions",
  components: { action, icons },
  props: {
    buttons: {
      type: Array,
    },
  },
};
</script>

<style lang="scss" src="./actions.scss" scoped></style>
