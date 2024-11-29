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
// console.log(reader.matches);
const summ = new Summary_1.Summary(new WinsAnalysis_1.WinsAnaysis('Manchester united'), new HtmlReport_1.HtmlReport());
// const summ = new Summary(
//   new WinsAnaysis('Manchester united'),
//   new ConsoleReport()
// );
// summ.buildAndPrintReport(reader.matches);
const summ2 = Summary_1.Summary.winsAnalysisWithConsoleLog('Man U');
summ2.buildAndPrintReport(reader.matches);
const summ3 = Summary_1.Summary.winsAnalysisWithHtmlReport('Manchester United');
summ3.buildAndPrintReport(reader.matches);
