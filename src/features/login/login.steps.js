const ConstUtil = require('../../utils/ConstUtil');
const AutomationUtil = require('../../utils/AutomationUtil');
const mModule = require('../../modules/LoginModule');
const logoutModule = require('../../modules/LogoutModule');

let config = AutomationUtil.parseFileSync('sb3.config.json');
let state = {};

Given('I have test data',async () => {
	/*Usando archivo fisico*/
	//state.data = AutomationUtil.parseFileSync('sb3.data.json').login;

	/*Usando api rest, para que funcione el ejemplo ejecutar el script initApiRest del package.json*/
	let request = await mModule.I.sendGetRequest(config.urlData);
	state.data = request.data.login;
});

Given('I select my "<country>" and put my "<user>" and my "<password>"',() => {
	mModule.definedSteps(state.data.country, state.data.user, state.data.password);
	mModule.saveScreenshotWithMocha(__filename,ConstUtil.CAMPOS_LLENADOS_CORRECTOS);
});

When('I click on ingresar a tu cuenta', () => {
	mModule.clickButton();
	mModule.saveScreenshotWithMocha(__filename,ConstUtil.ESPERANDO);
});

Then('I login on system', () => {
	mModule.loginSystem();
	mModule.saveScreenshotWithMocha(__filename,ConstUtil.LOGIN_CORRECTO);
});

Then('I logout on system', () => {
	logoutModule.doLogout();
	logoutModule.verifyLogout();
	mModule.saveScreenshotWithMocha(__filename,ConstUtil.LOGOUT_MESSAGE);
});