import user from "./user.vue";

export default {
  title: "User",
  component: user,
};

export const inPost = () => ({
  components: { user },
  template:
    '<user name="Никнейм" src="https://picsum.photos/200" :in-stories=false />',
});

export const inStoriesNav = () => ({
  components: { user },
  template:
    '<user name="Никнейм" src="https://picsum.photos/200" :in-stories=true />',
});

export const inStoriesNavActive = () => ({
  components: { user },
  template:
    '<user name="Никнейм" src="https://picsum.photos/200" :in-stories=true :active=true />',
});

export const inStoriesNavOnline = () => ({
  components: { user },
  template:
    '<user name="Никнейм" src="https://picsum.photos/200" :in-stories=true :active=true :online=true />',
});

export const inNav = () => ({
  components: { user },
  template:
    '<user name="Никнейм" src="https://picsum.photos/200" :in-nav=true />',
});

export const inStoriesPost = () => ({
  components: { user },
  template:
    '<user name="Никнейм" src="https://picsum.photos/200" :in-stories-post=true />',
});
