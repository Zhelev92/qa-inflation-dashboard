import { Page, expect } from '@playwright/test';

export class CartPage {
  constructor(private page: Page) {}

  readonly addToCartBtn = this.page.locator('input[value="Add to cart"]');
  readonly cartSuccess = this.page.locator('.bar-notification.success');
  readonly cartLink = this.page.locator("//span[normalize-space()='Shopping cart']");
  readonly goToCartButton = this.page.locator("//input[@value='Go to cart']");
  readonly removeFromCartCheckbox = this.page.locator('input[name^="removefromcart"]');
  readonly updateCartBtn = this.page.locator('input[name="updatecart"]');
  readonly emptyCartMessage = this.page.locator('.order-summary-content');
  readonly wishlistBtn = this.page.locator('input[value="Add to wishlist"]');
  readonly checkoutButton = this.page.locator("//button[@id='checkout']");

  async gotoBooksPage() {
    await this.page.goto('https://demowebshop.tricentis.com/books');
  }

  async navigatetoCart() {
    await this.cartLink.hover();
    await this.goToCartButton.click();
    await expect(this.checkoutButton).toBeVisible();
  }

  async addFirstBookToCart() {
    await this.gotoBooksPage();
    await this.addToCartBtn.first().click();
    await expect(this.cartSuccess).toContainText('The product has been added to your shopping cart');
  }

  async removeAllFromCart() {
    await this.cartLink.click();
    await this.removeFromCartCheckbox.check();
    await this.updateCartBtn.click();
    await expect(this.emptyCartMessage).toContainText('Your Shopping Cart is empty!');
  }

  async addFirstBookToWishlist() {
    await this.gotoBooksPage();
    await this.wishlistBtn.first().click();
    await expect(this.cartSuccess).toContainText('The product has been added to your wishlist');
  }
}
