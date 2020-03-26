const locator = require('../locators/LogoutLocator');
const BaseModule = require('../base/BaseModule');

class LogoutModule extends BaseModule.BaseModule {

	constructor(){
		super();
	}

	doLogout() {
		this.I.waitForElement(locator.logoutLink);
  		this.I.click(locator.logoutLink);
	}
	verifyLogout(){
		this.waitForElements([locator.selectCountry,locator.inputUserCode,locator.inputUserPassword]);
	}
  
	abrirMenuLateral(){
		this.I.waitForElement(locator.hamburgerMenu);
		this.I.click(locator.hamburgerMenu);
	}
}

module.exports = new LogoutModule();
module.exports.LogoutModule = LogoutModule;