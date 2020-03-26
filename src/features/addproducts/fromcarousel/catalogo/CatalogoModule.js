const BaseModule = require('../../../../base/BaseModule');
const locator = require('./CatalogoLocator');
const ConstUtil = require('../../../../utils/ConstUtil');

class CatalogoModule extends BaseModule.BaseModule {

	constructor(){
		super();
	}

	addButtonFromCatalogo() {
		this.I.click(locator.btnAddCartCatalogo(8));
	}
  
	iSeeProductConfirmation() {
		this.I.see(ConstUtil.PRODUCTO_ANADIDO_CORRECTAMENTE);
	}
  
}

module.exports = new CatalogoModule();
module.exports.CatalogoModule = CatalogoModule;
