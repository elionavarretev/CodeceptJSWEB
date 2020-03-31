const AutomationUtil = require('./src/utils/AutomationUtil');
let steps = AutomationUtil.fnGetFiles('./src/features', '.steps.js');
const { setSharedCookies } = require('@codeceptjs/configure');

setSharedCookies();

let config = AutomationUtil.parseFileSync('test.config.json');

exports.config = {
	output: 'report',
	helpers: {
		"Mochawesome": {
			"uniqueScreenshotNames": "true" // uniqueScreenshotNames in Mochawesome helper
		  },
		REST: {
			defaultHeaders: {
				/* 'Auth': '11111', */
				'Content-Type': 'application/json',
				'Accept': 'application/json',
			  },
		},
		Protractor: {
			url: config.host,
			driver: 'hosted',
			browser: 'chrome',
			//show: false,
			capabilities: {
				chromeOptions: {
					 /*args: [ '--headless', '--disable-gpu', '--no-sandbox' ]*/
				}
			},
			rootElement: 'body',
			windowSize:  'maximize',
			angular: false
			,uniqueScreenshotNames: "true" // uniqueScreenshotName
		},
		
		AssertWrapper : {
			require: 'codeceptjs-assert'
		}
	},
	include: { //I: "./steps_file.js",
	// other pages
	},
	mocha: {
		reporterOptions: {
			reportDir: './report/',
			reportFilename: config.name,
			reportTitle: config.reportTitle,
			autoOpen:true,
			ts:'',
		}
	},
	bootstrap: null,
	teardown: null,
	hooks: [],
	gherkin: {
		features: './src//features/**/*.feature',
		steps: [...steps]
	},
	plugins: {
		allure: {},
		screenshotOnFail: {
			enabled: true
		},
		wdio: {
			enabled: true,
			services: ['selenium-standalone']
		}
	},
	multiple: {
		basic: {
			// run all tests in chrome and firefox
			browsers: ['chrome', 'firefox']
		},
		smoke:{
			grep: '@caso',
			outputName: 'smoke',
			browsers: ['firefox',
				{
					browser: 'chrome',
					windowSize: 'maximize',
					desiredCapabilities: {
						acceptSslCerts: true
					}
				}
				// replace any config values from WebDriver helper
			]
		}
		,
		parallel: {
			// Splits tests into 2 chunks
			chunks: 2,
			// run all tests in chrome and firefox
			browsers: ["chrome", "firefox"]
		  }
		 
	},
	tests: './tests/*.spec.js',
	timeout: 10000,
	name: config.name
}
