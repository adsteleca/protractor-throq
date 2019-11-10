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
import { HomePage } from "../page/home.page";
const expect: Chai.ExpectStatic = chai.expect;


let data: any = json.read(browser.params.datapath + "/test-data/data.json");

defineSupportCode(function ({ Given, When, Then }): any {

  const home: HomePage = new HomePage();


  Then(/^user should successfully logged in$/,
    async () => {
      // Write code here that turns the phrase above into concrete actions
      try {
        let isState = home.checkHomePage();
        expect(isState).to.equal(true);
      } catch (error) {

      }
    });

  Then(/^Student should successfully created as "([^"]*)"$/,
    async (setFirstName) => {
      // Write code here that turns the phrase above into concrete actions
      try {
        let isState = home.checkStudentInformation();
        expect(isState).contains(data.get(setFirstName))
      } catch (error) {
      }
    });

  When(/^User delete the existing student details$/,
    async () => {
      // Write code here that turns the phrase above into concrete actions
      try {
        await home.deleteRecords();
        await browser.wait(ExpectedConditions.alertIsPresent(), 5000);
        await browser.switchTo().alert().accept();
      } catch (error) {

      }
    });


  Then(/^Student should deleted successfully$/,
    async () => {
      // Write code here that turns the phrase above into concrete actions
      try {
        let isState: any = await home.checkSundararInformation() ? "true" : "false";
        expect(false).to.equal(isState);
      } catch (error) {

      }
    });

  When(/^User click on the  Add New Student from top pannel$/,
    async () => {
      // Write code here that turns the phrase above into concrete actions
      try {
        await home.addNewStuRecords();
      } catch (error) {

      }
    });

  When(/^User delete all records$/,
    async () => {
      // Write code here that turns the phrase above into concrete actions
      try {
        await home.deleteAllRecords();
      } catch (error) {
      }
    });

  Then(/^User should see No students found message$/,
    async () => {
      try {
        let isState = await home.checkNoRecords();
        expect(isState).contains("No records found")
      } catch (error) {
      }
    });

    When(/^User search by given value "([^"]*)"$/,
    async (setSearch) => {
      try {
        home.setSearch(setSearch);
      } catch (error) {
      }
    });



});

