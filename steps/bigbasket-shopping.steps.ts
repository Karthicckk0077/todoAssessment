import { createBdd } from 'playwright-bdd';
import { test } from '../fixtures/test.fixture';

const { Given, When, Then } = createBdd(test);

Given('the user navigates to the BigBasket home page', async ({ bigBasketHomePage }) => {
  await bigBasketHomePage.navigateToBigBasketHomePage();
});

Then('the BigBasket page title should contain {string}', async ({ bigBasketHomePage }, expectedTitle: string) => {
  await bigBasketHomePage.verifyTitleContains(expectedTitle);
});

Then('the BigBasket search box should be visible', async ({ bigBasketHomePage }) => {
  await bigBasketHomePage.verifySearchBoxVisible();
});

When('the user searches for {string}', async ({ bigBasketHomePage }, productName: string) => {
  await bigBasketHomePage.searchProduct(productName);
});

Then('search results should be displayed', async ({ bigBasketHomePage }) => {
  await bigBasketHomePage.verifySearchResultsDisplayed();
});

When('the user adds the first product to cart', async ({ bigBasketHomePage }) => {
  await bigBasketHomePage.addFirstProductToCart();
});

Then('the cart should show added product', async ({ bigBasketHomePage }) => {
  await bigBasketHomePage.verifyCartHasProduct();
});

When('the user increases the product quantity', async ({ bigBasketHomePage }) => {
  await bigBasketHomePage.increaseProductQuantity();
});

Then('the updated quantity should be visible', async ({ bigBasketHomePage }) => {
  await bigBasketHomePage.verifyUpdatedQuantityVisible();
});

When('the user removes the product from cart', async ({ bigBasketHomePage }) => {
  await bigBasketHomePage.removeProductFromCart();
});

Then('the cart should be empty or product should be removed', async ({ bigBasketHomePage }) => {
  await bigBasketHomePage.verifyCartEmptyOrProductRemoved();
});

When('the user opens Fruits and Vegetables category', async ({ bigBasketHomePage }) => {
  await bigBasketHomePage.openFruitsAndVegetablesCategory();
});

Then('Fruits and Vegetables products should be displayed', async ({ bigBasketHomePage }) => {
  await bigBasketHomePage.verifyFruitsAndVegetablesDisplayed();
});

When('the user opens login or account section', async ({ bigBasketHomePage }) => {
  await bigBasketHomePage.openLoginSection();
});

Then('the login popup should be displayed', async ({ bigBasketHomePage }) => {
  await bigBasketHomePage.verifyLoginPopupDisplayed();
});

When('the user opens the first product', async ({ bigBasketHomePage }) => {
  await bigBasketHomePage.openFirstProduct();
});

Then('the product detail page should be displayed', async ({ bigBasketHomePage }) => {
  await bigBasketHomePage.verifyProductDetailPageDisplayed();
});

When('the user opens the cart', async ({ bigBasketHomePage }) => {
  await bigBasketHomePage.openCart();
});

Then('the cart page or cart popup should be displayed', async ({ bigBasketHomePage }) => {
  await bigBasketHomePage.verifyCartPageOrPopupDisplayed();
});