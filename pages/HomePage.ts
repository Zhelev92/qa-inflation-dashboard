import { Page, expect } from '@playwright/test';

export class HomePage {
  constructor(private page: Page) {}

  readonly registerLink = this.page.locator("//a[normalize-space()='Register']");
  readonly loginLink = this.page.locator("//a[normalize-space()='Log in']");
  readonly searchInput = this.page.locator("//input[@id='small-searchterms']");
  readonly searchButton = this.page.locator("//input[@value='Search']");
  readonly productItemBook = this.page.locator("//a[normalize-space()='Health Book']");
  readonly newsletterInput = this.page.locator('#newsletter-email');
  readonly newsletterSubscribe = this.page.locator('input[value="Subscribe"]');
  readonly newsletterSuccess = this.page.locator('.newsletter-result-block');

  async goto() {
    await this.page.goto('https://demowebshop.tricentis.com/');
  }

  async search(term: string) {
    await this.searchInput.fill(term);
    await this.searchButton.click();
  }

  async subscribeToNewsletter(email: string) {
    await this.newsletterInput.fill(email);
    await this.newsletterSubscribe.click();
    await expect(this.newsletterSuccess).toContainText('Thank you for signing up!');
  }
}

