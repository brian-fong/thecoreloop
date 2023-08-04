// Numbered days with suffix
export const DAYS: string[] = [
  "1st",  "2nd",  "3rd",  "4th",  "5th",  "6th",  "7th",  "8th",  "9th",  
  "10th", "11th", "12th", "13th", "14th", "15th", "16th", "17th", "18th", 
  "19th", "20th", "21st", "22nd", "23rd", "24th", "25th", "26th", "27th", 
  "28th", "29th", "30th", "31st",
];

// Months of the year
export const MONTHS: string[] = [
  "January", "February", "March", "April", 
  "May", "June", "July", "August", 
  "September", "October", "November", "December",
];

// Years valid for LAG posts
export const YEARS: string[] = [
  "2022", "2023", "2024"
];

export function getTodaysDate(): string {
  const today = new Date();
  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, '0');
  const day = String(today.getDate()).padStart(2, '0');

  return `${year}-${month}-${day}`;
}

export function formatDate(_date: string, verbose: boolean = true): string {
  try {
    const date_obj: Date = new Date(_date);
    const date: string[] = _date.split("-");
    const weekday: string = new Intl.DateTimeFormat(
      "en-US", 
      { weekday: "long", timeZone: "UTC" },
    ).format(date_obj);
    const day: string = DAYS[Number(date[2])-1];
    const month: string = MONTHS[Number(date[1])-1];
    const year: string = date[0];
    if (verbose) {
      return `${weekday} ${month} ${day} ${year}`;
    } else {
      return `${weekday.slice(0, 3)} ${month.slice(0, 3)} ${day} ${year}`;
    }
  } catch (error: any) {
    throw error;
  }
}
