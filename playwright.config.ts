import { defineConfig, devices } from '@playwright/test';
import { defineBddConfig } from 'playwright-bdd';
import { EnvConfig } from './config/env.config';
// we are importing the config from the env config file //

const testDir = defineBddConfig({
  features: 'features/**/*.feature',
  steps: 'steps/**/*.ts',
  outputDir: '.features-gen',
  importTestFrom: './fixtures/test.fixture.ts',
});

export default defineConfig({
  testDir,

  timeout: 60000,

  expect: {
    timeout: 10000
  },

  fullyParallel: false,

  retries: process.env.CI ? 2 : 0,

  // workers: process.env.CI ? 2 : undefined,

  workers: EnvConfig.workers,
  

  reporter: [
    ['html'],
    ['list']
  ],

  use: {
     baseURL: EnvConfig.baseUrl,
    headless: EnvConfig.headless,
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
    trace: 'retain-on-failure',
    actionTimeout: 15000,
    navigationTimeout: 30000
  },

  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] }
    }
  ]
});
