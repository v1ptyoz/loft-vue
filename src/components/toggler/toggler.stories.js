import toggler from "./toggler";

export default {
    title: "Toggler",
    component: toggler,
};

export const hideOrShow = () => ({
    components: { toggler },
    template: '<toggler />',
});
