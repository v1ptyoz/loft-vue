<template src="./x-button.pug">

</template>

<script>
export default {
  name: "x-button",
  props: ["caption", "width", "height"],
  computed: {
    setSize() {
      return `width: ${this.width}px; height: ${this.height}px`;
    },
  },
}
</script>

<style lang="scss" src="./x-button.scss" scoped>

</style>
