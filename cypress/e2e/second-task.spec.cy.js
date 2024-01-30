const HomePage = require('../support/po/pages/e_shop/homePage');
const RegisterPage = require('../support/po/pages/e_shop/registerPage');
const LoginPage = require('../support/po/pages/e_shop/loginPage');
const Path = require('../support/po/pages/e_shop/path');
const DesktopsPage = require('../support/po/pages/e_shop/desktopsPage');
const JewelryPage = require('../support/po/pages/e_shop/jewelryPage');
const WishlistPage = require('../support/po/pages/e_shop/wishlistPage');
const CartPage = require('../support/po/pages/e_shop/cartPage');
const Guest = require('../support/po/components/e_shop/guest');
const User = require('../support/po/components/e_shop/user');
const Header = require('../support/po/components/e_shop/header');

const homePage = new HomePage();
const registerPage = new RegisterPage();
const loginPage = new LoginPage();
const path = new Path();
const desktopsPage = new DesktopsPage();
const jewelryPage = new JewelryPage();
const wishlistPage = new WishlistPage();
const cartPage = new CartPage();
const guest = new Guest();
const user = new User();
const header = new Header();

describe('task 2', () => {

  const regData = registerPage.generateRegData();

  beforeEach(() => { 
    homePage.open(); 
  });

  it('register a user', () => {
    header.openRegistration();
    cy.url().should('eq', path.registerPage);
    registerPage.fillRegForm(regData);

    registerPage.registerBttn.click();
    cy.url().should('eq', path.successRegistration);
    registerPage.registerResult.should('contain.text', 'Your registration completed');
  });

  it('login a user', () => {
    header.openLogin();
    cy.url().should('eq', path.loginPage);

    loginPage.fillLoginForm(regData);

    loginPage.loginBttn.click();
    header.accountInfo.should('have.text', regData.email);
  });

  it('verify that `Computers` group has 3 sub-groups with correct names', () => {
    const expectedSubGroupNames = homePage.categories.getComputersGroupNames();

    homePage.categories.hoverOverComputers();

    homePage.categories.getComputersGroupSelectors().forEach((el, index) => {
      cy.get(el)
        .should('contain.text', expectedSubGroupNames[index]);
    });
  });

  it('sorting items (different options)', () => {
    desktopsPage.open();
    // sort in ascending order
    const expectedAscOrder = [
      'Build your own cheap computer', 
      'Build your own computer', 
      'Build your own expensive computer', 
      'Desktop PC with CDRW', 
      'Elite Desktop PC', 
      'Simple Computer',
    ];
    desktopsPage.selectSortingOption('Name: A to Z');
    desktopsPage.productNames
      .invoke('text')
      .then(actualText => {
        const trimmedActualText = actualText.replace(/\s+/g, ' ').trim();
        const trimmedExpectedText = expectedAscOrder.join(' ');

        expect(trimmedActualText).to.equal(trimmedExpectedText);
      });
    // sort in descending order
    const expectedDescOrder = [
      '1800.00', 
      '1350.00', 
      '1200.00', 
      '800.00', 
      '800.00', 
      '500.00',
    ];

    desktopsPage.selectSortingOption('Price: High to Low');
    desktopsPage.productPrices.should('have.text', expectedDescOrder.join(''));
  });

  it('change number of items on page', () => {
    const expectedItemCount = 4;
    desktopsPage.open();
    desktopsPage.selectItemsPerPage(`${expectedItemCount}`);
    desktopsPage.productItems.should('have.length', expectedItemCount);
  });

  it('add an item to the wishlist', () => {
    header.openLogin();

    loginPage.fillLoginForm(regData);
    loginPage.loginBttn.click();

    user.addItemToWishlist();
    jewelryPage.barNotification.should('have.text', 'The product has been added to your wishlist');
    jewelryPage.wishlistQuantity.should('have.text', '(1)');

    header.openWishlist();
    wishlistPage.wishlistItem.should('contain.text', 'Black & White Diamond Heart');
  });

  it('add an item to the cart', () => {
    guest.addItemToCart();
    jewelryPage.barNotification.should('have.text', 'The product has been added to your shopping cart');
    jewelryPage.cartQuantity.should('have.text', '(1)');

    header.openCart();
    cartPage.jewerlyItem.should('contain.text', 'Black & White Diamond Heart');
  });

  it('remove an item from the cart', () => {
    guest.addItemToCart();
    header.openCart();

    cartPage.cleanCart();
    cartPage.summaryContent.should('contain.text', 'Your Shopping Cart is empty!');
    cartPage.jewerlyItem.should('not.exist');
  });

  it('checkout an item', () => {
    header.openLogin();

    loginPage.fillLoginForm(regData);
    loginPage.loginBttn.click();

    user.addItemToCart();
    header.openCart();
    cartPage.agreeTermsOfService();

    cartPage.checkout();
    cy.url('should.eq', path.CheckoutPage);
  });

});