<template lang="pug" src="./toggler.pug"></template>

<script>
import icons from "../icons/icons";
export default {
  name: "toggler",
  components: { icons },
  data() {
    return {
      opened: false,
    };
  },
  methods: {
    toggle() {
      this.opened = !this.opened;
      this.$emit("onToggle", this.opened);
    },
  },
};
</script>

<style lang="scss" src="./toggler.scss" scoped></style>
