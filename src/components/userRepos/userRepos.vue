<template>
  <div class="repos__header">
    <h2>Repositories</h2>
    <span>{{ repos.length }}</span>
  </div>
  <post
    v-for="post in repos"
    :key="post.id"
    :has-header="false"
    :post-title="post.name"
    :post-content="post.description"
    :stars="post.stargazers_count"
    :forks="post.forks_count"
    :url="post.url"
    :id="post.id"
    :owner="post.owner.login"
    :repo="post.name"
  >
  </post>
</template>

<script>
import post from "../../components/post/post";
import useUserRepos from "../composables/useUserRepos";

export default {
  name: "userRepos",
  components: {
    post,
  },
  setup() {
    return {
      ...useUserRepos(),
    };
  },
};
</script>

<style lang="scss" scoped>
.repos__header {
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
    color: #9e9e9e;
  }
}
</style>
