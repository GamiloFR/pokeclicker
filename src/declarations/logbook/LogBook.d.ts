/// <reference path="knockout.d.ts"/>
/// <reference path="../DataStore/common/Feature.d.ts"/>
/// <reference path="./helpers.d.ts"/>
/// <reference path="./LogBookLog.d.ts"/>
/// <reference path="./LogBookTypes.d.ts"/>
declare type SavedLog = {
    type: LogBookType;
    content: LogContent;
    date: number;
};
declare class LogBook implements Feature {
    name: string;
    saveKey: string;
    defaults: Record<string, any>;
    filters: Record<string, Observable<boolean>>;
    logs: ObservableArray<LogBookLog>;
    filteredLogs: PureComputed<LogBookLog[]>;
    newLog(type: LogBookType, content: LogContent): void;
    fromJSON(json: any): void;
    toJSON(): {
        logs: Array<SavedLog>;
    };
    initialize(): void;
    canAccess(): boolean;
    update(): void;
}
 {};
