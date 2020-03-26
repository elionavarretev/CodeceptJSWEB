const mModule = require('./ByCategoriaModule');
const LoginModule = require('../../../../modules/LoginModule');
const LogoutModule = require('../../../../modules/LogoutModule');
const ConstUtil = require('../../../../utils/ConstUtil');

Given('I logged in with params {string}, {string} and {string}', (country, user, password) => {
	LoginModule.definedSteps(country, user, password);
	LoginModule.clickButton();
	LoginModule.loginSystem();
	mModule.saveScreenshotWithMocha(__filename,ConstUtil.LOGIN_CORRECTO);
});

Given('Me encuentro en la sección del menú lateral Categorías', () => {
	mModule.verificarSeccionMenuLateral();
	mModule.saveScreenshotWithMocha(__filename,ConstUtil.MENU_LATERAL_CATEGORIAS);
});

When('Hago click en la sección Categorías', () => {
	mModule.clickEnCategoria();
	mModule.saveScreenshotWithMocha(__filename,ConstUtil.HAGO_CLICK_SECCION_CATEGORIAS);
});

When('Hago click en la sección Fragancias', () => {
	mModule.verificarLinkDeFragancias();
	mModule.clickEnSeccionFragancias();
	mModule.saveScreenshotWithMocha(__filename,ConstUtil.HAGO_CLICK_SECCION_FRAGANCIAS);
});

Then('Se visualizan los filtros de Fragancias', () => {
	mModule.verificarFiltrosDeFragancias();
	mModule.saveScreenshotWithMocha(__filename,ConstUtil.VERIFICAR_LINK_FRAGANCIAS);
});

Then('Y los productos están filtrados en el landing', () => {
	mModule.verificarProductosFiltradosEnElLanding();
	mModule.saveScreenshotWithMocha(__filename,ConstUtil.PRODUCTOS_FILTRADOS_EN_EL_LANDING);
});

Then('I logout on system bycategoria.feature', () => {
	LogoutModule.abrirMenuLateral();
	LogoutModule.doLogout();
	LogoutModule.verifyLogout();
	mModule.saveScreenshotWithMocha(__filename,ConstUtil.LOGOUT_MESSAGE);
});