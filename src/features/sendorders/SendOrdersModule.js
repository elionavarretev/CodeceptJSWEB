const BaseModule = require('../../base/BaseModule');
const AddCartModule = require('../../modules/AddCartModule');
const locator = require('./SendOrdersLocator');

class SendOrdersModule extends BaseModule.BaseModule {
	constructor(){
		super();
		this.preCondition = (cuv) => {
			AddCartModule.buscarProducto(cuv);
			AddCartModule.agregarAlCarrito();
		}
	}

	clickIconCart(){
		this.I.waitForElement(locator.iconCart);
		this.I.click(locator.iconCart);
	}

	clickEnviarPedido(){
		this.I.waitForElement(locator.wrapperItems);

		this.I.click(locator.btnEnviarPedido);
	}

	async visualizarModalPreview(){
		this.I.waitForElement(locator.modalEnviarPedidoTitle);

		let montoTotalCart = (await this.I.grabTextFrom(locator.montoTotal)).obtenerPrecio();
		let montoTotalModal = (await this.I.grabTextFrom(locator.montoTotalModalEnviarPedido)).obtenerPrecio();

		this.I.assertEqual(montoTotalCart,montoTotalModal);
	}

	confirmarPedido(){
		this.I.waitForElement(locator.btnEnviarPedidoFinal);
		this.I.click(locator.btnEnviarPedidoFinal);
	}

	pedidoEnviado(){
		this.waitForElements([locator.divPedidoExitoso,locator.btnCloseModalExitoso]);
		this.I.click(locator.btnCloseModalExitoso);
		this.I.waitForElement(locator.emptyCart);
	}

}

module.exports = new SendOrdersModule();
module.exports.SendOrdersModule = SendOrdersModule;