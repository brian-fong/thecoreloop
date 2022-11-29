"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Date = exports.YEARS = exports.MONTHS = exports.WEEKDAYS = void 0;
exports.WEEKDAYS = [
    "monday", "tuesday", "wednesday",
    "thursday", "friday", "saturday", "sunday",
];
exports.MONTHS = [
    "january", "february", "march", "april",
    "may", "june", "july", "august",
    "september", "october", "november", "december",
];
exports.YEARS = [
    "2022", "2023"
];
class Date {
    constructor(_line) {
        this.weekday = "N/A";
        this.day = "N/A";
        this.month = "N/A";
        this.year = "N/A";
        const line = _line.toLowerCase();
        const words = line.split(" ");
        for (const word of words) {
            if (exports.WEEKDAYS.includes(word))
                this.weekday = word;
            if (exports.MONTHS.includes(word))
                this.month = word;
            if (exports.YEARS.includes(word))
                this.year = word;
        }
    }
    toString() {
        const date_string = ;
    }
}
exports.Date = Date;
