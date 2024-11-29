"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const MatchReader_1 = require("./MatchReader");
const CsvFileReader_1 = require("./CsvFileReader");
let manUnitedWins = 0;
const readerCSV = new CsvFileReader_1.CsvFileReader('football.csv');
const reader = new MatchReader_1.MatchReader(readerCSV);
reader.load();
for (let match of reader.matches) {
    if (match[1] === 'Man United' && match[5] === 'H') {
        manUnitedWins++;
    }
    else if (match[2] === 'Man United' && match[5] === 'A') {
        manUnitedWins++;
    }
}
console.log(manUnitedWins);
