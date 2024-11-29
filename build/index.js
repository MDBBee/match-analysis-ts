"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const CsvFileReader_1 = require("./CsvFileReader");
const reader = new CsvFileReader_1.CsvFileReader('football.csv');
reader.read();
let manUnitedWins = 0;
console.log(reader);
// [['29/10/2018', 'Tottenham', 'Man City', '0', '1', 'A', 'K Friend']];
for (let match of reader.data) {
    if (match[1] === 'Man United' && match[5] === 'H') {
        manUnitedWins++;
    }
    else if (match[2] === 'Man United' && match[5] === 'A') {
        manUnitedWins++;
    }
}
// export enum MatchResults {
//   HomeWin = 'H',
//   AwayWin = 'A',
//   Draw = 'D',
// }
// console.log(MatchResults.HomeWin);
