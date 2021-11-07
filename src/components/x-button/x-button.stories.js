import xButton from './x-button'

export default {
    title: "Button",
    component: xButton,
};

export const defaultView = () => ({
    components: { xButton },
    template: '<xButton caption="Button" width="220" height="40" />',
});
