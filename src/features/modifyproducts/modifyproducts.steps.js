const mModule = require('./ModifyProductsModule');
const LoginModule = require('../../modules/LoginModule');
const LogoutModule = require('../../modules/LogoutModule');
const ConstUtil = require('../../utils/ConstUtil');

Given('Dado que me encuentro en el pedido {string}, {string} and {string} {string} modifyproducts.feature', (country, user, password,cuv) => {
	LoginModule.definedSteps(country, user, password);
	LoginModule.clickButton();
	LoginModule.loginSystem();
	mModule.preCondition(cuv);
	mModule.saveScreenshotWithMocha(__filename,ConstUtil.LOGIN_CORRECTO);
});

Given('Visualizo una cantidad existente de productos', () => {
	mModule.visualizoCantidadExistenteProductos();
	mModule.saveScreenshotWithMocha(__filename,ConstUtil.VISUALIZO_CANTIDAD_EXISTENTE_PRODUCTOS);
});

When('Digito una cantidad de dos dígitos en el selector de cantidad Ej. {int} {string}',async (cantidad, cuv) => {
	await mModule.digitoCantidadSelectorCantidad(cantidad, cuv);
	mModule.saveScreenshotWithMocha(__filename,ConstUtil.DIGITO_UNA_CANTIDAD_DIGITOS_EN_SELECTOR_CANTIDAD.format(2,cantidad));
});

Then('Se actualiza el precio final del producto {string}', async (cuv) => {
	await mModule.seActualizaPrecioFinalProducto(cuv);
	mModule.saveScreenshotWithMocha(__filename,ConstUtil.SE_DESPLIEGA_MODAL_CON_DOS_OPCIONES_SI_CANCELAR);
});

Then('Se actualiza la cantidad de productos en el resumen del pedido', () => {
	mModule.seActualizaCantidadProductosResumenPedido();
	mModule.saveScreenshotWithMocha(__filename,ConstUtil.SE_ACTUALIZA_CANTIDAD_PRODUCTOS_RESUMEN_PEDIDO);
});

Then('Se actualiza el Monto Total del pedido',async () => {
	await mModule.seActualizaMontoTotalPedido();
	mModule.saveScreenshotWithMocha(__filename,ConstUtil.SE_ACTUALIZA_MONTO_TOTAL_PEDIDO);
});

Then('Se actualiza la Ganancia del pedido', () => {
	mModule.seActualizaGananciaPedido();
	mModule.saveScreenshotWithMocha(__filename,ConstUtil.SE_ACTUALIZA_GANANCIA_PEDIDO);
});

Then('I logout on system removeproducts.feature', () => {
	LogoutModule.abrirMenuLateral();
	LogoutModule.doLogout();
	LogoutModule.verifyLogout();
	mModule.saveScreenshotWithMocha(__filename,ConstUtil.LOGOUT_MESSAGE);
});