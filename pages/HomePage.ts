import { expect, Locator, Page } from '@playwright/test';
import { BasePage } from './BasePage';

export class HomePage extends BasePage {
  readonly acceptCookiesButton: Locator;
  readonly sustainabilityLink: Locator;

  constructor(page: Page) {
    super(page);

    this.acceptCookiesButton = page.getByRole('button', { name: /accept|allow|agree/i });

    // Sustainability link locator from DOM
    this.sustainabilityLink = page.locator("(//a[contains(text(),'Sustainability')])[1]");
  }

  async navigateToHomePage(): Promise<void> {
    await this.page.goto('/');
    await this.acceptCookiesIfVisible();
  }

  async verifyTitleContains(expectedTitle: string): Promise<void> {
    await expect(this.page).toHaveTitle(
      new RegExp(expectedTitle, 'i')
    );
  }

  async acceptCookiesIfVisible(): Promise<void> {
    try {
      if (await this.acceptCookiesButton.isVisible({ timeout: 5000 })) {
        await this.acceptCookiesButton.click();
      }
    } catch {
      // Cookie banner not displayed, continue test
    }
  }

  async clickSustainability(): Promise<void> {
    await this.sustainabilityLink.click();
  }

  async verifySustainabilityPage(): Promise<void> {
    await expect(this.page).toHaveURL(/sustainability/i);
  }
}