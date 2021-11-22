<template lang="pug">
.auth
  .auth__wrapper
    .auth__logo
      icons(name="logo")
    .auth__content
      p More than just one repository. This is our digital world.
      x-button(@click="getUser")
        span Authorize with github
        icons(name="github")
  .auth__img
      img(src="../../../assets/auth.png")
</template>

<script>
import Icons from "../../icons/icons";
import XButton from "../../x-button/x-button";
import { getCode, getToken } from "../../../services/networkService";
export default {
  name: "auth",
  components: { XButton, Icons },
  methods: {
    getUser() {
      getCode();
    },
  },
  async created() {
    const code = new URLSearchParams(window.location.search).get("code");
    if (code) {
      try {
        const { data } = await getToken(code);
        localStorage.setItem("token", data.access_token);
        this.$router.replace("/");
      } catch (e) {
        throw new Error(e);
      }
    }
  },
};
</script>

<style lang="scss" scoped>
.auth {
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  overflow: hidden;
}
.auth__wrapper {
  display: inline-flex;
  flex-direction: column;
  margin-left: 25%;
}
.auth__logo {
  margin-bottom: 25px;
  svg {
    height: 40px;
  }
}
.auth__content {
  p {
    font-size: 18px;
    color: #6f6f6f;
    max-width: 256px;
    margin-bottom: 54px;
    position: relative;
  }
  button {
    width: 252px;
    height: 44px;
    svg {
      height: 24px;
    }
  }
}
.auth__img {
  position: absolute;
  bottom: 0;
  top: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  left: 50%;
}
</style>
