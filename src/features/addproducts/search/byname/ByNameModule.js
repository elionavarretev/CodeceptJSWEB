const BaseModule = require('../../../../base/BaseModule');
const locator = require('./ByNameLocator');

class ByNameModule extends BaseModule.BaseModule {
	constructor(){
		super();
	}

	buscarProducto(nombreProducto){
		this.I.waitForElement(locator.inputSearch);
		this.I.fillField(locator.inputSearch,nombreProducto);
	}
	
	seVisualizanLosProductos(){
		this.I.waitForElement(locator.productsLi);
	}

	seVisualizanEtiquetasRespectivas(posicion){
		this.waitForElements([locator.txtAplicaDescuento(posicion),locator.txtTitulo(posicion)]);
	}
	
	seVisualizanAplicaDescuentoVerDetalle(posicion){
		this.waitForElements([locator.txtAplicaDescuento(posicion),locator.btnVerDetalle(posicion)]);
	}

	clickVerDetalle(posicion){
		this.I.click(locator.btnVerDetalle(posicion));
	}

	seVisualizaElBotonAgregarYSelectorCantidad(){
		this.waitForElements(
			[locator.btnAgregar,
				locator.selectorCantidadByCuv,
				locator.rdbCatalogo,
				locator.rdbRevista
			]);
		this.I.click(locator.rdbCatalogo);
	}

	clickAgregar(){
		this.I.click(locator.btnAgregar);
	}
}

module.exports = new ByNameModule();
module.exports.ByNameModule = ByNameModule;
