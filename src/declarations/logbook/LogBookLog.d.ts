/// <reference path="./helpers.d.ts"/>
/// <reference path="./LogBookTypes.d.ts"/>
declare class LogBookLog {
    type: LogBookType;
    content: LogContent;
    date: number;
    description: string | number | import("knockout").PureComputed<string>;
    constructor(type?: LogBookType, content?: LogContent, date?: number);
}
