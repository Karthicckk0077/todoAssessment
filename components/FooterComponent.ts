import { expect, Locator, Page } from '@playwright/test';

export class FooterComponent {
  readonly page: Page;
  readonly footer: Locator;

  constructor(page: Page) {
    this.page = page;

    this.footer = page.locator('footer, [class*="footer"], [id*="footer"]').first();
  }

  async verifyFooterVisible(): Promise<void> {
    await this.footer.scrollIntoViewIfNeeded();
    await expect(this.footer).toBeVisible({ timeout: 15000 });
  }
}