const MenuLocator = require('../../../locators/MenuLocator');

class SearchLocator extends MenuLocator.MenuLocator {
	constructor(){
		super();
		this.modalAddCartConfirmation = `//cx-global-message/div`;
	}
}

module.exports = new SearchLocator();
module.exports.SearchLocator = SearchLocator;