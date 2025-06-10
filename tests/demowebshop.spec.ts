// === tests/demowebshop.spec.ts ===
import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/HomePage';
import { AuthPage } from '../pages/AuthPage';
import { CartPage } from '../pages/CartPage';
import { CheckoutPage } from '../pages/CheckoutPage';

const generateEmail = () => `user_${Date.now()}@test.com`;
const password = 'Test1234!';


test.describe('Demo Web Shop Test Suite', () => {
  let email: string;

  test.beforeEach(async ({ page }) => {
    email = generateEmail();
    const home = new HomePage(page);
    await home.goto();
  });

  test('[@sanity][@regression] TC01: Successful User Registration', async ({ page }) => {
    const auth = new AuthPage(page);
    await auth.gotoRegister();
    await auth.register(email, password);
  });

  test('[@sanity][@regression] TC02: Login with Valid Credentials', async ({ page }) => {
    const auth = new AuthPage(page);
    await auth.gotoRegister();
    await auth.register(email, password);
    await auth.gotoLogin();
    await auth.login(email, password);
    await auth.expectLoginSuccess(email);
  });

  test('[@sanity],[@regression] TC03: Login with Invalid Credentials', async ({ page }) => {
    const auth = new AuthPage(page);
    await auth.gotoLogin();
    await auth.login('wrong@example.com', 'wrongpass');3
    await auth.expectLoginFailure();
  });

  test('[@regression] TC04: Search for Product', async ({ page }) => {
    const home = new HomePage(page);
    await home.search('book');
    expect(home.productItemBook).toBeVisible
  });

  test('[@regression] TC05: Add Product to Cart', async ({ page }) => {
    const cart = new CartPage(page);
    await cart.addFirstBookToCart();
  });

  test('[@regression] TC06: Remove Item from Cart', async ({ page }) => {
    const cart = new CartPage(page);
    await cart.addFirstBookToCart();
    await cart.removeAllFromCart();
  });

  test('[@regression] TC07: Add Product to Wishlist', async ({ page }) => {
    const auth = new AuthPage(page);
    const cart = new CartPage(page);
    await auth.gotoRegister();
    await auth.register(email, password);
    await auth.gotoLogin();
    await auth.login(email, password);
    await cart.addFirstBookToWishlist();
  });

  test('[@regression] TC08: Checkout as Guest', async ({ page }) => {
    const cart = new CartPage(page);
    const checkout = new CheckoutPage(page);
    await cart.addFirstBookToCart();
    await cart.navigatetoCart();
    await checkout.checkoutAsGuest(generateEmail());
  });

  test('TC09: Newsletter Subscription', async ({ page }) => {
    const home = new HomePage(page);
    await home.subscribeToNewsletter(generateEmail());
  });
});

