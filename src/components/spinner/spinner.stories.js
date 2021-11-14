import spinner from "./spinner";

export default {
    title: "Spinner",
    component: spinner,
};

export const defaultView = () => ({
    components: { spinner },
    template: '<spinner />',
});
