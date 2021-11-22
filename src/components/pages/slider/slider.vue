<template>
  <storyslider
    :initialSlide="$route.params.initialSlide"
  ></storyslider>
</template>

<script>
import storyslider from "../../storySlider/storySlider";
export default {
  name: "slider",
  components: {
    storyslider,
  },
};
</script>
