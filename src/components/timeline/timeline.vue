<template src="./timeline.pug"></template>

<script>
export default {
  name: "timeline",
  props: ["active"],
  emits: ["onFinish"],
  methods: {
    emitOnFinish() {
      this.$emit("onFinish");
    },
  },
  mounted() {
    this.$refs.indicator.addEventListener("transitionend", this.emitOnFinish);
  },
  beforeUnmount() {
    this.$refs.indicator.removeEventListener("transitionend", this.emitOnFinish);
  }
};
</script>

<style lang="scss" src="./timeline.scss" scoped></style>
