const FromcarouselLocator = require('../FromcarouselLocator');

class CatalogoLocator extends FromcarouselLocator.FromcarouselLocator {
	constructor(){
		super();
		this.btnAddCartCatalogo = (index) => `${this.ofertasCatalogos(1)}//owl-carousel-o//div[${this.xPathByClassName('owl-item')}][${index}]//button[${this.xPathByText(' Agregar ')}]`;
	}
}

module.exports = new CatalogoLocator();
module.exports.CatalogoLocator = CatalogoLocator;