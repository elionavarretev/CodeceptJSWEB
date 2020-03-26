const MenuLocator = require('../../../locators/MenuLocator');

class FromcarouselLocator extends MenuLocator.MenuLocator {
	constructor(){
		super();
		this.ofertasCatalogos = (index) => `//app-belcorp-carousel-product-catalog-offers[${index}]`;
	}
}

module.exports = new FromcarouselLocator();
module.exports.FromcarouselLocator = FromcarouselLocator;