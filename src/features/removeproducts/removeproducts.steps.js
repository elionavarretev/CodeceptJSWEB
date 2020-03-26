const mModule = require('./RemoveProductsModule');
const LoginModule = require('../../modules/LoginModule');
const LogoutModule = require('../../modules/LogoutModule');
const ConstUtil = require('../../utils/ConstUtil');

Given('Dado que me encuentro en el pedido {string}, {string} and {string} {string} removeproducts.feature', (country, user, password, cuv) => {
	LoginModule.definedSteps(country, user, password);
	LoginModule.clickButton();
	LoginModule.loginSystem();
	mModule.preCondition(cuv);
	mModule.saveScreenshotWithMocha(__filename,ConstUtil.LOGIN_CORRECTO);
});

Given('Visualizo una cantidad existente de productos', () => {
	mModule.clickIconCart();
	mModule.saveScreenshotWithMocha(__filename,ConstUtil.VISUALIZO_CANTIDAD_EXISTENTE_PRODUCTOS);
});

When('Elijo eliminar un producto {string} pulsando el tachito', (cuv) => {
	mModule.verificarCantidadProductosInicial(cuv);
	mModule.eliminarProductoPulsandoElTachito(cuv);
	mModule.saveScreenshotWithMocha(__filename,ConstUtil.ELIJO_ELIMINAR_PRODUCTO_PULSANDO_TACHITO.format(cuv));
});

Then('Se despliega el modal de "¿Estás seguro de eliminar este producto?" con dos opciones "Sí, eliminar" y "Cancelar"', () => {
	mModule.verificarModal();
	mModule.verificarOpciones();
	mModule.saveScreenshotWithMocha(__filename,ConstUtil.SE_DESPLIEGA_MODAL_CON_DOS_OPCIONES_SI_CANCELAR);
});

Then('Cuando hago click en el botón "Sí, eliminar"', () => {
	mModule.clickBotonSi();
	mModule.saveScreenshotWithMocha(__filename,ConstUtil.CUANDO_HAGO_CLICK_BOTON_SI_ELIMINAR);
});

Then('Se elimina de la lista el producto elegido {string}', (cuv) => {
	mModule.verificarProductoNoSeaEncontrado(cuv);
	mModule.saveScreenshotWithMocha(__filename,ConstUtil.SE_ELIMINA_LISTA_PRODUCTO_ELEGIDO.format(cuv));
});

Then('La cantidad de productos en el carrito es actualizada', () => {
	mModule.verificarCantidadProductosActual();
	mModule.saveScreenshotWithMocha(__filename,ConstUtil.LA_CANTIDAD_PRODUCTOS_CARRITO_ACTUALIZADA);
});

Then('I logout on system removeproducts.feature', () => {
	LogoutModule.abrirMenuLateral();
	LogoutModule.doLogout();
	LogoutModule.verifyLogout();
	mModule.saveScreenshotWithMocha(__filename,ConstUtil.LOGOUT_MESSAGE);
});