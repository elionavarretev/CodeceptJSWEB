const CartLocator = require('../../locators/CartLocator')

class SendOrdersLocator extends CartLocator.CartLocator {
	constructor(){
		super();
		this.btnEnviarPedidoFinal = `//app-belcorp-cart-totals-send-order-dialog/div/button[2]`;
		this.modalEnviarPedidoTitle = `//app-belcorp-cart-totals-send-order-dialog/div/div[1]`;
		this.montoTotalModalEnviarPedido = `//app-belcorp-cart-totals-send-order-dialog/div/ul/li[4]/span[2]`;
		this.divPedidoExitoso = `//app-belcorp-cart-order-sent/div/div[1]`;
		this.btnCloseModalExitoso = `//app-belcorp-cart-order-sent/div/button[1]`;
	}
}

module.exports = new SendOrdersLocator();
module.exports.SendOrdersLocator = SendOrdersLocator;