import { Page, Locator } from '@playwright/test';

export class DashboardPage {
  readonly page: Page;
  readonly indicators: Locator;
  readonly countrySelector: (countryName: string) => Locator;
  readonly selectedCountryIndicator: Locator;
  readonly pieChart: Locator;
  readonly pieSegments: Locator;
  readonly netIncomeIndicator: Locator;
  readonly tableNetIncome: Locator;
  readonly gdpColumnHeader: Locator;
  readonly gdpFirstCell: Locator;

  constructor(page: Page) 
  {
    this.page = page;
    this.indicators = page.locator('[data-testid="main-indicators"]');
    this.countrySelector = (countryName: string) => page.locator(`text=${countryName}`);
    this.selectedCountryIndicator = page.locator('[data-testid="selected-country-indicator"]');
    this.pieChart = page.locator('[data-testid="inflation-pie-chart"]');
    this.pieSegments = this.pieChart.locator('[role="img"]');
    this.netIncomeIndicator = page.locator('[data-testid="net-income-indicator"]');
    this.tableNetIncome = page.locator('[data-testid="table-net-income"]');
    this.gdpColumnHeader = page.locator('[data-testid="gdp-header"]');
    this.gdpFirstCell = page.locator('[data-testid="gdp-cell"]').first();
  }

  async gotoDashboard(url: string)
  {
    await this.page.goto(url);
    await this.page.waitForTimeout(5000);
  }

  async selectCountry(country: string) 
  {
    await this.countrySelector(country).click();
    await this.page.waitForTimeout(3000);
  }
}
