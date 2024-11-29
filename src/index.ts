import { MatchReader } from './MatchReader';
import { CsvFileReader } from './CsvFileReader';
import { WinsAnaysis } from './analyzer/WinsAnalysis';
import { ConsoleReport } from './reportTargets/ConsoleReport';
import { Summary } from './Summary';
import { HtmlReport } from './reportTargets/HtmlReport';

const readerCSV = new CsvFileReader('football.csv');
const reader = new MatchReader(readerCSV);
reader.load();

const summ = new Summary(
  new WinsAnaysis('Manchester united'),
  new HtmlReport()
);
// const summ = new Summary(
//   new WinsAnaysis('Manchester united'),
//   new ConsoleReport()
// );

summ.buildAndPrintReport(reader.matches);
// console.log(reader.matches);
