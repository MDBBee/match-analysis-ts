import { MatchReader } from './MatchReader';
import { CsvFileReader } from './CsvFileReader';
import { WinsAnaysis } from './analyzer/WinsAnalysis';
import { ConsoleReport } from './reportTargets/ConsoleReport';
import { Summary } from './Summary';
import { HtmlReport } from './reportTargets/HtmlReport';

const readerCSV = new CsvFileReader('football.csv');
const reader = new MatchReader(readerCSV);
reader.load();
// console.log(reader.matches);

const summ = new Summary(
  new WinsAnaysis('Manchester united'),
  new HtmlReport()
);
// const summ = new Summary(
//   new WinsAnaysis('Manchester united'),
//   new ConsoleReport()
// );
// summ.buildAndPrintReport(reader.matches);

const summ2 = Summary.winsAnalysisWithConsoleLog('Man U');
summ2.buildAndPrintReport(reader.matches);
const summ3 = Summary.winsAnalysisWithHtmlReport('Manchester United');
summ3.buildAndPrintReport(reader.matches);
