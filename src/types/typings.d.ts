import Alpine from "alpinejs";

declare namespace JSX {
    interface IntrinsicElements extends Record<string, any> { }
};

declare global {
    interface Window {
        Alpine: typeof Alpine;
    }
}

declare 