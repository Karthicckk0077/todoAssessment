import { createBdd } from 'playwright-bdd';
import { expect } from '@playwright/test';
import { test } from '../fixtures/test.fixture';

const { Given, Then } = createBdd(test);

Given('the user navigates to the Bekaert home page', async ({ homePage }) => {
  await homePage.navigateToHomePage();
});

Then('the page title should contain {string}', async ({ homePage }, expectedTitle: string) => {
  await homePage.verifyTitleContains(expectedTitle);
});

Then('the user should be on the Bekaert home page', async ({ page }) => {
  await page.waitForLoadState('domcontentloaded');

  const currentUrl = page.url();

  expect(currentUrl).toContain('bekaert.com');
});

Then('the main navigation should be visible', async ({ headerComponent }) => {
  await headerComponent.verifyNavigationVisible();
});

Then('the footer section should be visible', async ({ footerComponent }) => {
  await footerComponent.verifyFooterVisible();
});