import { test, expect } from '@playwright/test';

test.describe('Cydeo Practice Website Tests', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('https://practice.cydeo.com/');
  });

  test('Test Case 1: Verify URL and Title', async ({ page }) => {
    expect(page.url()).toContain('practice.cydeo');
    await expect(page).toHaveTitle('Practice');
  });

  test('Test Case 2: Verify links are displayed and enabled', async ({ page }) => {
    const links = page.locator('a');
    
    for (const link of await links.all()) {
      await expect(link).toBeVisible();
      await expect(link).toBeEnabled();
    }
  });

  test('Test Case 3: Verify Checkboxes element is included in the list of links', async ({ page }) => {
    const linksList = page.locator('//ul[@class="list-group"]/li');
    let checkboxesFound = false;

    for (const link of await linksList.all()) {
      if (await link.textContent() === 'Checkboxes') {
        checkboxesFound = true;
        break;
      }
    }

    expect(checkboxesFound).toBeTruthy();
  });


});