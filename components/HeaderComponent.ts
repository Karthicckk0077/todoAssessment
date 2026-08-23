import { expect, Locator, Page } from '@playwright/test';

export class HeaderComponent {
  readonly page: Page;
  readonly headerLogo: Locator;
  readonly navigation: Locator;
  readonly searchButton: Locator;

  constructor(page: Page) {
    this.page = page;

    this.headerLogo = page.locator(
      'a[href="/"], a[href*="bekaert"], img[alt*="Bekaert"], img[src*="bekaert"], [class*="logo"]'
    ).first();

    this.navigation = page.locator(
      'nav, [class*="nav"], [class*="menu"], [id*="nav"], [id*="menu"]'
    ).first();

    this.searchButton = page.locator(
      'button[aria-label*="Search"], a[aria-label*="Search"], button:has-text("Search"), a:has-text("Search"), [class*="search"]'
    ).first();
  }

  async verifyHeaderVisible(): Promise<void> {
    await expect(this.headerLogo).toBeVisible({ timeout: 15000 });
  }

  async verifyNavigationVisible(): Promise<void> {
    await expect(this.navigation).toBeVisible({ timeout: 15000 });
  }

  async verifySearchButtonVisible(): Promise<void> {
    await expect(this.searchButton).toBeVisible({ timeout: 15000 });
  }

  async clickSearchButton(): Promise<void> {
    await this.searchButton.click();
  }
}