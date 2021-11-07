import actions from "./actions.vue";

export default {
  title: "Several actions buttons",
  component: { actions },
};

export const twoActions = () => ({
  components: { actions },
  template: `<actions :buttons='[{
    type: "fork",
    label: "Fork",
    value: 300,
  },
  {
    type: "star",
    label: "Star",
    value: 200,
  },]' />`,
});
