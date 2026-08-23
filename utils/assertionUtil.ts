import { expect, Locator, Page } from '@playwright/test';

export class AssertionUtil {
  static async verifyPageTitleContains(page: Page, expectedTitle: string): Promise<void> {
    const actualTitle = await page.title();
    expect(actualTitle.toLowerCase()).toContain(expectedTitle.toLowerCase());
  }

  static async verifyPageUrlContains(page: Page, expectedUrlPattern: RegExp): Promise<void> {
    await expect(page).toHaveURL(expectedUrlPattern);
  }

  static async verifyElementVisible(locator: Locator): Promise<void> {
    await expect(locator).toBeVisible({
      timeout: 15000
    });
  }

  static async verifyElementContainsText(locator: Locator, expectedText: RegExp): Promise<void> {
    await expect(locator).toContainText(expectedText, {
      timeout: 15000
    });
  }

  static async verifyBodyTextVisible(page: Page, expectedText: RegExp): Promise<void> {
    await expect(page.locator('body')).toContainText(expectedText, {
      timeout: 15000
    });
  }
}