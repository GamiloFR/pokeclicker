/// <reference path="knockout.d.ts"/>
 declare type LazyLoadOptions = {
    triggerMargin: string;
    threshold: number;
    pageSize: number;
};
declare function lazyLoad(element: HTMLElement, list: ObservableArray<unknown>, options?: Partial<LazyLoadOptions>): PureComputed<Array<unknown>>;
