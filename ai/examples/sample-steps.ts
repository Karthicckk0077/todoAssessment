/*
Example Step Definition

import { createBdd } from 'playwright-bdd';
import { test } from '../fixtures/test.fixture';

const { Given, When, Then } = createBdd(test);

Given(
  'the user navigates to the Products page',
  async ({ automationExerciseHomePage }) => {
    await automationExerciseHomePage.openProductsPage();
  }
);

When(
  'the user searches product {string}',
  async (
    { automationExerciseHomePage },
    productName: string
  ) => {
    await automationExerciseHomePage.searchProduct(productName);
  }
);

Then(
  'matching products should be displayed',
  async ({ automationExerciseHomePage }) => {
    await automationExerciseHomePage.verifySearchedProductsDisplayed();
  }
);
*/