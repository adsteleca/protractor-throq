import { element, by, browser, ExpectedConditions, WebElement, ElementArrayFinder } from "protractor";
import * as fs from "fs-extra";
import stream = require("stream");
const ls = require("local-storage");
const mysql = require("mysql");
const Connection = require("tedious").Connection;
const Request = require("request");
const http = require('https');
import { ProtractorBrowser } from 'protractor';
import * as dateFormat from "dateformat";
dateFormat.masks.runTime = "yyyy_mm_dd_yy_HH_MM_TT_Z";
const cliArg: any = require("yargs").argv;



export class Lib {
  
  public static doGetDate(): any {
    const currentTime = new Date();


    var time = currentTime.getHours() + ":" + currentTime.getMinutes() + ":" + currentTime.getSeconds();
    var date = currentTime.getFullYear() + "-" + currentTime.getMonth() + 1 + "-" + currentTime.getDate();
    var dateTime = date + ' ' + time;

    return dateTime;
  };

  public static doGetTime() {
    const currentTime = new Date();
    return currentTime.getHours() + ":" + currentTime.getMinutes() + ":" + currentTime.getSeconds();
  };
  public static doGetBrowserName(): any {
    let globals = require('protractor');
    let browser: ProtractorBrowser = globals.browser;

    return browser;
  }
}
