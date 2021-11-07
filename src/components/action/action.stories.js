import action from "./action.vue";

export default {
  title: "Action button",
  component: action,
};

export const fork = () => ({
  components: { action },
  template: '<action type="fork" label="Fork" value="300" />',
});

export const star = () => ({
  components: { action },
  template: '<action type="star" label="Star" value="300" />',
});
