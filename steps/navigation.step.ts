import { createBdd } from 'playwright-bdd';
import { test } from '../fixtures/test.fixture';

const { When, Then } = createBdd(test);

When('the user clicks Sustainability', async ({ homePage }) => {
  await homePage.clickSustainability();
});

Then('the Sustainability page should be displayed', async ({ homePage }) => {
  await homePage.verifySustainabilityPage();
});