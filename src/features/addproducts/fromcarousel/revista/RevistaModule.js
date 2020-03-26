const BaseModule = require('../../../../base/BaseModule');
const locator = require('./RevistaLocator');
const ConstUtil = require('../../../../utils/ConstUtil');

class RevistaModule extends BaseModule.BaseModule {

	constructor(){
		super();
	}
	
	addButtonFromRevista() {
		this.I.click(locator.btnAddCartRevista(7));
	}
  
	iSeeProductConfirmation() {
		this.I.see(ConstUtil.PRODUCTO_ANADIDO_CORRECTAMENTE);
	}
  
}

module.exports = new RevistaModule();
module.exports.RevistaModule = RevistaModule;
