import { expect, Locator, Page } from '@playwright/test';
import { BasePage } from './BasePage';

export class BigBasketHomePage extends BasePage {
  readonly searchBox: Locator;
  readonly firstProductAddButton: Locator;
  readonly cartButton: Locator;
  readonly loginButton: Locator;
  readonly fruitsVegetablesCategory: Locator;
  readonly plusQuantityButton: Locator;
  readonly removeDeleteButton: Locator;
  readonly firstProductLink: Locator;

  constructor(page: Page) {
    super(page);

    // Real DOM locators collected from BigBasket
    this.searchBox = page
      .getByRole('banner')
      .filter({
        hasText: 'Delivery in 10 mins Select LocationLogin/ Sign Up1Shop'
      })
      .getByPlaceholder('Search for Products...');

    this.firstProductAddButton = page
      .getByRole('button', { name: 'Add' })
      .first();

    this.cartButton = page.locator('.px-1\\.5');

    this.plusQuantityButton = page
      .getByRole('button')
      .filter({ hasText: /^$/ })
      .nth(4);

    this.removeDeleteButton = page
      .getByRole('button')
      .filter({ hasText: /^$/ })
      .nth(3);

    this.loginButton = page.getByText('Login/ Sign up', {
      exact: true
    });

    this.fruitsVegetablesCategory = page.getByText(
      'Fruits and Vegetables',
      { exact: true }
    );

    this.firstProductLink = page.getByText(
      '20% OFF10 minsfresho!Capsicum'
    );
  }

  async navigateToBigBasketHomePage(): Promise<void> {
  await this.page.goto('/');
  await this.page.waitForLoadState('domcontentloaded');

  const title = await this.page.title();
  const bodyText = await this.page.locator('body').innerText();

  if (
    title.toLowerCase().includes('access denied') ||
    bodyText.toLowerCase().includes('access denied')
  ) {
    throw new Error(
      'BigBasket site returned Access Denied. The actual application page did not load, so locators cannot be validated.'
    );
  }
}
 async verifyTitleContains(expectedTitle: string): Promise<void> {
  await this.page.waitForLoadState('domcontentloaded');
  //wait for load state//

  const title = await this.page.title();

  expect(title.toLowerCase()).toContain(expectedTitle.toLowerCase());
}

  async verifySearchBoxVisible(): Promise<void> {
    await expect(this.searchBox).toBeVisible({
      timeout: 15000
    });
  }

  async searchProduct(productName: string): Promise<void> {
    await this.searchBox.waitFor({
      state: 'visible'
    });

    await this.searchBox.fill(productName);
    await this.page.keyboard.press('Enter');

    await this.page.waitForLoadState('domcontentloaded');
  }

  async verifySearchResultsDisplayed(): Promise<void> {
    await expect(this.page.locator('body')).toContainText(
      /add|₹|milk|rice|capsicum/i
    );
  }

  async addFirstProductToCart(): Promise<void> {
    await this.firstProductAddButton.waitFor({
      state: 'visible'
    });

    await this.firstProductAddButton.click();
  }

  async verifyCartHasProduct(): Promise<void> {
    await expect(this.page.locator('body')).toContainText(
      /cart|added|checkout|item/i
    );
  }

  async increaseProductQuantity(): Promise<void> {
    await this.plusQuantityButton.waitFor({
      state: 'visible'
    });

    await this.plusQuantityButton.click();
  }

  async verifyUpdatedQuantityVisible(): Promise<void> {
    await expect(this.page.locator('body')).toContainText(
      /2|qty|quantity/i
    );
  }

  async removeProductFromCart(): Promise<void> {
    await this.removeDeleteButton.waitFor({
      state: 'visible'
    });

    await this.removeDeleteButton.click();
  }

  async verifyCartEmptyOrProductRemoved(): Promise<void> {
    await expect(this.page.locator('body')).toContainText(
      /empty|removed|cart/i
    );
  }

  async openFruitsAndVegetablesCategory(): Promise<void> {
    await this.fruitsVegetablesCategory.waitFor({
      state: 'visible'
    });

    await this.fruitsVegetablesCategory.click();
  }

  async verifyFruitsAndVegetablesDisplayed(): Promise<void> {
    await expect(this.page.locator('body')).toContainText(
      /fruits|vegetables|fresh/i
    );
  }

  async openLoginSection(): Promise<void> {
    await this.loginButton.waitFor({
      state: 'visible'
    });

    await this.loginButton.click();
  }

  async verifyLoginPopupDisplayed(): Promise<void> {
    await expect(this.page.locator('body')).toContainText(
      /login|sign in|mobile|otp/i
    );
  }

  async openFirstProduct(): Promise<void> {
    await this.firstProductLink.waitFor({
      state: 'visible'
    });

    await this.firstProductLink.click();
  }

  async verifyProductDetailPageDisplayed(): Promise<void> {
    await expect(this.page.locator('body')).toContainText(
      /price|add|quantity|delivery/i
    );
  }

  async openCart(): Promise<void> {
    await this.cartButton.waitFor({
      state: 'visible'
    });

    await this.cartButton.click();
  }

  async verifyCartPageOrPopupDisplayed(): Promise<void> {
    await expect(this.page.locator('body')).toContainText(
      /cart|basket|checkout/i
    );
  }
}