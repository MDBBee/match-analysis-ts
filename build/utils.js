"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dateStringToDate = void 0;
// [['29/10/2018', 'Tottenham', 'Man City', '0', '1', 'A', 'K Friend']];
const dateStringToDate = (dateString) => {
    const dateParts = dateString.split('/').map((val) => parseInt(val));
    return new Date(dateParts[2], dateParts[1] - 1, dateParts[0]);
};
exports.dateStringToDate = dateStringToDate;
