export const EnvConfig = {
  environment: process.env.ENV || 'local',

  baseUrl: process.env.BASE_URL || 'https://todomvc.com/examples/angular/dist/browser/#/all',

  headless: process.env.HEADLESS === 'true',

  workers: process.env.WORKERS ? Number(process.env.WORKERS) : 1
};