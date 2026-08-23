import { Page } from '@playwright/test';
import fs from 'fs';

export class ScreenshotUtil {

  // Existing method - keep unchanged
  static async captureFullPageScreenshot(
    page: Page,
    fileName: string
  ): Promise<void> {
    await page.screenshot({
      path: `reports/${fileName}.png`,
      fullPage: true
    });
  }

  // AI-specific method
  static async captureFailureContext(
    page: Page,
    scenarioName: string,
    errorMessage: string
  ): Promise<void> {

    try {

      const timestamp = new Date()
        .toISOString()
        .replace(/[:.]/g, '-');

      await page.screenshot({
        path: `reports/ai-${scenarioName}-${timestamp}.png`,
        fullPage: true
      });

      const failureContent = `
# Failure Context

Scenario:
${scenarioName}

Error:
${errorMessage}

URL:
${page.url()}

Title:
${await page.title()}

Timestamp:
${timestamp}
`;

      fs.mkdirSync('ai/runtime', {
        recursive: true
      });

      fs.writeFileSync(
        'ai/runtime/latest-failure.md',
        failureContent
      );

    } catch (error) {

      console.error(
        '[AI FAILURE CAPTURE ERROR]',
        error
      );

      // Never fail test execution because AI capture failed
    }
  }
}