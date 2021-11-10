import issues from "./issues";

export default {
  title: "Issues List",
  component: { issues },
};

export const TwoIssues = () => ({
  components: { issues },
  template: `<issues :post-issues='[{
    author: "Username1",
    text: "lorem ipsum dolor amen",
  },
  {
    author: "Username2",
    text: "lorem ipsum dolor amen bal troq",
  },]' />`,
});
