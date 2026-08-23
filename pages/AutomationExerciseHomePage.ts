import { Locator, Page } from '@playwright/test';
import { BasePage } from './BasePage';
import { AssertionUtil } from '../utils/assertionUtil';
import { WaitUtil } from '../utils/waitUtil';
import { Logger } from '../utils/logger';


export class AutomationExerciseHomePage extends BasePage {
  readonly productsLink: Locator;
  readonly cartLink: Locator;
  readonly signupLoginLink: Locator;
  readonly testCasesLink: Locator;
  readonly searchProductInput: Locator;
  readonly searchButton: Locator;
  readonly firstProductAddToCartButton: Locator;
  readonly continueShoppingButton: Locator;
  readonly viewCartLink: Locator;
  readonly firstProductViewProductLink: Locator;
  readonly removeProductButton: Locator;
  readonly subscriptionSection: Locator;
  readonly modalContent: Locator;
  readonly cartProductRows: Locator;

  constructor(page: Page) {
    super(page);

    this.productsLink = page.getByRole('link', { name: /Products/i });
    this.cartLink = page.getByRole('link', { name: /Cart/i });
    this.signupLoginLink = page.getByRole('link', { name: /Signup \/ Login/i });
    this.testCasesLink = page.locator('a[href="/test_cases"]').first();

    this.searchProductInput = page.locator('#search_product');
    this.searchButton = page.locator('#submit_search');

    this.firstProductAddToCartButton = page
      .locator('.features_items .productinfo a.add-to-cart[data-product-id="1"]')
      .first();

    this.continueShoppingButton = page.getByRole('button', { name: /Continue Shopping/i });
    this.viewCartLink = page
      .locator('a[href="/view_cart"]')
      .filter({ hasText: /View Cart/i })
      .first();

    this.firstProductViewProductLink = page.getByRole('link', { name: /View Product/i }).first();

    this.removeProductButton = page.locator('a.cart_quantity_delete').first();

    this.subscriptionSection = page.locator('#footer');
    this.modalContent = page.locator('.modal-content');
    this.cartProductRows = page.locator('#cart_info_table tbody tr');
  }

  async navigateToAutomationExerciseHomePage(): Promise<void> {
    Logger.info('Navigating to Automation Exercise home page');

    await this.page.goto('/');
    await WaitUtil.waitForPageLoad(this.page);
  }

  async verifyTitleContains(expectedTitle: string): Promise<void> {
    Logger.info(`Verifying page title contains: ${expectedTitle}`);

    await AssertionUtil.verifyPageTitleContains(this.page, expectedTitle);
  }

  async openProductsPage(): Promise<void> {
    Logger.info('Opening Products page');

    await this.productsLink.click();
    await WaitUtil.waitForPageLoad(this.page);
  }

  async verifyProductsPageDisplayed(): Promise<void> {
    Logger.info('Verifying Products page is displayed');

    await AssertionUtil.verifyPageUrlContains(this.page, /products/i);
    await AssertionUtil.verifyBodyTextVisible(this.page, /All Products/i);
  }

  async searchProduct(productName: string): Promise<void> {
    Logger.info(`Searching product: ${productName}`);

    await WaitUtil.waitForElementVisible(this.searchProductInput);
    await this.searchProductInput.fill(productName);
    await this.searchButton.click();
  }

  async verifySearchedProductsDisplayed(): Promise<void> {
    Logger.info('Verifying searched products are displayed');

    await AssertionUtil.verifyBodyTextVisible(this.page, /Searched Products/i);
  }

  async openFirstProductDetail(): Promise<void> {
    Logger.info('Opening first product detail page');

    await this.firstProductViewProductLink.click();
    await WaitUtil.waitForPageLoad(this.page);
  }

  async verifyProductDetailPageDisplayed(): Promise<void> {
    Logger.info('Verifying product detail page is displayed');

    await AssertionUtil.verifyBodyTextVisible(this.page, /Availability|Condition|Brand/i);
  }

  async addFirstProductToCart(): Promise<void> {
    Logger.info('Adding first product to cart');

    await this.firstProductAddToCartButton.scrollIntoViewIfNeeded();

    await AssertionUtil.verifyElementVisible(this.firstProductAddToCartButton);

    await this.firstProductAddToCartButton.click();

    await AssertionUtil.verifyElementContainsText(this.modalContent, /Added!/i);
    await AssertionUtil.verifyElementVisible(this.viewCartLink);
  }

  async verifyProductAddedToCart(): Promise<void> {
    Logger.info('Verifying product added to cart modal');

    await AssertionUtil.verifyElementContainsText(this.modalContent, /Added!/i);
    await AssertionUtil.verifyElementVisible(this.viewCartLink);
  }

  async openCartPage(): Promise<void> {
    Logger.info('Opening cart page');

    if (await this.viewCartLink.isVisible().catch(() => false)) {
      await this.viewCartLink.click();
    } else {
      await this.cartLink.click();
    }

    await WaitUtil.waitForPageLoad(this.page);
    await AssertionUtil.verifyPageUrlContains(this.page, /view_cart/i);
  }

  async verifyCartPageDisplayed(): Promise<void> {
    Logger.info('Verifying cart page is displayed');

    await AssertionUtil.verifyPageUrlContains(this.page, /view_cart/i);

    const deleteButtonCount = await this.removeProductButton.count();
    Logger.info(`Delete button count: ${deleteButtonCount}`);
  }

  async removeProductFromCart(): Promise<void> {
    Logger.info('Removing product from cart');

    await WaitUtil.waitForPageLoad(this.page);

    const productRows = await this.cartProductRows.count();
    const removeButtonCount = await this.removeProductButton.count();

    Logger.info(`Product rows in cart: ${productRows}`);
    Logger.info(`Remove button count: ${removeButtonCount}`);
    Logger.info(`Current URL: ${this.page.url()}`);

    if (productRows === 0 || removeButtonCount === 0) {
      Logger.error('No product found in cart. Remove button is not available.');

      throw new Error(
        'No product found in cart. Product was not added correctly before remove action.'
      );
    }

    await this.removeProductButton.click();
    await WaitUtil.waitForPageLoad(this.page);
  }

  async verifyCartIsEmpty(): Promise<void> {
    Logger.info('Verifying cart is empty');

    await AssertionUtil.verifyBodyTextVisible(this.page, /Cart is empty/i);
  }

  async openSignupLoginPage(): Promise<void> {
    Logger.info('Opening Signup Login page');

    await this.signupLoginLink.click();
    await WaitUtil.waitForPageLoad(this.page);
  }

  async verifySignupLoginPageDisplayed(): Promise<void> {
    Logger.info('Verifying Signup Login page is displayed');

    await AssertionUtil.verifyBodyTextVisible(
      this.page,
      /New User Signup!|Login to your account/i
    );
  }

  async openTestCasesPage(): Promise<void> {
    Logger.info('Opening Test Cases page');

    await this.testCasesLink.click();
    await WaitUtil.waitForPageLoad(this.page);
  }

  async verifyTestCasesPageDisplayed(): Promise<void> {
    Logger.info('Verifying Test Cases page is displayed');

    await AssertionUtil.verifyBodyTextVisible(this.page, /Test Cases/i);
  }

  async verifySubscriptionSectionVisible(): Promise<void> {
    Logger.info('Verifying subscription section is visible');

    await this.subscriptionSection.scrollIntoViewIfNeeded();
    await AssertionUtil.verifyBodyTextVisible(this.page, /Subscription/i);
  }
}