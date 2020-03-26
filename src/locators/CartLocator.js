const MenuLocator = require('./MenuLocator')

class CartLocator extends MenuLocator.MenuLocator{
    constructor(){
        super();
        this.cantidadProductos = `//cx-page-slot[3]/app-belcorp-cart-totals-component/div[1]/h4/span`;
        this.montoTotal = `//cx-page-slot[3]/app-belcorp-cart-totals-component/div[1]/div/app-belcorp-order-summary/div/div[1]/div[2]`;
        this.btnEnviarPedido = `//cx-page-slot[3]/app-belcorp-cart-totals-component/div[1]/div/button`;
        this.items = `//div[${this.xPathByClassName('cx-item-list-items')}]`;
        this.wrapperItems = `//app-belcorp-cart-component/div/app-belcorp-cart-item-list/div`;
        this.emptyCart = `//cx-page-layout/cx-page-slot[3]/cx-paragraph/p/h2`;
    }
}

module.exports = new CartLocator();
module.exports.CartLocator = CartLocator;