const FromcarouselLocator = require('../FromcarouselLocator');

class RevistaLocator extends FromcarouselLocator.FromcarouselLocator {
	constructor(){
		super();
		this.btnAddCartRevista = (index) => `${this.ofertasCatalogos(2)}//owl-carousel-o//div[${this.xPathByClassName('owl-item')}][${index}]//button[${this.xPathByText(' Agregar ')}]`;
	}
}

module.exports = new RevistaLocator();
module.exports.RevistaLocator = RevistaLocator;