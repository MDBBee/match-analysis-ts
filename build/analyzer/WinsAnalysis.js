"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WinsAnaysis = void 0;
const EnumMatchResults_1 = require("../EnumMatchResults");
class WinsAnaysis {
    constructor(team) {
        this.team = team;
    }
    run(matches) {
        let wins = 0;
        for (let match of matches) {
            if (match[1] === 'Man United' && match[5] === EnumMatchResults_1.MatchResults.HomeWin) {
                wins++;
            }
            else if (match[2] === 'Man United' &&
                match[5] === EnumMatchResults_1.MatchResults.AwayWin) {
                wins++;
            }
        }
        return `Team ${this.team} won ${wins} games`;
    }
}
exports.WinsAnaysis = WinsAnaysis;
