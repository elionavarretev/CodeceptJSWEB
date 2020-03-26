const SearchLocator = require('../SearchLocator')

class ByNameLocator extends SearchLocator.SearchLocator {
	constructor(){
		super();
		this.productsLi = `//cx-page-layout[1]/cx-page-slot[2]/belcorp-search-box/div/ul/li`;
		this.txtTitulo = (index) => `//cx-page-layout[1]/cx-page-slot[2]/belcorp-search-box/div/ul/li[${index}]/div/a/h4`;
		this.txtAplicaDescuento = (index) => `//cx-page-slot[2]/belcorp-search-box/div/ul/li[${index}]/div/a/div/span[2]/span[2]`;
		this.btnVerDetalle = (index) => `//cx-page-layout[1]/cx-page-slot[2]/belcorp-search-box/div/ul/li[${index}]/div/button`;
		this.rdbCatalogo = `//*[@id="toYourClientCheckbox"]`;
		this.rdbRevista = `//*[@id="toYouClientCheckbox"]`;
		this.selectorCantidadByCuv = `//app-belcorp-product-summary/div/div/div[2]/div/app-belcorp-add-to-cart/div/div[1]/cx-item-counter/div/div/button[2]`;
		this.btnAgregar = `//app-belcorp-product-summary/div/div/div[2]/div/app-belcorp-add-to-cart/div/div[2]/button`;
	}
}

module.exports = new ByNameLocator();
module.exports.ByNameLocator = ByNameLocator;