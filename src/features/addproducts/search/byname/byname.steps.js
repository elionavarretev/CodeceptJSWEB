const mModule = require('./ByNameModule');
const LoginModule = require('../../../../modules/LoginModule');
const LogoutModule = require('../../../../modules/LogoutModule');
const ConstUtil = require('../../../../utils/ConstUtil');

Given('Me encuentro en el buscador del home {string}, {string} and {string} byname.feature', (country, user, password) => {
	LoginModule.definedSteps(country, user, password);
	LoginModule.clickButton();
	LoginModule.loginSystem();
	mModule.saveScreenshotWithMocha(__filename,ConstUtil.LOGIN_CORRECTO);
});

Given('Digito un producto que se encuentra en ambos medios Ej. {string}', (producto) => {
	mModule.buscarProducto(producto);
	mModule.saveScreenshotWithMocha(__filename,ConstUtil.DIGITO_UN_PRODUCTO_SE_ENCUENTRA_EN_AMBOS_MEDIOS);
});

When('Termino de digitar la palabra buscada', () => {
	mModule.saveScreenshotWithMocha(__filename,ConstUtil.TERMINO_DE_DIGITAR_PALABRA_BUSCADA);
});

Then('Se visualizan los productos coincidentes de ambos medios', () => {
	mModule.seVisualizanLosProductos()
	mModule.saveScreenshotWithMocha(__filename,ConstUtil.SE_VISUALIZAN_PRODUCTOS_COINCIDENTES_AMBOS_MEDIOS);
});

Then('Se muestran las etiquetas respectivas {int}', (posicion) => {
	mModule.seVisualizanEtiquetasRespectivas(posicion);
	mModule.saveScreenshotWithMocha(__filename,ConstUtil.SE_MUESTRAN_ETIQUETAS_RESPECTIVAS);
});

Then('Se prioriza producto de catálogo con el tag "Aplica descuento" con el botón "Ver detalle" {int}', (posicion) => {
	mModule.seVisualizanAplicaDescuentoVerDetalle(posicion);
	mModule.clickVerDetalle(posicion);
	mModule.saveScreenshotWithMocha(__filename,ConstUtil.SE_PRIORIZA_PRODUCTO_CON_TAG_APLICA_DESCUENTO_CON_BOTON_VER_DETALLE);
});

Then('Se visualiza producto de revista con el selector de cantidad y botón "Agregar"', () => {
	mModule.seVisualizaElBotonAgregarYSelectorCantidad();
	mModule.clickAgregar();
	mModule.saveScreenshotWithMocha(__filename,ConstUtil.SE_VIZUALIZA_PRODUCTO_REVISTA_CON_SELECTOR_CANTIDAD_BOTON_AGREGAR);
});

Then('I logout on system byname.feature', () => {
	LogoutModule.abrirMenuLateral();
	LogoutModule.doLogout();
	LogoutModule.verifyLogout();
	mModule.saveScreenshotWithMocha(__filename,ConstUtil.LOGOUT_MESSAGE);
});