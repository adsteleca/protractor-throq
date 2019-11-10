
import { element, by, browser, ExpectedConditions, ElementArrayFinder, protractor, ElementFinder, $, $$ } from "protractor";
import { async } from "q";
import { watchFile } from "fs";
import * as json from "json-file";
let data: any = json.read(browser.params.datapath + "/test-data/data.json");
import { constant } from "../utilities/constant";

export class StudentEditPage {
  private elTxtfirst_name: ElementFinder = $("#txtfirst_name");
  private elTxtlast_name: ElementFinder = $("#txtlast_name");
  private elTxtemail: ElementFinder = $("#txtemail");
  private elTxtPhone: ElementFinder = $("#txtPhone");
  private elBtnUpdate: ElementFinder = $("#btnUpdate");



//student
  public updateStudentInformation = async () => {
    await browser.wait(ExpectedConditions.visibilityOf(this.elTxtfirst_name), constant.seleniumTimeout)
    await this.elTxtfirst_name.clear();
    await this.elTxtfirst_name.sendKeys(data.get("student.updateFirstName"));
   return await this.elBtnUpdate.click();
  }

  

}
