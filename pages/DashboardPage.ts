import { Page, Locator, expect } from '@playwright/test';

export class DashboardPage {
  
  readonly page: Page;
  readonly indicatorIFP: Locator;
  readonly indicatorGDP: Locator;
  readonly pieChart: Locator;
  readonly showAsTableButton: Locator;
  readonly gdpColumnHeader: Locator;
  readonly gdpFirstCell: Locator;

  constructor(page: Page) 
  {
    this.page = page;
    this.indicatorIFP = page.locator("(//*[name()='svg'][@aria-label='Income for person 3M.'])[1]");
    this.indicatorGDP = page.locator("(//*[name()='svg'][@aria-label='GDP 2M.'])[1]");
    this.pieChart = page.locator("(//*[name()='rect'][@class='clearCatcher'])[1]");
    this.showAsTableButton = page.locator("(//span[normalize-space()='Show as a table'])[1]");
    this.gdpColumnHeader = page.locator('[data-testid="gdp-header"]');
    this.gdpFirstCell = page.locator('[data-testid="gdp-cell"]').first();
  }

  async gotoDashboard(url: string)
  {
    await this.page.goto(url);
    await this.page.waitForTimeout(3000);
  }

  async selectCountryBahrain()
  {
    await this.page.locator ("//div[contains(text(),'Bahrain')]").click(); // click on Country Bahrain
    expect(this.page.locator("(//*[name()='svg'][@aria-label='Income for person 41K.'])[1]")).toBeVisible; //indicatorIFPbahrain
    expect(this.page.locator("(//*[name()='svg'][@aria-label='GDP 21K.'])[1]")).toBeVisible; //indicatorGDPbahrain
  }

  async selectCountryAngola()
  {
    await this.page.locator ("//div[contains(text(),'Angola')]").click(); // click on Country Angola
    expect(this.page.locator("(//*[name()='svg'][@aria-label='Income for person 5900.'])[1]")).toBeVisible; //indicatorIFPangola
    expect(this.page.locator("(//*[name()='tspan'][normalize-space()='3,530'])[1]")).toBeVisible; //indicatorGDP
  }

  async AngolaTableData()
  {
    expect(this.page.locator("//div[normalize-space()='22.40']")).toBeVisible;
    expect(this.page.locator("//div[normalize-space()='3,530']")).toBeVisible; 
    expect(this.page.locator("//div[normalize-space()='42.90']")).toBeVisible; 
  }

  async excludeAngola()
  {
    await this.page.locator("//div[normalize-space()='Angola']").click({ button: 'right' });
    expect(this.page.locator("(//button[@id='3'])[1]")).toContainText("Show as a table");
    expect(this.page.locator("(//span[normalize-space()='Exclude'])[1]")).toBeVisible; 
    this.page.locator("(//span[normalize-space()='Exclude'])[1]").click; 
    expect (this.page.locator("//div[normalize-space()='Angola']")).toBeEmpty();

  }

  async showPieChartasTable()
  {
    await this.pieChart.click({ button: 'right' });
    await this.showAsTableButton.click();
    expect(this.page.locator("(//span[@class='menuItem'])[1]")).toContainText("Back to report"); //unique locator for table view of piechart
    expect(this.page.locator("(//div[@class='title trimmedTextWithEllipsis'])[1]")).toContainText("Top-5 Inflation"); // just for double check, that we are on table view page
  }
}
