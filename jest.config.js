//Jest testing tutorial for Selenium JavaScript Testing
// This configuration properties are taken from the official Jest documentation which is available at https://jestjs.io/docs/en/configuration.html 
//const {default} = require('jest-config');
module.exports = {
	// It indicates the listing where Jest must save the cached dependency details gathered from all throughout the tests
 	cacheDirectory: "./reports",
	// It indicates that each one imported modules in the tests must be mocked automatically
// It indicates that an array of record extensions our modules should be using
 	moduleFileExtensions: [
   	"js",
   	"json",
   	"jsx",
   	"node"
 	],
     // This configuration indicates Jest to the course of a custom resolver
 	// This configuration indicates the Jest to allows us to apply a custom runner in preference to Jest's default inbuilt Jest test runner
 	timers: "real",

	// This configuration shows the Jest to an array of regex expression sample strings which are matched towards all source record paths, matched documents will pass transformation
 	transformIgnorePatterns: [
   	"/node_modules/"
 	],
	// This configuration indicates the Jest which take a look at  test environment it need to use for the testing run
 	testEnvironment: "node",
	// This configuration shows the Jest to add a location field to test the outcome of the run
 	testLocationInResults: false,
	// This configuration factors to the glob patterns Jest uses to detect test files
 	testMatch: [
	 '**/__tests__/*.test.+(ts|tsx|js)'
    ],
	// This configuration indicates the Jest to an array of regexp pattern strings that are matched towards all test paths, matched tests are skipped
 	testPathIgnorePatterns: [
   	"/node_modules/"
 	],
	// This configuration shows the Jest framework to the list of paths to directories that Jest ought to use to look for files inside them
	roots: [
   	'<rootDir>/src'
 	],
	// It indicates the directory in which Jest ought to output its coverage documents and test files
	coverageDirectory: 'coverage',
	// This property shows that an array of regexp sample strings used to skip the test coverage collection
 	coveragePathIgnorePatterns: [
   	"/node_modules/",
    "<rootDir>/src/tests/_variables.ts",
    "<rootDir>/utils/env-constants.ts",
    "<rootDir>/utils/*",
    "<rootDir>/src/routes.ts",
    "<rootDir>/src/static/*",
 	], 
	// It indicates that a list of reporter names that Jest makes use of whilst writing coverage reports
 	coverageReporters: [
   	"json",
   	"text",
   	"lcov",
   	"clover"
 	],

	reporters: [
		'default',
		[ 'jest-junit', {
			outputDirectory: 'reports',
			outputName: 'jest-reports.xml',
		} ]
	],


	// This property shows that an item that configures minimal threshold enforcement for coverage reports
  coverageThreshold: {
    global: {
      lines: 80,
      statements: 80,
      branches: 80,
      functions: 80,
    }
  },
	// It indicates an array of directory names to be searched recursively up from the requiring module's location
 	moduleDirectories: [
   	"node_modules"
 	],
	// This configuration shows the  Jest testing framework whether or not each separate test cases should be reported during the executed test run
 	verbose: true,
	// This configuration shows the Jest testing framework whether or not the watchman should be used for document crawling
 	watchman: true,
  };