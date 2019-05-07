export declare function oneDigitShort(date: number): string;
export declare type ReportDate = {
    year: string;
    month: string;
    day: string;
    date: string;
};
export declare function date(offset?: number, startMonday?: boolean): ReportDate;
