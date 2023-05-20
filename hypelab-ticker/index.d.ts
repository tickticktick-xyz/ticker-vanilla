export interface Provider {
    name: string;
    version: string;
}
export interface TickerTheme {
    foregroundColor?: string;
    backgroundColor?: string;
}
export interface TickerProps {
    environment?: string;
    tickerSlug: string;
    theme?: TickerTheme;
}
export declare class TickerView {
    static provider: Provider;
    private props;
    private ref?;
    private rendered?;
    private layoutFragment?;
    private client;
    constructor(props: TickerProps);
    assign(ref: HTMLElement | null): void;
    private renderFragment;
    private derender;
}
