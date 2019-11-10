
import { element, by, browser, ExpectedConditions, ElementArrayFinder, protractor, ElementFinder, $, $$ } from "protractor";
import { async } from "q";
import { watchFile } from "fs";
import * as json from "json-file";
let data: any = json.read(browser.params.datapath + "/test-data/data.json");
import { constant } from "../utilities/constant";

export class HomePage {
  public elBtnAddNewStudent: ElementFinder = $("#btnAddNewStudent");
  public elSideAdd: ElementFinder = $("#SideAdd");
  public elBtnLogin: ElementFinder = $("#btnLogin");
  private elLblFirstName: ElementFinder = element(by.css("[id*=lblFirstName]"));
  private elBtnUpdateSundarar: ElementFinder = element(by.css("[id*=btnUpdateSundarar]"));
  private elBtnDeleteSundarar: ElementFinder =  $("#btnDeleteSundarar");
  private elLblFirstNameSundarar: ElementFinder =  $("#lblFirstNameSundarar");
  public elTopbtnAddNewStudent: ElementFinder = $("#TopbtnAddNewStudent");
  public elnoRec: ElementFinder = $("#noRec");
  private elBtnDelete: ElementFinder = element(by.css("[id*=btnDelete]"));
  public elTxtSearch: ElementFinder = $("#txtSearch");
  
  
  

 
  public checkHomePage = async () => {
  let isState=  await this.elBtnAddNewStudent.isPresent()
     return isState;
   }

   public setStudentCreation = async () => {
      await this.elSideAdd.click();
     }

     public checkStudentInformation = async () => {
      let isState = await this.elLblFirstName.getText();
      return isState;
     }
     public setUpdateRecords = async () => {
      await this.elBtnUpdateSundarar.click();
     }

     public deleteRecords = async () => {
      await this.elBtnDeleteSundarar.click();
     }

     public checkSundararInformation = async () => {
      let isState = await this.elLblFirstNameSundarar.isDisplayed();
      return isState;
     }

     public addNewStuRecords = async () => {
      await this.elTopbtnAddNewStudent.click();
     };
     public deleteAllRecords = async () => {
      let isState = await this.elBtnDelete.isPresent();
      while (isState) {
        await this.elBtnDelete.click();
        await  browser.wait(ExpectedConditions.alertIsPresent(), 5000);
        await browser.switchTo().alert().accept();
    }
     }
     public checkNoRecords = async () => {
      let isState = await this.elnoRec.getText();
      return isState;
     };

     public setSearch = async (setSearch) => {
      await browser.wait(ExpectedConditions.visibilityOf(this.elTxtSearch), constant.seleniumTimeout);
      await this.elTxtSearch.sendKeys(data.get(setSearch));
     };

}
