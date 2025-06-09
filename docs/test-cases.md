Test Scenario for https://demowebshop.tricentis.com/


Test Case 1: User Successful Registration
ID: TC01

Preconditions: User is on the homepage

Steps:

1. Click "Register" in the header
2. Fill all fields
3. Click "Register" button

Expected Result: Registration is successful and confirmation message appears.


Test Case 2: Login with Valid Credentials
ID: TC02

Preconditions: A registered user exists

Steps:

1. Click "Log in" in the header
2. Enter valid Email and Password
3. Click "Log in" button

Expected Result: User is logged in and redirected to homepage with user name displayed.


Test Case 3: Login with Invalid Credentials
ID: TC03

Preconditions: User is on login page

Steps:

1. Enter invalid email/password
2. Click "Log in"

Expected Result: Error message “Login was unsuccessful” is displayed.


Test Case 4: Search for Product
ID: TC04


Preconditions: User is on homepage

Steps:

1. Enter “book” in the search field
2. Click search icon

Expected Result: List of matching products is shown.



Test Case 5: Add Product to Cart
ID: TC05

Preconditions: User is on product listing page (Feature Products)

Steps:

1.Click “Add to cart” on a random product

Expected Result: Success message is displayed and cart count updates.



Test Case 6: Remove Item from Cart
ID: TC06

Preconditions: At least one product is in the cart

Steps:

1. Click on “Shopping cart”
2. Check “Remove” checkbox
3. Click “Update shopping cart”

Expected Result: Product is removed and cart is empty.



Test Case 7: Add Product to Wishlist (here we can make it with a bug - some items dont't have the option)
ID: TC07

Preconditions: User is logged in

Steps:

1. Navigate to a product
2. Click “Add to wishlist”

Expected Result: Success message appears, and product is in wishlist.



Test Case 8: Checkout as Guest
ID: TC08

Preconditions: Product is in cart; User is not logged in

Steps:

1. Go to cart
2. Click “Checkout”
3. Select “Checkout as Guest”
4. Fill in billing/shipping/payment info
5. Confirm order

Expected Result: Order is successfully placed and confirmation appears.



Test Case 9: Newsletter Subscription
ID: TC09

Preconditions: User is on homepage

Steps:

1. Enter email into newsletter field
2. Click “Subscribe”

Expected Result: Success message confirming subscription appears.



Test Case 10: Sorting Products
ID: TC10

Title: Sort items by price (low to high)

Preconditions: User is on product category page

Steps:
1. Navigate to Apparel section
2. Select 12 items on page
3. Select “Price: Low to High” from sort dropdown

Expected Result: Products appear sorted by price ascending.

