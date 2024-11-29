import { WinsAnaysis } from './analyzer/WinsAnalysis';
import { MatchData } from './MatchData';
import { ConsoleReport } from './reportTargets/ConsoleReport';
import { HtmlReport } from './reportTargets/HtmlReport';

export interface Analyzer {
  run(matches: MatchData[]): string;
}

export interface OutputTarget {
  print(report: string): void;
}

export class Summary {
  static winsAnalysisWithConsoleLog(clubName: string): Summary {
    return new Summary(new WinsAnaysis(clubName), new ConsoleReport());
  }
  static winsAnalysisWithHtmlReport(clubName: string): Summary {
    return new Summary(new WinsAnaysis(clubName), new HtmlReport());
  }

  constructor(public analyzer: Analyzer, public outputTarget: OutputTarget) {}

  buildAndPrintReport(matches: MatchData[]): void {
    const report = this.analyzer.run(matches);
    this.outputTarget.print(report);
  }
}
