const BaseModule = require('../base/BaseModule');
const locator = require('../locators/LoginLocator');

class LoginModule extends BaseModule.BaseModule {
	constructor(){
		super();
	}
 
	async definedSteps(country, user, password) {
		this.I.amOnPage('/');
		this.I.waitForElement(locator.selectCountry);
  		this.I.selectOption(locator.selectCountry,country);
		this.I.fillField(locator.inputUserCode, user);
		this.I.fillField(locator.inputUserPassword, password);
	}

	clickButton() {
		this.I.click(locator.btnLogin);
	}

	loginSystem() {
		this.I.waitForElement(locator.waitingElement);
		this.I.waitForElement(locator.inicioLink);
	}

}

module.exports = new LoginModule();
module.exports.LoginModule = LoginModule;
