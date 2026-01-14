import Alpine from "alpinejs";
import htmx from "htmx.org";

declare global {
    namespace JSX {
        interface IntrinsicElements extends Record<string, any> { }
    }
}

declare global {
    interface Window {
        Alpine: typeof Alpine;
    }
}

declare global {
    interface Window {
        htmx: typeof htmx;
    }
}
