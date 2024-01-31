const Route = require('../support/route');
const TopMenu = require('../support/page_objects/components/e_shop/top-menu.component');
const Header = require('../support/page_objects/components/e_shop/header.component');
const LoginPage = require('../support/page_objects/pages/e_shop/login.page');
const RegistrationPage = require('../support/page_objects/pages/e_shop/registration.page');
const DesktopsPage = require('../support/page_objects/pages/e_shop/desktops.page');
const JewelryPage = require('../support/page_objects/pages/e_shop/jewelry.page');
const CartPage = require('../support/page_objects/pages/e_shop/cart.page');

const route = new Route();
const header = new Header();
const topMenu = new TopMenu();
const loginPage = new LoginPage();
const registrationPage = new RegistrationPage();
const desktopsPage = new DesktopsPage();
const jewelryPage = new JewelryPage();
const cartPage = new CartPage();

describe('Task #2', () => {

  const regData = registrationPage.generateRegistrationData();

  beforeEach(() => {
    route.openHomePage();
  });

  it('Register a user', () => {
    header.openRegistrationPage();
    cy.url().should('eq', route.registrationPage);
    registrationPage.registerUser(regData);
    cy.url().should('eq', route.successRegistration);
    registrationPage.registerResult.should('contain.text', 'Your registration completed');
  });

  it('Login a user', () => {
    header.openLoginPage();
    cy.url().should('eq', route.loginPage);
    loginPage.loginUser(regData);
    header.accountInfo.should('have.text', regData.email);
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
    const expectedAscOrder = [
      'Build your own cheap computer', 
      'Build your own computer', 
      'Build your own expensive computer', 
      'Desktop PC with CDRW', 
      'Elite Desktop PC', 
      'Simple Computer',
    ];

    route.openDesktopsPage();
    desktopsPage.selectSortingOption('Name: A to Z');
    desktopsPage.productName
      .invoke('text')
      .then(actualText => {
        const trimmedActualText = actualText.replace(/\s+/g, ' ').trim();
        const trimmedExpectedText = expectedAscOrder.join(' ');
        expect(trimmedActualText).to.equal(trimmedExpectedText);
      });
  });

  it('Sort items in descending order', () => {
    const expectedDescOrder = [
      '1800.00', 
      '1350.00', 
      '1200.00', 
      '800.00', 
      '800.00', 
      '500.00',
    ];

    route.openDesktopsPage();
    desktopsPage.selectSortingOption('Price: High to Low');
    desktopsPage.productPrice.should('have.text', expectedDescOrder.join(''));
  });

  it('Change number of items on a page', () => {
    const expectedItemCount = 4;

    route.openDesktopsPage();
    desktopsPage.selectItemsPerPage(`${expectedItemCount}`);
    desktopsPage.product.should('have.length', expectedItemCount);
  });

  it('Add an item to the wishlist', () => {
    route.openLoginPage();
    loginPage.loginUser(regData);
    route.openJewelryPage();
    cy.intercept('POST', 'https://demowebshop.tricentis.com/addproducttocart/details/**')
      .as('addToWishlist');
    jewelryPage.addItemToWishlist();
    cy.wait('@addToWishlist')
      .its('response.statusCode')
      .should('eq', 200);
    jewelryPage.barNotification.should('have.text', 'The product has been added to your wishlist');
    jewelryPage.wishlistQuantity.should('have.text', '(1)');
  });

  it('add an item to the cart', () => {
    route.openJewelryPage();
    cy.intercept('POST', 'https://demowebshop.tricentis.com/addproducttocart/details/**')
      .as('addToCart');
    jewelryPage.addItemToCart();
    cy.wait('@addToCart')
      .its('response.statusCode')
      .should('eq', 200);
    jewelryPage.barNotification.should('have.text', 'The product has been added to your shopping cart');
    jewelryPage.cartQuantity.should('have.text', '(1)');
  });

  it('remove an item from the cart', () => {
    route.openJewelryPage();
    jewelryPage.addItemToCart();
    route.openCartPage();
    cy.intercept('POST', 'https://demowebshop.tricentis.com/cart')
      .as('removeCartItem');
    cartPage.cleanCart();
    cy.wait('@removeCartItem')
      .its('response.statusCode')
      .should('eq', 200);
    cartPage.summaryContent.should('contain.text', 'Your Shopping Cart is empty!');
    cartPage.jewelryItem.should('not.exist');
  });

  it('checkout an item', () => {
    route.openLoginPage();
    loginPage.loginUser(regData);
    route.openJewelryPage();
    jewelryPage.addItemToCart();
    route.openCartPage();
    cartPage.checkout();
    cy.url('should.eq', route.checkoutPage);
  });

});