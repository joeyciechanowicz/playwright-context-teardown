export { expect } from "@playwright/test";
import { test as base, BrowserContext } from "@playwright/test";

export const test = base.extend<{ something: string }>({
  something: async ({ context, baseURL }, use) => {
    context.on("response", async (response) => {
      const someHeader = await response.headerValue("test");
      console.log("Response from", response.url(), someHeader);
    });

    await use("yes");
  },
});
