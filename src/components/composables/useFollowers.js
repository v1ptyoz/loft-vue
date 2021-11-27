import { computed, onMounted } from "vue";
import { useStore } from "vuex";

export default () => {
  const { dispatch, state } = useStore();
  onMounted(() => {
    dispatch("fetchFollowers");
  });
  return {
    followers: computed(() => state.user.followersList),
  };
};
