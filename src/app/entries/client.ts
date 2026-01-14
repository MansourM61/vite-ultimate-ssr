import Alpine from "alpinejs";
import component from "alpinejs-component";
import htmx from "htmx.org";
import '@assets/css/style.css'

const href = window.location.pathname.slice(1);

let lib: {
    default(): void;
}
switch (href) {
    case "":
        lib = await import("@routes/main/code");
        break;
    case "html-page":
        lib = await import("@routes/html/code");
        break;
    case "jsx-page":
        lib = await import("@routes/jsx/code");
        break;
    case "alpine-page":
        lib = await import("@routes/alpine/code");
        break;
    case "htmx-page":
        lib = await import("@routes/htmx/code");
        break;
    default:
        lib = await import("@routes/error/code");
        break;
}
lib.default();

// `alpine-component` plugin does not have any type definition,
// Therefore the type definition file for it is added to:
//
// src/types/alpinejs-component.d.ts with the following content:
//
// declare module 'alpinejs-component' {
//     export default function _default(Alpine: any): void;
// }
//
// The solution is borrowed from:
// https://www.credera.com/en-us/insights/typescript-adding-custom-type-definitions-for-existing-libraries
Alpine.plugin(component);

window.Alpine = Alpine;
window.htmx = htmx;

Alpine.start();