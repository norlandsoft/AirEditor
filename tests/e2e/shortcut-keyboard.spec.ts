import { test, expect } from '@playwright/test';
import { createTable } from './create-helper';

test.beforeEach(async ({ page }) => {
  await page.goto('http://127.0.0.1:5173/?test=1');
  await createTable(page);
});

test.describe('table 快捷键', () => {
  test('table 全选并删除', async ({ page }) => {
    await page.keyboard.insertText('this is cell');
    await page.getByRole('cell', { name: 'this is cell' }).click();
    await page.keyboard.press('Meta+A');
    await page.keyboard.press('Meta+A');
    await page.keyboard.press('Meta+A');
    await page.keyboard.press('Backspace');

    const table = page.getByRole('table');
    await expect(table).toHaveCount(0);
  });

  test('table 内使用 Tab 创建两级 list', async ({ page }) => {
    await page.keyboard.insertText('-');
    await page.keyboard.press('Space');

    await page.keyboard.insertText('list item1');
    await page.keyboard.press('Enter');
    await page.keyboard.insertText('list item2');
    await page.keyboard.press('Enter');
    await page.keyboard.press('Tab');
    await page.keyboard.insertText('list item2 sub item');

    const item = page
      .getByRole('list')
      .filter({ hasText: /^list item2 sub item$/ });

    await expect(item).toContainText('list item2 sub item');
  });
});
