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



export class constant {
  public static readonly seleniumTimeout:number = 3000000;
  public static readonly MY_PUBLIC_CONSTANT = 10;
  private static readonly myPrivateConstant = 5;

};
