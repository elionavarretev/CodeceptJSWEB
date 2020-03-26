const BaseLocator = require('../base/BaseLocator')

class MenuLocator extends BaseLocator.BaseLocator {
	constructor(){
        super();
		this.iconCart = `//cx-storefront/header/cx-page-layout[1]/cx-page-slot[3]/app-belcorp-mini-cart/a`;
		this.inputSearch = `//cx-page-layout[1]/cx-page-slot[2]/belcorp-search-box/label/input`;
		this.hamburgerMenu = `//cx-hamburger-menu/button`;
		this.selectorCantidadByCuv = `//cx-page-slot[2]/belcorp-search-box/div/ul/li/div/app-belcorp-add-to-cart/div/div[1]/cx-item-counter/div/div/button[2]`;
		this.btnAgregarByCuv = `//cx-page-slot[2]/belcorp-search-box/div/ul/li/div/app-belcorp-add-to-cart/div/div[2]/button`;
		this.iconCloseSearch = `//cx-page-layout[1]/cx-page-slot[2]/belcorp-search-box/label/cx-icon[1]`;
	}
}

module.exports = new MenuLocator();
module.exports.MenuLocator = MenuLocator;
