const BaseModule = require('../../../../base/BaseModule');
const locator = require('./ByCategoriaLocator');

class ByCategoriaModule extends BaseModule.BaseModule {
	constructor(){
		super();
	}

	verificarSeccionMenuLateral(){
		this.I.waitForElement(locator.linkCategoria);
	}
	
	clickEnCategoria(){
		this.I.click(locator.linkCategoria);
	}

	verificarLinkDeFragancias(){
		this.I.waitForElement(locator.linkFragancias);
	}
	
	clickEnSeccionFragancias(){
		this.I.click(locator.linkFragancias);
	}

	verificarFiltrosDeFragancias(){
		this.waitForElements(
			[locator.menuLateralFragancias(1),
				locator.menuLateralFragancias(2),
				locator.menuLateralFragancias(3),
				locator.menuLateralFragancias(4)]
				);
	}

	verificarProductosFiltradosEnElLanding(){
		this.I.waitForElement(locator.categoryLandingProduct);
	}
}

module.exports = new ByCategoriaModule();
module.exports.ByCategoriaModule = ByCategoriaModule;
