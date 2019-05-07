"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function oneDigitShort(date) {
    if (date < 10) {
        return "0" + date;
    }
    else {
        return String(date);
    }
}
exports.oneDigitShort = oneDigitShort;
var dayOfTheWeek = ['日', '月', '火', '水', '木', '金', '土'];
function date(offset, startMonday) {
    if (offset === void 0) { offset = 0; }
    if (startMonday === void 0) { startMonday = true; }
    var date = new Date();
    var monday = 0;
    if (startMonday) {
        monday = weekOffset();
    }
    date.setDate(date.getDate() + (offset + monday));
    return {
        year: String(date.getFullYear()),
        month: oneDigitShort(date.getMonth() + 1),
        day: oneDigitShort(date.getDate()),
        date: dayOfTheWeek[date.getDay()]
    };
}
exports.date = date;
function weekOffset() {
    var date = new Date();
    var d = date.getDay();
    switch (d) {
        case 0:
            return 1;
        case 1:
            return 0;
        case 2:
            return -1;
        case 3:
            return -2;
        case 4:
            return -3;
        case 5:
            return -4;
        case 6:
            return -5;
    }
    return -1;
}
