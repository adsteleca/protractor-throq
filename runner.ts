
import { Lib } from "./utilities/core.lib";
import * as chai from "chai";
import * as chaiAsPromised from "chai-as-promised";
import { element, by, browser, ExpectedConditions, Config } from "protractor";
import * as fs from "fs-extra";
import { defineSupportCode, Scenario, CallbackStepDefinition } from "cucumber";
import * as reporter from "sm-cucureport";
import * as path from "path";
import * as json from "json-file";
import colors = require("colors/safe");
import dateFormat = require("dateformat");
import * as cmd from "node-cmd";
import * as sleep from "system-sleep";
import * as gulp from "gulp";
import * as merge from "gulp-merge-json";
const cliArg: any = require("yargs").argv;
const expect: Chai.ExpectStatic = chai.expect;
dateFormat.masks.runTime = "ddd_mmm_dd_yyyy_HH_MM_TT_Z";
chai.use(chaiAsPromised);

let browserParam = cliArg.browser;
let setNativeRun = cliArg.runmode;
export let config: Config = {
  // directConnect: setNativeRun,
  directConnect: true,
  enableElementCacheCleanup: true,
  javascriptEnabled: true,
  ignoreProtectedModeSettings: true,
  logName: "ads-throq-atdd",
  count: 10, // number of same browser instances to run in parallel with same configurations
  shardTestFiles: true, // this is only needed if above is true
  maxInstances: 10, // this says....how many instances of same version of browser can run
  ignoreUncaughtExceptions: true,
  disableChecks: true,
  noGlobals: false,

  // Capabilities to be passed to the webdriver instance.
  capabilities: {
    browserName: 'firefox'
  },

  specs: [
    "../*/features/*/*.feature",
    "../*/features/*/*/*.feature"
  ],
  // ****************************************************************************
  // ----  To connect to a Selenium Server which is already running ----------
  // ****************************************************************************
  seleniumServerJar: path.resolve(process.cwd()) +"/node_modules/webdriver-manager/selenium/selenium-server-standalone-3.4.0.jar",
  seleniumPort: 4444,
   seleniumAddress: "http://localhost:4444/wd/hub",

  // ****************************************************************************

  // multiCapabilities: [
  //   {
  //   browserName: 'chrome'
  //   }
  // ],

  // ****************************************************************************
  // -------------------- Global test information -----------------------------
  // ****************************************************************************
  allScriptsTimeout: 300000,
  getPageTimeout: 300000,
  untrackOutstandingTimeouts: false,

  // Merge all the test data files and write in the /test-data/data.json
  beforeLaunch: (): any => {
    fs.remove(path.resolve(process.cwd()) + "/test-data/data.json")
      .then(() => {
        gulp.src(path.resolve(process.cwd()) + "/test-data/*.json")
          .pipe(merge({
            fileName: "data.json",
          }))
          .pipe(gulp.dest(path.resolve(process.cwd()) + "/test-data"));
        console.log("Merged all the test data files and written in the /test-data/data.json")
      })
      .catch((err: Error) => {
        console.error(err);
      });
  },

  onPrepare: () => {

    colors.setTheme({
      silly: "rainbow",
      input: "grey",
      verbose: "cyan",
      prompt: "grey",
      info: "green",
      data: "grey",
      help: "cyan",
      warn: "yellow",
      debug: "blue",
      error: "red",
      custom: ["red", "underline"]
    });



    // maximize the browser before executing the feature files
    browser.driver.manage().window().maximize();

    /***************************************************************************
    Description: Declaration of environments
    ***************************************************************************/
    const environments: any = json.read(browser.params.datapath + "/environments/environments.json");
    // ****************************************************************************
    // ----  Switch Case Statement to select the environment ---------------------
    // ****************************************************************************
    try {
      switch ((cliArg.env).toLowerCase()) {
        case "local":
          browser.baseUrl = environments.get("environments.local");
          break;
        default:
          throw new Error(
            "******************************************************************************************" + "\n" +
            "Invalid environment argument ==> " + cliArg.env + "\n" +
            "Availble environments are ==> local/dev/regression/" + "\n" +
            "******************************************************************************************");
      }
    } catch (err) {
      throw new Error(
        err.name + "\n" +
        "******************************************************************************************" + "\n" +
        "Invalid environment argument ==> " + cliArg.env + "\n" +
        "Availble environments are ==> local/dev/qamb/qambmob/regression/regressionmob/prod/prodmob" + "\n" +
        "******************************************************************************************");
    }
  },

  afterLaunch: (): any => {

    let options: any = {
      theme: "bootstrap",

      jsonFile: path.resolve(process.cwd()) + "/reports/global/json/"+cliArg.testsuiterunid+"_"+ dateFormat(Date(), "runTime") +".json",

      output: path.resolve(process.cwd()) + "/reports/global/html/testrun_" +
        dateFormat(Date(), "runTime") + ".html",

      ignoreBadJsonFile: false,
      name: "ads-throq-atdd",
      storeScreenShots: true,
      reportSuiteAsScenarios: true,
      launchReport: true,

      // mock Data : This may be deleted since all these details we are tracking in dashboard
      metadata: {
        "Test Run ID": browser.params.testRunID,
        "App Name": "Throq Web App",
        "Test Environment": "Production URL",
        "Browser": "Chrome v74",
        "Platform": "Windows 10 OS",
        "Parallel": "NA",
        "Executed": "NA",
        "Run Date": dateFormat(Date.now(), "dddd, mmmm dS, yyyy, h:MM:ss TT"),
      }
    };

    //console.log(options);
    reporter.generate(options);

  },

  /***************************************************************************
  Description: Declaration of Global Params
  ***************************************************************************/

  params: {
    path: process.cwd(),
    stepspath: path.resolve(process.cwd()),
    datapath: path.resolve(process.cwd()),
    pagespath: path.resolve(process.cwd()) + "/pages",
    modalspath: path.resolve(process.cwd()) + "/objects/modals",
    utilpath: path.resolve(process.cwd()) + "/utilities",
    hookspath: path.resolve(process.cwd()) + "/reports/global/json/"+cliArg.testsuiterunid+"_",
  },

  // ****************************************************************************
  // -------------------- The Cucumber JS Configurations       -----------------
  // ****************************************************************************
  framework: "custom",
  frameworkPath: require.resolve("protractor-cucumber-framework"),
  // ****************************************************************************
  // -------------------- Cucumber Options  like @tags, @formats ---------------
  // ****************************************************************************
  cucumberOpts: {
    compiler: "ts:ts-node/register",
    monochrome: true,
    plugin: ["pretty"],
    strict: true,
    format: ["pretty"],
    keepAlive: true,
    require: [
      path.resolve(process.cwd()) + "/steps/*.ts",
      path.resolve(process.cwd()) + "/steps/*/*.ts",
      path.resolve(process.cwd()) + "/test-data/*.json",
      path.resolve(process.cwd()) + "/objects/*/*.ts",
      path.resolve(process.cwd()) + "/utilities/*.ts"
    ],
    tags: "@demo"
  }

};
