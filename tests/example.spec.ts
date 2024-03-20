import { test, expect } from "./api";

test("cannot tear down", async ({ page, something, context }) => {
  expect(something).toEqual("yes");
  await page.goto("https://playwright.dev/");

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);
});

test("cannot tear down 2", async ({ page, something, context }) => {
  expect(something).toEqual("yes");
  await page.goto("https://playwright.dev/");

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);
});
