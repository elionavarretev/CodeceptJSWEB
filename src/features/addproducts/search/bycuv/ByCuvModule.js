const BaseModule = require('../../../../base/BaseModule');
const AddCartModule = require('../../../../modules/AddCartModule');
const ConstUtil = require('../../../../utils/ConstUtil');
const locator = require('./ByCuvLocator');

class ByCuvModule extends BaseModule.BaseModule {
	constructor(){
		super();
	}

	buscarProducto(cuv){
		AddCartModule.buscarProducto(cuv);
	}

	agregarAlCarrito(cantidad = 0){
		AddCartModule.agregarAlCarrito(cantidad);
	}

	seMuestraElmodalDeconfirmacion(){
		this.I.waitForElement(locator.modalAddCartConfirmation);
		this.I.see(ConstUtil.PRODUCTO_ANADIDO_CORRECTAMENTE);
	}

	estaAgregadoAlCarrito(){
		this.I.click(locator.iconCart);
		this.waitForElements([locator.textCuv,locator.textTitulo,locator.textNombreProducto]);
	}

	seVisualizaLaCantidadQueSeAdiciono(){
		this.I.waitForElement(locator.cantidadSeleccionada);
	}
}

module.exports = new ByCuvModule();
module.exports.ByCuvModule = ByCuvModule;
