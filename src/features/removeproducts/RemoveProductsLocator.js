const CartLocator = require('../../locators/CartLocator')

class RemoveProductsLocator extends CartLocator.CartLocator {
	constructor(){
		super();
		this.productCuv = (cuv) => `//app-belcorp-cart-item-list/div//div[${this.xPathByText(' '+cuv+' ')}]`;
		this.tachito = (cuv) => this.xPath(this.productCuv(cuv)).upTo(`div`,4).goTo(`/div/div[4]`).build();
		this.btnEliminarSi = `//app-belcorp-cart-remove-item-dialog/div/button[2]`;
		this.btnEliminarNo = `//app-belcorp-cart-remove-item-dialog/div/button[3]`;
		this.dialogRemoveItemCart = `//ngb-modal-window/div/div/app-belcorp-cart-remove-item-dialog`;
	}
}

module.exports = new RemoveProductsLocator();
module.exports.RemoveProductsLocator = RemoveProductsLocator;