# ads-throq-atdd: Protractor + TypeScript + CucumberJS
![GitHub Logo](/raw/master/adsteleca.png)
Format: ![Alt Text](url)

## About

**ads-throq-atdd: An E2E Test Automation Framework for validating the  WEB Core functionality**. It is built on principles of **Page Object Model** and powered by [Protractor](http://www.protractortest.org/#/) + [TypeScript](https://www.typescriptlang.org/) - An E2E open-source library to interact with Angular  & Angular (JS) applications. As a part of **ATDD (Acceptance Test Driven Development)** and to achieve **"Feature Driven"** the framework is tightly integrated with [CucumberJS](https://cucumber.io/) - An open-source BDD library.

_______________________________________________________


ads-throq-atdd works with AngularJS versions greater than 1.0.6/1.1.4, and is compatible with Angular applications.

_______________________________________________________
### Getting Started

See the [Protractor](http://www.protractortest.org/#/) + [TypeScript](https://www.typescriptlang.org/) + [CucumberJS](https://cucumber.io/) for most documentation.

## Setting-Up and Running Quickly


### Pre-requisite Software

  * Install Java
    * Install Visual Studio Code (or may be your favourite IDE)
    * Install node.js (npm) Check Compatibility Version [Here](https://github.com/angular/protractor#compatibility/)
    * Browsers (Chrome is must) Check Browsers Compatibility [Here](http://www.protractortest.org/#/browser-support/)

### Global Installs [Optional]

  * npm install -g protractor
    - webdriver-manager update
    - webdriver-manager start
  * npm install -g chai
  * npm install -g chai-as-promised
  * npm install -g cucumber
  * npm install -g protractor-cucumber-framework
  * npm install -g selenium-standalone
  * npm install -g selenium-webdriver
  * npm install -g webdriver-manager
  * npm install -g npm-check-updates  

### Setting up & run ads-throq-atdd

  * git clone  
    - ads-throq-atdd $ npm install (Installs all dependencies)
      - [Optional] : ads-throq-atdd $ ncu (Checks for latest version of dependecies)
      - [Optional] : ads-throq-atdd $ ncu -u (package.json upgraded to all latest versions of dependencies)
    - ads-throq-atdd $ npm run update [Please make sure you have proxy settings enabled]
    - ads-throq-atdd $ npm run protractor -- --env=qamb --cucumberOpts.tags="@smoke"
    - Please make sure runner.ts has [directConnect: true] [browserName: chrome] and no selenium server      flags are set true.

    ![In Action]()

### Available NPM Scripts

* npm run clean : To clean un-wanted files
* npm run lint : Generates code.review.log file with TS/ESLint voilations if any.
* npm run compile : Compiles the project to JS from TS
* npm run update : Updates the browser drivers & selenium standalone
* npm run start : Starts the selenium standalone server and default port is 4444
* npm run protractor : Executes the E2E protractor scripts and accepts custom CLI arguments

### Road Map



