const AutomationUtil = require('../utils/AutomationUtil');
const ConstUtil = require('../utils/ConstUtil');

class BaseModule {
	constructor(){
		this.I = actor();
		this.I.click = (element) => {
			return this.I.retry().click(element);
		}
		this.I.retry = () => {
			return actor().retry(AutomationUtil.wait);
		}
		this.I.waitForElement = (element) => {
			this.I.wait(1);
			return this.I.retry().waitForElement(element,ConstUtil.WAITING_TIME);
		}
		this.waitForElements = (elements) => {
			this.I.wait(2);
			elements.forEach((element) => {
				this.I.retry().waitForElement(element,ConstUtil.WAITING_TIME);
			});
			return this;
		}
		this.I.see = (element) => {
			return this.I.retry().see(element);
		}
		this.I.seeElement = (element) => {
			return this.I.retry().seeElement(element);
		}
		this.I.dontSeeElement = (element) => {
			return this.I.retry().dontSeeElement(element);
		}
		this.saveScreenshotWithMocha = (baseName,fileName) => {
			AutomationUtil.saveScreenshotWithMocha(baseName,fileName);
		}
		this.I.fillField = (element,value) => {
			return this.I.retry().fillField(element,value);
		}
		this.I.grabTextFrom = async (element) => {
			this.I.wait(0.5);
			return await this.I.retry().grabTextFrom(element);
		}
		this.I.grabValueFrom = async (element) => {
			this.I.wait(0.5);
			return await this.I.retry().grabValueFrom(element);
		}
	}	
}

module.exports = new BaseModule();
module.exports.BaseModule = BaseModule;
