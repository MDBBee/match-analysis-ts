"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const MatchReader_1 = require("./MatchReader");
const CsvFileReader_1 = require("./CsvFileReader");
const WinsAnalysis_1 = require("./analyzer/WinsAnalysis");
const Summary_1 = require("./Summary");
const HtmlReport_1 = require("./reportTargets/HtmlReport");
const readerCSV = new CsvFileReader_1.CsvFileReader('football.csv');
const reader = new MatchReader_1.MatchReader(readerCSV);
reader.load();
const summ = new Summary_1.Summary(new WinsAnalysis_1.WinsAnaysis('Manchester united'), new HtmlReport_1.HtmlReport());
// const summ = new Summary(
//   new WinsAnaysis('Manchester united'),
//   new ConsoleReport()
// );
summ.buildAndPrintReport(reader.matches);
// console.log(reader.matches);
