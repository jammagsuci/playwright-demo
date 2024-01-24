import { test, expect } from "@playwright/test";

test("test", async ({ page }) => {
  await page.goto("https://production.contosotraders.com/");
  await page.getByPlaceholder("Search by product name or").click();
  await page.getByPlaceholder("Search by product name or").click();
  await page.getByPlaceholder("Search by product name or").fill("xbox");
  await page.getByRole("button", { name: "iconimage" }).click();
  await page.getByPlaceholder("Search by product name or").click();
  await page.getByPlaceholder("Search by product name or").press("Enter");
  await page.getByPlaceholder("Search by product name or").click();
  await page.getByPlaceholder("Search by product name or").click();
  await page.getByPlaceholder("Search by product name or").click();
  await page.getByPlaceholder("Search by product name or").fill("xbox");
  await page.getByPlaceholder("Search by product name or").press("Enter");
  await page.getByPlaceholder("Search by product name or").click();
  await page.getByPlaceholder("Search by product name or").fill("controller");
  await page.getByPlaceholder("Search by product name or").press("Enter");
});
