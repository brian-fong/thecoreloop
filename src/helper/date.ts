// Days of the week
export const WEEKDAYS: string[] = [
  "monday", "tuesday", "wednesday", 
  "thursday", "friday", "saturday", "sunday",
];

// Numbered days with suffix
export const DAYS: string[] = [
  "1st",  "2nd",  "3rd",  "4th",  "5th",  "6th",  "7th",  "8th",  "9th",  "10th", 
  "11th", "12nd", "13th", "14th", "15th", "16th", "17th", "18th", "19th", "20th", 
  "21st", "22nd", "23rd", "24th", "25th", "26th", "27th", "28th", "29th", "30th", "31st",
];

// Months of the year
export const MONTHS: string[] = [
  "january", "february", "march", "april", 
  "may", "june", "july", "august", 
  "september", "october", "november", "december",
];

// Years valid for LAG posts
export const YEARS: string[] = [
  "2022", "2023"
];

export class Date {
  weekday: string = "N/A";
  day: string = "N/A";
  month: string = "N/A";
  year: string = "N/A";

  constructor(_line: string) {
    const line: string = _line.toLowerCase();
    const words: string[] = line.split(" ");

    for (const word of words) {
      if      (WEEKDAYS.includes(word))   this.weekday  = word;
      else if (DAYS.includes(word))       this.day      = word;
      else if (MONTHS.includes(word))     this.month    = word;
      else if (YEARS.includes(word))      this.year     = word;
    }
  }

  toString(): string {
    // Return string representing date e.g. "Wednesday April 20th 2022"
    const Weekday = this.weekday[0].toUpperCase() + this.weekday.slice(1);
    const Month = this.month[0].toUpperCase() + this.month.slice(1);
    const date_string: string = `${Weekday} ${Month} ${this.day} ${this.year}`;
    return date_string;
  }
}

