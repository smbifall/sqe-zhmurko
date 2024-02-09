const route = new (require('../support/route'))();
const header = new (require('../support/page_objects/components/e_shop/header.component'))();
const topMenu = new (require('../support/page_objects/components/e_shop/top-menu.component'))();
const loginPage = new (require('../support/page_objects/pages/e_shop/login.page'))();
const registrationPage = new (require('../support/page_objects/pages/e_shop/registration.page'))();
const desktopsPage = new (require('../support/page_objects/pages/e_shop/desktops.page'))();
const jewelryPage = new (require('../support/page_objects/pages/e_shop/jewelry.page'))();
const cartPage = new (require('../support/page_objects/pages/e_shop/cart.page'))();
const wishlistPage = new (require('../support/page_objects/pages/e_shop/wishlist.page'))();

describe('Task #2', () => {

  let sortingProducts;
  
  before(() => {
    cy.fixture('sortingProducts.json').then(data => {
      sortingProducts = data;
    });
  });

  beforeEach(() => {
    route.openHomePage();
  });

  after(() => {
    // Clear user's cart
    header.openCartPage();
    cartPage.clearCart();
    cy.wait('@clearCart')
      .its('response.statusCode')
      .should('eq', 200);
    // Clear user's wishlist
    header.openWishlistPage();
    wishlistPage.clearWishlist();
    cy.wait('@clearWishlist')
      .its('response.statusCode')
      .should('eq', 200);
  });

  it('Register a user', () => {
    header.openRegistrationPage();
    registrationPage.registerUser();
    cy.wait('@registration')
      .its('response.statusCode')
      .should('eq', 302);
    registrationPage.registerResult.should('be.visible');
  });

  it('Login a user', () => {
    header.openLoginPage();
    loginPage.loginUser().then(userEmail => {
      cy.wait('@login')
        .its('response.statusCode')
        .should('eq', 302);
      header.accountInfo.should('have.text', userEmail);
    });
  });

  it('Verify that `Computers` group has 3 sub-groups with correct names', () => {
    const expectedSubCategoryNames = topMenu.getComputersCategoryNames();

    topMenu.hoverOverComputersCategory();
    topMenu.getComputersCategorySelectors().forEach((el, index) => {
      cy.get(el)
        .should('contain.text', expectedSubCategoryNames[index]);
    });
  });

  it('Sort items in ascending order', () => {
    route.openDesktopsPage();
    desktopsPage.selectSortingOption('Name: A to Z');
    desktopsPage.productName
      .invoke('text')
      .then(actualText => {
        const trimmedActualText = actualText.replace(/\s+/g, ' ').trim();
        const trimmedExpectedText = sortingProducts.ascendingOrder.join(' ');
        expect(trimmedActualText).to.equal(trimmedExpectedText);
      });
  });

  it('Sort items in descending order', () => {
    route.openDesktopsPage();
    desktopsPage.selectSortingOption('Price: High to Low');
    desktopsPage.productPrice.should('have.text', sortingProducts.descendingOrder.join(''));
  });

  it('Change number of items on a page', () => {
    route.openDesktopsPage();
    desktopsPage.selectItemsPerPage(`${sortingProducts.itemsCount}`);
    desktopsPage.product.should('have.length', sortingProducts.itemsCount);
  });

  it('Add an item to the wishlist', () => {
    route.openLoginPage();
    loginPage.loginUser();
    route.openJewelryPage();
    jewelryPage.addItemToWishlist();
    cy.wait('@addToWishlist')
      .its('response.statusCode')
      .should('eq', 200);
    jewelryPage.barNotification.should('have.text', 'The product has been added to your wishlist');
    jewelryPage.wishlistQuantity.should('have.text', '(1)');
  });

  it('Add an item to the cart', () => {
    route.openJewelryPage();
    jewelryPage.addItemToCart();
    cy.wait('@addToCart')
      .its('response.statusCode')
      .should('eq', 200);
    jewelryPage.barNotification.should('have.text', 'The product has been added to your shopping cart');
    jewelryPage.cartQuantity.should('have.text', '(1)');
  });

  it('Remove an item from the cart', () => {
    route.openJewelryPage();
    jewelryPage.addItemToCart();
    route.openCartPage();
    cartPage.clearCart();
    cy.wait('@clearCart')
      .its('response.statusCode')
      .should('eq', 200);
    cartPage.summaryContent.should('contain.text', 'Your Shopping Cart is empty!');
    cartPage.jewelryItem.should('not.exist');
  });

  it('Checkout an item', () => {
    route.openLoginPage();
    loginPage.loginUser();
    route.openJewelryPage();
    jewelryPage.addItemToCart();
    route.openCartPage();
    cartPage.checkout();
    cy.url('should.eq', route.checkoutPage);
  });

});