<template src="./x-nav.pug"></template>

<script>
import icons from "../icons/icons";
import user from "../user/user";
import { mapState } from "vuex";
export default {
  name: "xNav",
  components: { icons, user },
  computed: {
    ...mapState({
      currentUser: (state) => state.user,
    }),
  },
  methods: {
    logout() {
      localStorage.removeItem("token");
      this.$router.push({ name: "auth" });
    },
  },
};
</script>

<style lang="scss" src="./x-nav.scss" scoped></style>
