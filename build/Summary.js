"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Summary = void 0;
const WinsAnalysis_1 = require("./analyzer/WinsAnalysis");
const ConsoleReport_1 = require("./reportTargets/ConsoleReport");
const HtmlReport_1 = require("./reportTargets/HtmlReport");
class Summary {
    static winsAnalysisWithConsoleLog(clubName) {
        return new Summary(new WinsAnalysis_1.WinsAnaysis(clubName), new ConsoleReport_1.ConsoleReport());
    }
    static winsAnalysisWithHtmlReport(clubName) {
        return new Summary(new WinsAnalysis_1.WinsAnaysis(clubName), new HtmlReport_1.HtmlReport());
    }
    constructor(analyzer, outputTarget) {
        this.analyzer = analyzer;
        this.outputTarget = outputTarget;
    }
    buildAndPrintReport(matches) {
        const report = this.analyzer.run(matches);
        this.outputTarget.print(report);
    }
}
exports.Summary = Summary;
