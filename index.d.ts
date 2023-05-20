export interface Theme {
    foregroundColor?: string;
    backgroundColor?: string;
}
export interface Props {
    container: string;
    tickerSlug: string;
    theme?: Theme;
    environment?: string;
}
export declare function start({ container, environment, tickerSlug, theme }: Props): void;
