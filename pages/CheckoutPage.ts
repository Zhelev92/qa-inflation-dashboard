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
  readonly billingAddressContinue = this.page.locator("//input[@onclick='Billing.save()']");

  readonly shippingAddressContinue = this.page.locator("//input[@onclick='Shipping.save()']");
  readonly shippingMethodContinue = this.page.locator("(//input[@class='button-1 shipping-method-next-step-button'])[1]");
  readonly paymentMethodContinue = this.page.locator("//input[@class='button-1 payment-method-next-step-button']");
  readonly paymentInformationContinue = this.page.locator("(//input[@class='button-1 payment-info-next-step-button'])[1]");
  readonly confirmOrderBtn = this.page.locator("//input[@value='Confirm']");
  readonly orderSuccessTitle = this.page.locator('.title');

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
    await this.billingAddressContinue.click();

    await this.shippingAddressContinue.click();
    await this.shippingMethodContinue.click();
    await this.paymentInformationContinue.click();
    await this.confirmOrderBtn.click();

    await expect(this.orderSuccessTitle).toContainText('Your order has been successfully processed!');
  }
}
