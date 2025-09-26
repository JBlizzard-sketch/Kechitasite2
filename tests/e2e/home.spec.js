import { test, expect } from '@playwright/test';

test('homepage has hero and CTA', async ({ page }) => {
  await page.goto('/');
  await expect(page.locator('text=Apply Now')).toBeVisible();
  await expect(page.locator('h1')).toContainText('Fast micro-loans');
});
