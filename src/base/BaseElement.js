class BaseType {
	constructor(){
		this.Submit = 'submit';
		this.Button = 'button';
	}
}

class BaseElement {
	constructor(){
		this.Button = 'button';
		this.Input = 'input';
		this.Select = 'select';

		this.BaseType = new BaseType();
	}
}

module.exports = new BaseElement();
module.exports.BaseElement = BaseElement;
