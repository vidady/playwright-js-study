import { expect } from '@playwright/test';
import { createBdd } from 'playwright-bdd';

import { Given, When, Then } from '../fixtures/fixtures';

Given('I am on home page', async ({ page }) => {
  await page.goto('https://playwright.dev');
});

When('I click link {string}', async ({ page }, name) => {
  await page.getByRole('link', { name }).click();
});

Then('I see in title {string}', async ({ page }, keyword) => {
  await expect(page).toHaveTitle(new RegExp(keyword));
});

Given('check the fixture pattern', async({page,homePage}) => {
   homePage.printsample();
});


