const BaseModule = require('../../base/BaseModule');
const AddCartModule = require('../../modules/AddCartModule');
const ConstUtil = require('../../utils/ConstUtil');
const locator = require('./ModifyProductsLocator');

class ModifyProductsModule extends BaseModule.BaseModule {
	constructor(){
		super();
		this.preCondition = (cuv) => {
			AddCartModule.buscarProducto(cuv);
			AddCartModule.agregarAlCarrito();
		}
		this.precioFinalInicial = null;
		this.cantidadProductosInicial = null;
		this.cantidadProductosCUVInicial = null;
		this.cantidadProductosCUVActual = null;
		this.montoTotalInicial = null;
		this.precioFinalActual = null;
		this.precioCuv = null;
	}

	visualizoCantidadExistenteProductos(){
		this.I.waitForElement(locator.iconCart);
		this.I.click(locator.iconCart);
	}

	obtenerCantidadProductos(strCantidadProductos){
		let split = strCantidadProductos.trim().split(' ');
		return parseInt(split[0].replace('(',ConstUtil.EMPTY));
	}

	async digitoCantidadSelectorCantidad(cantidad,cuv){
		this.waitForElements([locator.textPrecioFinal(cuv),locator.textPrecio(cuv),locator.cantidadProductos,locator.inputAmmountProducts(cuv)]);

		this.cantidadProductosCUVActual = cantidad;
		this.cantidadProductosCUVInicial = parseInt(await this.I.grabValueFrom(locator.inputAmmountProducts(cuv)));
		this.precioFinalInicial = (await this.I.grabTextFrom(locator.textPrecioFinal(cuv))).obtenerPrecio();
		this.precioCuv = (await this.I.grabTextFrom(locator.textPrecio(cuv))).obtenerPrecio();
		this.cantidadProductosInicial = this.obtenerCantidadProductos(await this.I.grabTextFrom(locator.cantidadProductos));
		this.montoTotalInicial = (await this.I.grabTextFrom(locator.montoTotal)).obtenerPrecio();

		this.I.fillField(locator.inputAmmountProducts(cuv),cantidad);
	}

	async seActualizaPrecioFinalProducto(cuv){
		this.I.waitForElement(locator.textPrecioFinal(cuv));
		
		this.precioFinalActual = (await this.I.grabTextFrom(locator.textPrecioFinal(cuv))).obtenerPrecio();

		console.log('this.precioCuv',this.precioCuv);
		console.log('this.precioFinalInicial',this.precioFinalInicial);
		console.log('this.precioFinalActual',this.precioFinalActual);
		console.log('this.cantidadProductosCUVActual',this.cantidadProductosCUVActual);
		
		this.I.assertEqual(this.precioFinalActual,this.precioCuv*this.cantidadProductosCUVActual);
	}

	async seActualizaCantidadProductosResumenPedido(){
		let cantidadProductosActual = this.obtenerCantidadProductos(await this.I.grabTextFrom(locator.cantidadProductos));
		let diffCantidadProductos = this.cantidadProductosCUVInicial-this.cantidadProductosCUVActual;
		//TODO
		//this.I.assertEqual(cantidadProductosActual,this.cantidadProductosInicial-diffCantidadProductos);
	}

	async seActualizaMontoTotalPedido(){
		let montoTotalFinal = (await this.I.grabTextFrom(locator.montoTotal)).obtenerPrecio();
		let diffCantidadProductos = this.cantidadProductosCUVActual-this.cantidadProductosCUVInicial;
		let toCompare = parseFloat(parseFloat(this.montoTotalInicial)+parseFloat(diffCantidadProductos*this.precioCuv)).toFixed(ConstUtil.FIXED_PRICE);

		console.log("diffCantidadProductos",diffCantidadProductos);
		console.log("this.montoTotalInicial",this.montoTotalInicial);
		console.log("this.precioCuv",this.precioCuv);
		console.log("toCompare",toCompare);
		console.log("montoTotalFinal",montoTotalFinal);
		console.log("this.precioFinalActual",this.precioFinalActual);
		console.log("this.cantidadProductosCUVInicial",this.cantidadProductosCUVInicial);

		this.I.assertEqual(montoTotalFinal,toCompare);
	}
	
	seActualizaGananciaPedido(){

	}
}

module.exports = new ModifyProductsModule();
module.exports.ModifyProductsModule = ModifyProductsModule;