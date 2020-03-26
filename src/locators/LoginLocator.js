const BaseElement = require('../base/BaseElement');
const MenuLocator = require('./MenuLocator');

class LoginLocator extends MenuLocator.MenuLocator {
	constructor(){
		super();
		this.btnLogin = this.locateIndex(BaseElement.Input,1);
		this.waitingElement = `//belcorp-single-sign-on/div/p`;
		this.inicioLink = locate('a').withAttr({ href: '/' });
		this.selectCountry = locate('select').withAttr({id:'ddlPais'});
		this.inputUserCode = '//input[@id = \'txtUsuario\']';
		this.inputUserPassword = '#txtContrasenia';
	}
}

module.exports = new LoginLocator();
module.exports.LoginLocator = LoginLocator;