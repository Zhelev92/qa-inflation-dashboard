// === pages/CheckoutPage.ts ===
import { Page, expect } from '@playwright/test';

export class CheckoutPage {
  constructor(private page: Page) {}

  // Locators
  readonly termsCheckbox = this.page.locator("//input[@id='termsofservice']");
  readonly checkoutBtn = this.page.locator('button[name="checkout"]');
  readonly guestCheckoutBtn = this.page.locator('input.button-1.checkout-as-guest-button');

  readonly billingFirstName = this.page.locator('#BillingNewAddress_FirstName');
  readonly billingLastName = this.page.locator('#BillingNewAddress_LastName');
  readonly billingEmail = this.page.locator('#BillingNewAddress_Email');
  readonly billingCountry = this.page.locator('#BillingNewAddress_CountryId');
  readonly billingCity = this.page.locator('#BillingNewAddress_City');
  readonly billingAddress = this.page.locator('#BillingNewAddress_Address1');
  readonly billingZip = this.page.locator('#BillingNewAddress_ZipPostalCode');
  readonly billingPhone = this.page.locator('#BillingNewAddress_PhoneNumber');
  
  readonly masterContinueBtn = this.page.getByRole('button', { name: 'Continue' });
  readonly confirmOrderBtn = this.page.locator("//input[@value='Confirm']");
  readonly orderSuccessTitle = this.page.locator("//strong[normalize-space()='Your order has been successfully processed!']");
  readonly orderDetailsBtn = this.page.getByRole('listitem').filter({ hasText: 'Click here for order details.' }); //second verification for order success
  

  // Method: Full Guest Checkout Flow
  async checkoutAsGuest(email: string) {
    await this.termsCheckbox.check();
    await this.checkoutBtn.click();
    await this.guestCheckoutBtn.click();

    await this.billingFirstName.fill('Jane');
    await this.billingLastName.fill('Smith');
    await this.billingEmail.fill(email);
    await this.billingCountry.selectOption('1'); // USA
    await this.billingCity.fill('New York');
    await this.billingAddress.fill('123 Main St');
    await this.billingZip.fill('10001');
    await this.billingPhone.fill('1234567890');

    await this.masterContinueBtn.click();

    await this.masterContinueBtn.click();
    await this.masterContinueBtn.click();
    await this.masterContinueBtn.click();
    await this.masterContinueBtn.click();
    await this.confirmOrderBtn.click();

    await expect(this.orderSuccessTitle).toBeVisible();
    await expect(this.orderDetailsBtn).toBeVisible();
  }
}

