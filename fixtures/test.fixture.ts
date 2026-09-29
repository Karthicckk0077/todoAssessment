import { test as base } from 'playwright-bdd';
import { HomePage } from '../pages/HomePage';
import { HeaderComponent } from '../components/HeaderComponent';
import { FooterComponent } from '../components/FooterComponent';
import { BigBasketHomePage } from '../pages/BigBasketHomePage';
import { AutomationExerciseHomePage } from '../pages/AutomationExerciseHomePage';
import { TodoPage } from '../pages/todoPage';
import { AiFailureAnalyzer } from '../utils/aiFailureAnalyzer';
import { ScreenshotUtil } from '../utils/screenshotUtil';

type PageObjects = {
  homePage: HomePage;
  headerComponent: HeaderComponent;
  footerComponent: FooterComponent;
  bigBasketHomePage: BigBasketHomePage;
  automationExerciseHomePage: AutomationExerciseHomePage;
  todoPage : TodoPage;
};

export const test = base.extend<PageObjects>({

  page: async ({ page }, use, testInfo) => {

    await use(page);

    // Execute only when test fails
    if (testInfo.status !== testInfo.expectedStatus) {

      await ScreenshotUtil.captureFailureContext(
        page,
        testInfo.title,
        testInfo.error?.message || 'Unknown Error'
      );

      await AiFailureAnalyzer.generateFailureReport(
        testInfo.title,
        testInfo.error?.message || 'Unknown Error',
        testInfo.error?.stack
      );
    }
  },

  homePage: async ({ page }, use) => {
    const homePage = new HomePage(page);
    await use(homePage);
  },

  headerComponent: async ({ page }, use) => {
    const headerComponent = new HeaderComponent(page);
    await use(headerComponent);
  },

  footerComponent: async ({ page }, use) => {
    const footerComponent = new FooterComponent(page);
    await use(footerComponent);
  },

  bigBasketHomePage: async ({ page }, use) => {
    const bigBasketHomePage = new BigBasketHomePage(page);
    await use(bigBasketHomePage);
  },

  automationExerciseHomePage: async ({ page }, use) => {
    const automationExerciseHomePage =
      new AutomationExerciseHomePage(page);

    await use(automationExerciseHomePage);
  },

  todoPage: async ({ page }, use) => {
    const todoPage =
      new TodoPage(page);

    await use(todoPage);
  }
});

export { expect } from '@playwright/test';