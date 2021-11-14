<template lang="pug">
.placeholder(v-for="line in this.lines")
  p
  p
  p
</template>

<script>
export default {
  name: "placeholder",
  props: ["paragraphs"],
  computed: {
    lines() {
      return this.paragraphs ? this.paragraphs : 1;
    },
  },
};
</script>

<style lang="scss" scoped>
.placeholder {
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
  gap: 10px;
  p {
    display: block;
    height: 10px;
    background: #aaaaaa;
  }
  p:nth-child(1) {
    width: 90%;
  }
  p:nth-child(2) {
    width: 40%;
  }
  p:nth-child(3) {
    width: 60%;
  }
}
</style>
