import { test, expect } from '@playwright/test';
import { DashboardPage } from '../pages/DashboardPage';

const dashboardUrl = 'https://app.fabric.microsoft.com/view?r=eyJrIjoiYWMwNmI1ZmMtZGYwYS00ODljLWE4NzgtNzM1OGRkYWQzMWMxIiwidCI6IjZiZTgxZjIwLWFlY2MtNGQyZC1hMTM0LWJmZWJlOTAxODE4NCIsImMiOjl9';

test.describe('Inflation Dashboard Tests (POM)', () => {
  let dashboardPage: DashboardPage;

  test.beforeEach(async ({ page }) => 
  {
    dashboardPage = new DashboardPage(page);
    await dashboardPage.gotoDashboard(dashboardUrl);
  });

  test('TC01 - Verify main indicators are displayed', async () => 
  {
    await expect(dashboardPage.indicators).toBeVisible();
    await expect(dashboardPage.indicators).toContainText(['Net income', 'GDP']);
  });

  test('TC02 - Verify selecting a country updates the data', async () => 
  {
    await dashboardPage.selectCountry('United States');
    await expect(dashboardPage.selectedCountryIndicator).toContainText('United States');
  });

  test('TC03 - Verify pie chart displays top 8 countries by inflation', async () => 
  {
    await expect(dashboardPage.pieChart).toBeVisible();
    await expect(await dashboardPage.pieSegments.count()).toBe(8);
  });

  test('TC04 - Verify table data matches top indicators after country selection', async () => 
  {
    await dashboardPage.selectCountry('United States');
    const topNetIncome = await dashboardPage.netIncomeIndicator.innerText();
    const tableNetIncome = await dashboardPage.tableNetIncome.innerText();
    expect(topNetIncome.trim()).toEqual(tableNetIncome.trim());
  });

  test('TC05 - Verify data table supports sorting by column', async () => 
  {
    await dashboardPage.gdpColumnHeader.click(); // Sort ascending
    await dashboardPage.page.waitForTimeout(2000);
    const firstAsc = await dashboardPage.gdpFirstCell.innerText();

    await dashboardPage.gdpColumnHeader.click(); // Sort descending
    await dashboardPage.page.waitForTimeout(2000);
    const firstDesc = await dashboardPage.gdpFirstCell.innerText();

    expect(firstAsc).not.toEqual(firstDesc);
  });
});
