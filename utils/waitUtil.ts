import { Locator, Page } from '@playwright/test';

export class WaitUtil {
  static async waitForPageLoad(page: Page): Promise<void> {
    await page.waitForLoadState('domcontentloaded');
  }

  static async waitForNetworkIdle(page: Page): Promise<void> {
    await page.waitForLoadState('networkidle');
  }

  static async waitForElementVisible(locator: Locator): Promise<void> {
    await locator.waitFor({
      state: 'visible',
      timeout: 15000
    });
  }
}