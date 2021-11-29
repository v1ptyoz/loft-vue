import stories from "./stories.vue";

export default {
  title: "Stories list",
  component: stories,
};

export const defaultView = () => ({
  components: { stories },
  template: `<stories :user-stories='[
      {
        user: {
            name: "Username1",
            src: "https://picsum.photos/100"
          },
        storyItems: {},
      },
      {
        user: {
            name: "Username2",
            src: "https://picsum.photos/100"
          },
        storyItems: {},
      },
      {
        user: {
            name: "Username3",
            src: "https://picsum.photos/100"
          },
        storyItems: {},
      },
      {
        user: {
            name: "Username4",
            src: "https://picsum.photos/100"
          },
        storyItems: {},
      },
      ]'>
    </stories>`,
});

export const activeView = () => ({
  components: { stories },
  template: `<stories :user-stories='[
      {
        user: {
            name: "Username1",
            src: "https://picsum.photos/100"
          },
        storyItems: {},
      },
      {
        user: {
            name: "Username2",
            src: "https://picsum.photos/100"
          },
        storyItems: {},
      },
      {
        user: {
            name: "Username3",
            src: "https://picsum.photos/100"
          },
        storyItems: {},
      },
      {
        user: {
            name: "Username4",
            src: "https://picsum.photos/100"
          },
        storyItems: {},
      },
      ]' :is-active="true">
    </stories>`,
});

export const onlineView = () => ({
  components: { stories },
  template: `<stories :user-stories='[
      {
        user: {
            name: "Username1",
            src: "https://picsum.photos/100"
          },
        storyItems: {},
      },
      {
        user: {
            name: "Username2",
            src: "https://picsum.photos/100"
          },
        storyItems: {},
      },
      {
        user: {
            name: "Username3",
            src: "https://picsum.photos/100"
          },
        storyItems: {},
      },
      {
        user: {
            name: "Username4",
            src: "https://picsum.photos/100"
          },
        storyItems: {},
      },
      ]' :is-online="true">
    </stories>`,
});
