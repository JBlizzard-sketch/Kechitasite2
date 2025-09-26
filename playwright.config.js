import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: 'tests/e2e',
  use: {
    headless: true,
    viewport: { width: 1280, height: 720 },
    ignoreHTTPSErrors: true,
  },
  webServer: {
    command: 'npm run build && npx http-server out -p 8080',
    port: 8080,
    timeout: 120000,
    reuseExistingServer: !process.env.CI,
  },
});
