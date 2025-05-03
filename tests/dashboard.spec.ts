import { test, expect, } from '@playwright/test';
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
    await expect(dashboardPage.indicatorIFP).toBeVisible();
    await expect(dashboardPage.indicatorGDP).toBeVisible();
  });

  test('TC02 - Verify selecting a country updates the data', async () => 
  {
    dashboardPage.selectCountryBahrain;
    dashboardPage.selectCountryAngola;
  });

  test('TC03 - Verify the pie chart table view', async () => 
  {
    dashboardPage.selectCountryAngola;
    dashboardPage.showPieChartasTable;
  });

  test('TC04 - Verify table data matches top indicators after country selection', async () => 
  {
    dashboardPage.selectCountryAngola;
    dashboardPage.AngolaTableData;
  });

  test('TC05 - Verify excluding option in data table', async () => 
  {
    dashboardPage.selectCountryAngola;
    dashboardPage.excludeAngola;
  });
});
