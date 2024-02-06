import { Page } from '@playwright/test';

export async function createTable(page: Page) {
  await page.locator('.tide-menu-bar__btn .icon-table-bold').click();
  await page
    .locator('.tide-editor-table-grid > div:nth-child(4) > div:nth-child(4)')
    .click();
}
