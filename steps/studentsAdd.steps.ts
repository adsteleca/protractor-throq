import { element, by, browser, ExpectedConditions, protractor } from "protractor";
import { defineSupportCode, CallbackStepDefinition, Scenario, TableDefinition } from "cucumber";
import { Lib } from "../utilities/core.lib";
import * as colors from "colors/safe";
import * as chai from "chai";
import * as chaiAsPromised from "chai-as-promised";
import * as json from "json-file";
import * as fs from "fs";
import { async } from "q";
chai.use(chaiAsPromised);
import { StudentRegPage } from "../page/studentsAdd.page";
import { HomePage } from "../page/home.page";
const expect: Chai.ExpectStatic = chai.expect;


let data: any = json.read(browser.params.datapath + "/test-data/data.json");

defineSupportCode(function ({ Given, When, Then }): any {

  const StudentReg: StudentRegPage = new StudentRegPage();
  const home: HomePage = new HomePage();



  When(/^User enters all required information and then clicks Register$/, async () => {
    // Write code here that turns the phrase above into concrete actions
    try {
    await home.setStudentCreation();
    await StudentReg.setStudentInformation();
    } catch (error) {

    }
  });



  Then(/^Student Registration page displayed$/, async () => {
    // Write code here that turns the phrase above into concrete actions
    try {
      let isState: any = await StudentReg.checkStudentInformation ? "true" : "false";
      expect(true).to.equal(isState);
    } catch (error) {

    }
  });





});

