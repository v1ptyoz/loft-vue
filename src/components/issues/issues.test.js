import { mount } from "@vue/test-utils";
import issues from "./issues";

it("Меняется надпись при клике", async () => {
    const wrapper = mount(issues);

    // const span = wrapper.find("span");
    // await wrapper.find('.toggler').trigger("click");
    // expect(span.text()).toBe("Hide issues");
})
