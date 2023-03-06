/**
 * @vitest-environment happy-dom
 */
import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import Search from "../components/ExplorerComponets/Search.vue";

describe("Search input auto-completes when pressing search-random button", () => {
  it("should auto-complete", async () => {
    const wrapper1 = mount(Search);
    await wrapper1.find("#randomSearchBtn").trigger("click");
    expect(wrapper1.find("#searchInput").element.value !== "").toBeTruthy();
  });
});
