import storyslide from "./storyslide";

export default {
    title: "Story Slide",
    component: storyslide,
};

export const defaultView = () => ({
    components: { storyslide },
    template: '<storyslide />',
});
