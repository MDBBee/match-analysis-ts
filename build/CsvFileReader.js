"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CsvFileReader = void 0;
const fs_1 = __importDefault(require("fs"));
class CsvFileReader {
    constructor(filename) {
        this.filename = filename;
        this.data = [];
    }
    read() {
        this.data = fs_1.default
            .readFileSync(this.filename, { encoding: 'utf-8' })
            .split('\n')
            .map((row) => row.split(','));
    }
}
exports.CsvFileReader = CsvFileReader;
// [['29/10/2018', 'Tottenham', 'Man City', '0', '1', 'A', 'K Friend']];
//to read, parse and store data into a [[],[]]
