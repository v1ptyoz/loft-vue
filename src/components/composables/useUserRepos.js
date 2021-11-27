import { computed, onMounted } from "vue";
import { useStore } from "vuex";

export default () => {
  const { state, dispatch } = useStore();
  onMounted(() => {
    dispatch("fetchUserRepos");
  });

  return {
    repos: computed(() => state.userRepos),
  };
};
