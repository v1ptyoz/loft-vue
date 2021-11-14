<template src="./storySlider.pug">

</template>

<script>
import icons from "../icons/icons";
import storyslide from "@/components/storySlide/storyslide";
import { mapState, mapActions } from "vuex";

export default {
  name: "storySlider",
  components: { icons, storyslide },
  props: {
    initialSlide: {
      type: Number,
    },
  },
  data() {
    return {
      slideNdx: 0,
      currentPosition: 0,
      loading: false,
      showBtn: true,
    };
  },
  computed: {
    ...mapState({
      trendings: (state) => state.repos,
    }),
    activeBtns() {
      if (this.showBtn === false) return [];
      if (this.slideNdx === 0) return ["next"];
      if (this.slideNdx === this.trendings.length - 1) return ["prev"];
      return ["next", "prev"];
    },
  },
  methods: {
    ...mapActions({
      fetchTrendings: "fetchRepos",
      fetchReadme: "fetchReadme",
      async fetchReadmeForActiveSlide() {
        const { id, owner, name } = this.trendings[this.slideNdx];
        await this.fetchReadme({ id, owner: owner.login, repo: name });
      },
    }),
    getData(obj) {
      return {
        id: obj.id,
        username: obj.owner.login,
        userAvatar: obj.owner.avatar_url,
        content: obj.readme,
      }
    },
    moveSlide(to) {
      const { slider, item } = this.$refs;
      const width = parseInt(getComputedStyle(item).getPropertyValue("width"), 10);
      this.slideNdx = to;
      this.currentPosition = -(width * to);
      slider.style.transform = `translateX(${this.currentPosition}px)`;
    },
    async move(to) {
      this.moveSlide(to);
      await this.loadReadme();
    },
    async loadReadme() {
      this.loading = true;
      this.showBtn = false;
      try {
        await this.fetchReadmeForActiveSlide();
      } catch (e) {
        throw new Error(e);
      } finally {
        this.loading = false;
        this.showBtn = true;
      }
    },
  },
  async mounted() {
    if (this.initialSlide) {
      await this.move(this.initialSlide);
    }
    await this.fetchTrendings();
    await this.fetchReadmeForActiveSlide();
  },
};
</script>

<style lang="scss" src="./storySlider.scss" scoped></style>
