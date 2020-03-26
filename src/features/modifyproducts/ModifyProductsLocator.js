const CartLocator = require('../../locators/CartLocator')

class ModifyProductsLocator extends CartLocator.CartLocator {
	constructor(){
		super();
		this.productCuv = (cuv) => `//app-belcorp-cart-item-list/div//div[${this.xPathByText(' '+cuv+' ')}]`;
		this.inputAmmountProducts = (cuv) => this.xPath(this.productCuv(cuv))
									.upTo(`div`,4)
									.goTo(`/div/div[3]`)
									.goTo(`//cx-item-counter/div/div/input`).build();

		this.textPrecio = (cuv) => this.xPath(this.productCuv(cuv))
									.upTo(`div`,4)
									.goTo(`/div/div[2]`)
									.goTo(`/div[1]/div/div[2]`).build();

		this.textPrecioFinal = (cuv) => this.xPath(this.productCuv(cuv))
									.upTo(`div`,4)
									.goTo(`/div/div[2]`)
									.goTo(`/div[2]/div[1]/div[2]`).build();			
	}
}

module.exports = new ModifyProductsLocator();
module.exports.ModifyProductsLocator = ModifyProductsLocator;