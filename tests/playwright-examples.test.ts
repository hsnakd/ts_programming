import { test, expect, Locator } from "@playwright/test";

test.describe("Test Group", () => {
  let links: Locator;

  test.beforeEach(async ({ page }) => {
    await page.goto("https://practice.cydeo.com/");
    links = page.locator("//li[@class='list-group-item']/a");
  });

  test("Verify that URL contains practice.cydeo and title is practice", async ({
    page,
  }) => {
    expect(page.url()).toContain("practice.cydeo");
    expect(await page.title()).toBe("Practice");
  });

  test("Verify that all the practice links are displayed and enabled", async ({
    page,
  }) => {
    for (let eachLink of await links.all()) {
      await expect(eachLink).toBeVisible();
      await expect(eachLink).toBeEnabled();
    }
  });

  test("Verify Checkboxes element is inlcuded in the list of practice links", async ({
    page,
  }) => {
    let checkboxesElementExist: boolean = false;

    for (let eachLink of await links.all()) {
      if ((await eachLink.innerText()) === "Checkboxes") {
        checkboxesElementExist = true;
        break;
      }
    }
    expect(checkboxesElementExist).toBeTruthy();
  });
  
});
