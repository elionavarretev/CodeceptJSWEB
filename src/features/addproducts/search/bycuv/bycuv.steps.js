const mModule = require('./ByCuvModule');
const LoginModule = require('../../../../modules/LoginModule');
const LogoutModule = require('../../../../modules/LogoutModule');
const ConstUtil = require('../../../../utils/ConstUtil');

Given('Me encuentro en el buscador del home {string}, {string} and {string} bycuv.feature', (country, user, password) => {
	LoginModule.definedSteps(country, user, password);
	LoginModule.clickButton();
	LoginModule.loginSystem();
	mModule.saveScreenshotWithMocha(__filename,ConstUtil.LOGIN_CORRECTO);
});

Given('Digito un producto por CUV {string}', (cuv) => {
	mModule.buscarProducto(cuv);
	mModule.saveScreenshotWithMocha(__filename,ConstUtil.DIGITO_UN_PRODUCTO_POR_CUV);
});

When('Aumento la {int} Hago click en el boton Agregar', (cantidad) => {
	mModule.agregarAlCarrito(cantidad);
	mModule.saveScreenshotWithMocha(__filename,ConstUtil.CLICK_AGREGAR);
});

Then('Se muestra el modal snack bar "Producto añadido correctamente"', () => {
	mModule.seMuestraElmodalDeconfirmacion()
	mModule.saveScreenshotWithMocha(__filename,ConstUtil.SE_MUESTRA_MODAL_PRODUCTO_ANADIDO_CORRECTAMENTE);
});

Then('El producto está agregado en el carrito', () => {
	mModule.estaAgregadoAlCarrito();
	mModule.saveScreenshotWithMocha(__filename,ConstUtil.PRODUCTO_AGREGADO_CARRITO);
});

Then('Se visualiza la cantidad que se adicionó', () => {
	mModule.seVisualizaLaCantidadQueSeAdiciono();
	mModule.saveScreenshotWithMocha(__filename,ConstUtil.SE_VISUALIZA_LA_CANTIDAD_ADICIONO);
});

Then('I logout on system bycuv.feature', () => {
	LogoutModule.abrirMenuLateral();
	LogoutModule.doLogout();
	LogoutModule.verifyLogout();
	mModule.saveScreenshotWithMocha(__filename,ConstUtil.LOGOUT_MESSAGE);
});