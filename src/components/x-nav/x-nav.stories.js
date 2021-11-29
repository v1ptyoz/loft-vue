import xNav from "./x-nav.vue";

export default {
  title: "Navigation",
  component: xNav,
};

export const inFeed = () => ({
  components: { xNav },
  template: `<xNav :current-user="{src: 'https://picsum.photos/200', name: 'username'}" />`,
});
