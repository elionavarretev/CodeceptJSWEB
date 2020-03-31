const path = require('path');
const ConstUtil = require('./ConstUtil');
const fs = require('fs');
const codeceptjs = require('codeceptjs');


if(!String.prototype.isEmpty){
	String.prototype.isEmpty = function() {
		return (this.length === 0 || !this.trim());
	};
}

if (!String.prototype.format) {
	String.prototype.format = function() {
	  var args = arguments;
	  return this.replace(/{(\d+)}/g, function(match, number) { 
		return typeof args[number] != 'undefined'
		  ? args[number]
		  : match
		;
	  });
	};
  }

class AutomationUtil {
	constructor(){
		this.wait = { retries: 3, minTimeout: 1000 };
	}

	fnGetFiles(dir, filter = '', files_) {
		files_ = files_ || [];
		const files = fs.readdirSync(dir);
		for (let i in files) {
			let name = dir + '/' + files[i];
			if (fs.statSync(name).isDirectory()) {
				this.fnGetFiles(name, filter, files_);
			} else if (name.indexOf(filter) >= 0) {
				files_.push(name);
			}
		}
		return files_;
	}
  
	saveScreenshotWithMocha(baseName,fileName) {
		let scenario = path.basename(baseName);
		codeceptjs.actor().retry(this.wait).saveScreenshot(scenario+'-'+fileName + '.png');
		codeceptjs.actor().addMochawesomeContext(scenario+'-'+fileName);
		codeceptjs.actor().addMochawesomeContext(scenario+'-'+fileName + '.png');
	}

	parseFileSync(absoluteFilePath){
		let dataJson = fs.readFileSync(absoluteFilePath, 'utf8');
		return JSON.parse(dataJson);
	}
}

module.exports = new AutomationUtil();
module.exports.AutomationUtil = AutomationUtil;
