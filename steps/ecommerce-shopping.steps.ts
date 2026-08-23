import { createBdd } from 'playwright-bdd';
import { test } from '../fixtures/test.fixture';
import { DataReader } from '../utils/dataReader';

const { Given, When, Then } = createBdd(test);

Given('the user navigates to the Automation Exercise home page', async ({ automationExerciseHomePage }) => {
  await automationExerciseHomePage.navigateToAutomationExerciseHomePage();
});

Then('the Automation Exercise page title should contain {string}', async ({ automationExerciseHomePage }, expectedTitle: string) => {
  await automationExerciseHomePage.verifyTitleContains(expectedTitle);
});

When('the user opens the Automation Exercise Products page', async ({ automationExerciseHomePage }) => {
  await automationExerciseHomePage.openProductsPage();
});

Then('the Automation Exercise Products page should be displayed', async ({ automationExerciseHomePage }) => {
  await automationExerciseHomePage.verifyProductsPageDisplayed();
});

When('the user searches Automation Exercise product {string}', async ({ automationExerciseHomePage }, productName: string) => {
  await automationExerciseHomePage.searchProduct(productName);
});

Then('Automation Exercise searched products should be displayed', async ({ automationExerciseHomePage }) => {
  await automationExerciseHomePage.verifySearchedProductsDisplayed();
});

When('the user opens the first Automation Exercise product detail', async ({ automationExerciseHomePage }) => {
  await automationExerciseHomePage.openFirstProductDetail();
});

Then('Automation Exercise product detail page should be displayed', async ({ automationExerciseHomePage }) => {
  await automationExerciseHomePage.verifyProductDetailPageDisplayed();
});

When('the user adds the first Automation Exercise product to cart', async ({ automationExerciseHomePage }) => {
  await automationExerciseHomePage.addFirstProductToCart();
});

Then('the Automation Exercise product should be added to cart', async ({ automationExerciseHomePage }) => {
  await automationExerciseHomePage.verifyProductAddedToCart();
});

When('the user opens the Automation Exercise Cart page', async ({ automationExerciseHomePage }) => {
  await automationExerciseHomePage.openCartPage();
});

Then('the Automation Exercise Cart page should be displayed', async ({ automationExerciseHomePage }) => {
  await automationExerciseHomePage.verifyCartPageDisplayed();
});

When('the user removes the Automation Exercise product from cart', async ({ automationExerciseHomePage }) => {
  await automationExerciseHomePage.removeProductFromCart();
});

Then('the Automation Exercise cart should be empty', async ({ automationExerciseHomePage }) => {
  await automationExerciseHomePage.verifyCartIsEmpty();
});

When('the user opens Automation Exercise Signup Login page', async ({ automationExerciseHomePage }) => {
  await automationExerciseHomePage.openSignupLoginPage();
});

Then('the Automation Exercise Signup Login page should be displayed', async ({ automationExerciseHomePage }) => {
  await automationExerciseHomePage.verifySignupLoginPageDisplayed();
});

When('the user opens Automation Exercise Test Cases page', async ({ automationExerciseHomePage }) => {
  await automationExerciseHomePage.openTestCasesPage();
});

Then('the Automation Exercise Test Cases page should be displayed', async ({ automationExerciseHomePage }) => {
  await automationExerciseHomePage.verifyTestCasesPageDisplayed();
});

Then('the Automation Exercise subscription section should be visible', async ({ automationExerciseHomePage }) => {
  await automationExerciseHomePage.verifySubscriptionSectionVisible();
});