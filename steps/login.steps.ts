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
import { LoginPage } from "../page/login.page";
const expect: Chai.ExpectStatic = chai.expect;


let data: any = json.read(browser.params.datapath + "/test-data/data.json");

defineSupportCode(function ({ Given, When, Then }): any {

  const signIn: LoginPage = new LoginPage();


  Given(/^Login to Application$/,
    async () => {
      await signIn.visit(browser.baseUrl)
      let sCURL = signIn.getURL();

    });

  Given(/^I login with UserName "([^"]*)" Password "([^"]*)"$/, 
  async (setUserName: string, setPwd: string) => {
    // Write code here that turns the phrase above into concrete actions
    try {
      await signIn.setLogin(data.get(setUserName),data.get(setPwd));
    } catch (error) {

    }
  });

  Then(/^I logged out$/, 
    async () => {
    // Write code here that turns the phrase above into concrete actions
    await signIn.setLogout();
  });
  Then(/^user see invalid credential message$/,
    async () => {
      try {
        let isState = await signIn.setError();
        expect(isState).to.equal(true);
      } catch (error) {
        
      }
  });
          






});

