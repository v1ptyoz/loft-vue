<template src="./toggler.pug"></template>

<script>
export default {
  name: "toggler",
  props: {
    label: String,
  },
  data() {
    return {
      opened: true,
    };
  },
  methods: {
    toggle() {
      this.opened = !this.opened;
      this.$emit("toggled", this.opened);
    },
  },
};
</script>

<style src="./toggler.css" scoped></style>
