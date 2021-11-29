import { shallowMount } from "@vue/test-utils";
import toggler from "./toggler";

it("Меняется надпись при клике", async () => {
    const wrapper = shallowMount(toggler);
    const span = wrapper.find("span");
    await wrapper.find('.toggler').trigger("click");
    expect(span.text()).toBe("Hide issues");
    await wrapper.find('.toggler').trigger("click");
    expect(span.text()).toBe("Show issues");
})
