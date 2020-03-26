const mModule = require('./SendOrdersModule');
const LoginModule = require('../../modules/LoginModule');
const LogoutModule = require('../../modules/LogoutModule');
const ConstUtil = require('../../utils/ConstUtil');

Given('Dado que me encuentro en el pedido {string}, {string} and {string} {string} sendorders.feature', (country, user, password, cuv) => {
	LoginModule.definedSteps(country, user, password);
	LoginModule.clickButton();
	LoginModule.loginSystem();
	mModule.preCondition(cuv);
	mModule.saveScreenshotWithMocha(__filename,ConstUtil.LOGIN_CORRECTO);
});

Given('Visualizo en el carrito una cantidad existente de productos', () => {
	mModule.clickIconCart();
	mModule.saveScreenshotWithMocha(__filename,ConstUtil.VISUALIZO_CANTIDAD_EXISTENTE_PRODUCTOS);
});

When('Hago click en el botón "Enviar pedido"', () => {
	mModule.clickEnviarPedido();
	mModule.saveScreenshotWithMocha(__filename,ConstUtil.HAGO_CLICK_ENVIAR_PEDIDO);
});

Then('Se despliega el modal informativo "Estás a punto de enviar tu pedido" con la información relacionada al pedido', async () => {
	await mModule.visualizarModalPreview();
	mModule.saveScreenshotWithMocha(__filename,ConstUtil.SE_DESPLIEGA_MODAL_ENVIAR_PEDIDO);
});

Then('El pedido es confirmado', () => {
	mModule.confirmarPedido();
	mModule.saveScreenshotWithMocha(__filename,ConstUtil.PEDIDO_CONFIRMADO);
});

Then('El pedido se ha enviado', () => {
	mModule.pedidoEnviado();
	mModule.saveScreenshotWithMocha(__filename,ConstUtil.PEDIDO_ENVIADO);
});

Then('I logout on system sendorders.feature', () => {
	LogoutModule.abrirMenuLateral();
	LogoutModule.doLogout();
	LogoutModule.verifyLogout();
	mModule.saveScreenshotWithMocha(__filename,ConstUtil.LOGOUT_MESSAGE);
});