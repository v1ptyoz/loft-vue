<template>
<div class="follower">
  <div class="follower__user">
    <div class="follower__img">
      <user :src="avatar"></user>
    </div>
    <div class="follower__info">
      <p>{{ username }}</p>
      <p>{{ usertype }}</p>
    </div>
  </div>
  <div class="follower__btn">
    <x-button>following</x-button>
  </div>
</div>
</template>

<script>
import user from "../user/user";
import xButton from "../x-button/x-button";
export default {
  name: "follower",
  components: {
    user,
    xButton,
  },
  props: ["avatar", "username", "usertype"]
}
</script>

<style lang="scss" scoped>
.follower {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.follower__user {
  display: flex;
  align-items: center;
  gap: 18px;
  .follower__img {
    width: 72px;
    height: 72px;
  }
}
.follower__btn {
  button {
    width: 115px;
    height: 42px;
  }
}
.follower__info {
  p:first-child {
    font-weight: 500;
    font-size: 18px;
    line-height: 22px;
    letter-spacing: -0.1px;
    color: #262626;
    margin-bottom: 6px;
  }
  p:last-child {
    font-weight: normal;
    font-size: 12px;
    line-height: 16px;
    color: #9E9E9E;
  }
}
</style>
