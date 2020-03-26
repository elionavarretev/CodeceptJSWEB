const SearchLocator = require('../SearchLocator');

class ByCuvLocator extends SearchLocator.SearchLocator {
	constructor(){
		super();
		this.txtTitulo = `//cx-page-slot[2]/belcorp-search-box/div/ul/li/div/a/h4`;
		this.txtAplicaDescuento = `//cx-page-slot[2]/belcorp-search-box/div/ul/li/div/a/div/span[2]/span[2]`;
		this.textCuv = `//app-belcorp-cart-component/div/app-belcorp-cart-item-list/div/div/div/app-belcorp-cart-entry/div/div[2]/div[1]/div[3]`;
		this.textTitulo = this.xPath(this.textCuv).upTo(`div[1]`).build();
		this.textNombreProducto = this.xPath(this.textCuv).upTo(`div[2]`).build();
		this.cantidadSeleccionada = `//app-belcorp-cart-component/div/app-belcorp-cart-item-list/div/div/div/app-belcorp-cart-entry/div/div[2]/div[3]/div/cx-item-counter/div/div/input`;
	}
}

module.exports = new ByCuvLocator();
module.exports.ByCuvLocator = ByCuvLocator;