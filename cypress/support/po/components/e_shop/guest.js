const JewelryPage = require("../../pages/e_shop/jewelryPage");

const jewelryPage = new JewelryPage();

class Guest {
  addItemToCart() {
    jewelryPage.open();
    jewelryPage.jewelryItem.click();
    jewelryPage.addToCartBttn.click();
  }
}

module.exports = Guest;