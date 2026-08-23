export const EnvConfig = {
  environment: process.env.ENV || 'local',

  baseUrl: process.env.BASE_URL || 'https://automationexercise.com/',

  headless: process.env.HEADLESS === 'true',

  workers: process.env.WORKERS ? Number(process.env.WORKERS) : 1
};