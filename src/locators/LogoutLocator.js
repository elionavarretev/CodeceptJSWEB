const LoginLocator = require('./LoginLocator');

class LogoutLocator extends LoginLocator.LoginLocator {
	constructor(){
		super();
		this.logoutLink = locate('a').withAttr({ href: '/signout' });
	}
}

module.exports = new LogoutLocator();
module.exports.LogoutLocator = LogoutLocator;