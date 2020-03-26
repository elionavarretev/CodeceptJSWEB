const BaseModule = require('../base/BaseModule')
const locator = require('../locators/MenuLocator')

class AddCartModule extends BaseModule.BaseModule {
    constructor(){
        super();
    }
	buscarProducto(cuv){
		this.I.waitForElement(locator.inputSearch);
		this.I.fillField(locator.inputSearch,cuv);
	}

	agregarAlCarrito(cantidad = 0){
		this.waitForElements([locator.btnAgregarByCuv,locator.selectorCantidadByCuv,locator.iconCloseSearch]);
		for(var i=0;i<cantidad;i++){
			this.I.click(locator.selectorCantidadByCuv);
		}
		this.I.click(locator.btnAgregarByCuv);
		this.I.click(locator.iconCloseSearch);
	}

}

module.exports = new AddCartModule();
module.exports.AddCartModule = AddCartModule;