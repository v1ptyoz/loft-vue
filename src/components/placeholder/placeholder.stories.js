import placeholder from "./placeholder";

export default {
  title: "Placeholder",
  component: placeholder,
};

export const ThreeLines = () => ({
  components: { placeholder },
  template: '<placeholder :paragraphs="3" />',
});
