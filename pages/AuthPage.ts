import { Page, expect } from '@playwright/test';

export class AuthPage {
  constructor(private page: Page) {}

  readonly genderMale = this.page.locator("//input[@id='gender-male']");
  readonly firstName = this.page.locator("//input[@id='FirstName']");
  readonly lastName = this.page.locator("//input[@id='LastName']");
  readonly emailInput = this.page.locator("//input[@id='Email']");
  readonly passwordInput = this.page.locator("//input[@id='Password']");
  readonly confirmPasswordInput = this.page.locator("//input[@id='ConfirmPassword']");
  readonly registerButton = this.page.locator("//input[@id='register-button']");
  readonly registrationSuccess = this.page.locator("(//div[@class='result'])[1]"); // to contain text: "Your registration completed"
  readonly loginButton = this.page.locator('input[value="Log in"]');
  readonly accountLink = this.page.locator("div[class='header-links'] a[class='account']");
  readonly loginError = this.page.locator("//div[@class='validation-summary-errors']");

  async gotoRegister() {
    await this.page.goto('https://demowebshop.tricentis.com/register');
  }

  async gotoLogin() {
    await this.page.goto('https://demowebshop.tricentis.com/login');
  }

  async register(email: string, password: string) {
    await this.genderMale.check();
    await this.firstName.fill('John');
    await this.lastName.fill('Doe');
    await this.emailInput.fill(email);
    await this.passwordInput.fill(password);
    await this.confirmPasswordInput.fill(password);
    await this.registerButton.click();
    await expect(this.registrationSuccess).toContainText('Your registration completed');
  }

  async login(email: string, password: string) {
    await this.emailInput.fill(email);
    await this.passwordInput.fill(password);
    await this.loginButton.click();
  }

  async expectLoginSuccess(email: string) {
    await expect(this.accountLink).toHaveText(email);
  }

  async expectLoginFailure() {
    await expect(this.loginError).toContainText("Login was unsuccessful. Please correct the errors and try again.");
  }
}

