import timeline from "./timeline";

export default {
  title: "Timeline",
  component: { timeline },
};

export const defaultView = () => ({
  components: { timeline },
  template: `<timeline />`,
});
