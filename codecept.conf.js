const AutomationUtil = require('./src/utils/AutomationUtil');
let steps = AutomationUtil.fnGetFiles('./src/features', '.steps.js');
const { setSharedCookies } = require('@codeceptjs/configure');

setSharedCookies();

let config = AutomationUtil.parseFileSync('sb3.config.json');

exports.config = {
	output: 'report',
	helpers: {
		REST: {
			defaultHeaders: {
				/* 'Auth': '11111', */
				'Content-Type': 'application/json',
				'Accept': 'application/json',
			  },
		},Mochawesome:{
			uniqueScreenshotNames:"true"
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
			grep: '@basic',
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
		  ,
		  scripts: {
			"codeceptjs": "codeceptjs run --reporter mochawesome"
		  },
		  dependencies: {
			"codeceptjs": "1.0.3",
			"mochawesome": "2.3.1"
		  }
	},
	tests: './tests/*.spec.js',
	timeout: 10000,
	name: config.name
}
