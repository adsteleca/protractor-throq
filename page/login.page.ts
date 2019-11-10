
import { element, by, browser, ExpectedConditions, ElementArrayFinder, protractor, ElementFinder, $, $$ } from "protractor";
import { async } from "q";
import { watchFile } from "fs";

let object = require('../test-data/objects.json');

export class LoginPage {

  public elTxtEmail: ElementFinder = $("#txtEmail");
  public elTxtPassword: ElementFinder = $("#txtPassword");
  public elBtnLogin: ElementFinder = $("#btnLogin");
  public elSidelogOut: ElementFinder = $("#SidelogOut");
  public elErrorMessage: ElementFinder = element(by.css(".ng-trigger"));





  public setLogin = async (userName: string, password: string) => {
    let isState = await element(object.Locators.Selectcurrency).isPresent();
    console.log(object.Locators.Selectcurrency + "aaa"+isState)
    await element(object.Locators.Selectcurrency).sendKeys(userName);
    //  await this.elTxtEmail.sendKeys(userName);
    await this.elTxtPassword.sendKeys(password);
    return this.elBtnLogin.click();
  };

  public setLogout = async () => {
    await this.elSidelogOut.click();
  }

  public setError = async () => {
    return this.elErrorMessage.isPresent();
  }


  public visit(dataUrl: string): any {
    return browser.get(dataUrl);
  }

  public getVanityURL(dataSearchKey: string): any {
    return browser.driver.getCurrentUrl().then((vanityURL: string) => {
      let index: number = vanityURL.indexOf(dataSearchKey);
      let vanityUrl: string = vanityURL.slice(index + dataSearchKey.length);
      return vanityUrl;
    })
  }
  public getURL(): any {
    console.log("Get the current URL of the AUT")
    return browser.driver.getCurrentUrl();
  }


}
