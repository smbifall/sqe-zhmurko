const JewelryPage = require("../../pages/e_shop/jewelryPage");

const jewelryPage = new JewelryPage();

class User {
  addItemToWishlist() {
    jewelryPage.open();
    jewelryPage.jewelryItem.click();
    jewelryPage.addToWishlistBttn.click();
  }
  addItemToCart() {
    jewelryPage.open();
    jewelryPage.jewelryItem.click();
    jewelryPage.addToCartBttn.click();
  }
}

module.exports = User;