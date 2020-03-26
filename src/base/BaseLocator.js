const BaseElement = require('./BaseElement');

const BaseModule = require('./BaseModule');

const codeceptjs = require('codeceptjs');
const Helper = codeceptjs.helper;

class BaseLocator extends Helper {
	constructor(){
		super();
		this.locateIndex = (type,index, attrs) => {
			switch(type){
			case BaseElement.Input:
				return `//body//${BaseElement.Input}[${index}][${this.xPathByType(BaseElement.BaseType.Submit)}]`;
			case BaseElement.Button:
				return `//body//${BaseElement.Button}[${index}][${this.xPathByType(BaseElement.BaseType.Button)}]`;
			case BaseElement.Select:
				return `//body//${BaseElement.Select}[${index}][${attrs}]`;
			}
		};
		this.xPathByClassName = (className) => `contains(normalize-space(@class), '${className}')`;
		this.xPathByText = (text) => `text()='${text}'`;
		this.xPathByType = (type) => `@type = '${type}'`;
		this.xPathByRole = (type) => `@role = '${type}'`;
		this.xPathByHref = (type) => `@href = '${type}'`;
		this.xPath = (path) => {
			var xPath = path;
			
			this.upTo = (pathTo,times=1) => {
				if(times < 1)
					throw "las veces deben ser mayor o igual a 1";
				for(var i= 0; i< times-1; i++){
					xPath += '/..';
				}
				xPath += '/../'+pathTo;
				return this;
			}
			this.goTo = (pathTo) => {
				xPath += pathTo;
				return this;
			}
			this.build = () => {
				return xPath;
			}
			return this;
		}
	}
}

module.exports = new BaseLocator();
module.exports.BaseLocator = BaseLocator;
