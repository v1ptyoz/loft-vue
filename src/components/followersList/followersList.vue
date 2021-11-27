<template>
  <div class="followers__header">
    <h2>Followers</h2>
    <span> {{ followers.length }} </span>
  </div>
  <ul class="followers__list">
    <li v-for="item in followers" :key="item.id">
      <follower :avatar="item.avatar_url" :username="item.login" :usertype="item.type"></follower>
    </li>
  </ul>
</template>

<script>
import Follower from "../follower/follower";
import useFollowers from "../composables/useFollowers";
export default {
  name: "followers",
  components: {
    Follower,
  },
  setup() {
    return {
      ...useFollowers(),
    };
  }
};
</script>

<style lang="scss" scoped>
.followers__header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 30px;
  h2 {
    font-size: 26px;
    line-height: 28px;
    color: #262626;
  }
  span {
    font-size: 18px;
    color: #9E9E9E;
  }
}
.followers__list {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 32px;
}
</style>
