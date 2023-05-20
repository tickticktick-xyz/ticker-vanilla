export interface TickerPrice {
    type: string;
    symbol: string;
    timestamp: string;
    usd_price: string;
    usd_24h_change: number;
    thumbnail_url: string;
}
export interface TickerNews {
    type: string;
    headline: string;
    preview: string;
    displayUrl: string;
    ctaUrl: string;
    ctaText: string;
    publisher: string;
    icon: string;
    publishDate: string;
}
export interface TickerItem {
    price?: TickerPrice;
    news?: TickerNews;
}
export interface TickerResult {
    elements: Array<TickerItem>;
}
export interface TickerTheme {
    foregroundColor?: string;
    backgroundColor?: string;
}
export declare function id(id: string): HTMLElement | null;
export declare function className(name: string): HTMLElement[];
export declare function result(): TickerResult | null;
export declare function ad(id: string): null | undefined;
export declare function theme(): TickerTheme | null;
export declare function style(ref: HTMLElement, props: {
    [prop in string]: any;
}, animated?: boolean): void;
