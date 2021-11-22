<template src="./storyslide.pug"></template>

<script>
import user from "../user/user";
import timeline from "../timeline/timeline";
import xButton from "../x-button/x-button";
import placeholder from "../placeholder/placeholder";
import icons from "../icons/icons";
import spinner from "../spinner/spinner";

export default {
  name: "storyslide",
  components: { user, timeline, xButton, placeholder, icons, spinner },
  props: {
    loading: Boolean,
    active: Boolean,
    slideNdx: {
      type: Number,
    },
    data: {
      type: Object,
      required: true,
    },
    btns: {
      type: Array,
      default: () => ["next", "prev"],
      validator(value) {
        return value.every((item) => item === "next" || item === "prev");
      },
    },
  },
  emits: ["onNext", "onPrev", "onProgressEnd", "onStarred"],
  methods: {
    onNext() {
      this.$emit("onNext");
    },
    onPrev() {
      this.$emit("onPrev");
    },
    onStarred() {
      this.$emit("onStarred", this.data.id);
    },
  },
};
</script>

<style lang="scss" src="./storyslide.scss" scoped></style>
