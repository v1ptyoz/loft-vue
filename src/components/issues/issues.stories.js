import issues from "./issues";

export default {
  title: "Issues List",
  component: { issues },
};

export const TwoIssues = () => ({
  components: { issues },
  methods: {
    created() {
      return "";
    },
  },
  template: `<issues :issues='[{
    user: {
      login: "Username1"
    },
    title: "lorem ipsum dolor amen",
  },
  {
    user: {
      login: "Username2"
    },
    title: "lorem ipsum dolor amen tut",
  },]' />`,
});
