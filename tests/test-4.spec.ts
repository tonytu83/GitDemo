import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.automationexercise.com/');
  await page.getByRole('link', { name: ' Products' }).click();
  await page.locator('.overlay-content > .btn').first().click();
  await page.getByRole('button', { name: 'Continue Shopping' }).click();
  await page.locator('div:nth-child(4) > .product-image-wrapper > .single-products > .product-overlay > .overlay-content > .btn').click();
  await page.getByRole('link', { name: 'View Cart' }).click();
  await expect(page.getByRole('row', { name: 'Product Image Blue Top Women' }).getByRole('button')).toBeVisible();
  await page.getByRole('row', { name: 'Product Image Blue Top Women' }).getByRole('button').click();
  await expect(page.locator('#product-1').getByRole('cell', { name: '1' })).toBeVisible();
  await expect(page.getByRole('row', { name: 'Product Image Men Tshirt Men' }).getByRole('button')).toBeVisible();
  await expect(page.locator('#product-2').getByRole('cell', { name: '1' })).toBeVisible();
});