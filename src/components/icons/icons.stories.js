import icons from "./icons";

export default {
    title: "Icons",
    component: icons,
};

export const star = () => ({
    components: { icons },
    template: '<icons name="star" style="width: 50px"/>',
});

export const fork = () => ({
    components: { icons },
    template: '<icons name="fork" style="width: 50px"/>',
});

export const arrow = () => ({
    components: { icons },
    template: '<icons name="arrow" style="width: 50px"/>',
});

export const exit = () => ({
    components: { icons },
    template: '<icons name="exit" style="width: 50px"/>',
});

export const home = () => ({
    components: { icons },
    template: '<icons name="home" style="width: 50px"/>',
});

export const logo = () => ({
    components: { icons },
    template: '<icons name="logo" style="width: 50px"/>',
});
