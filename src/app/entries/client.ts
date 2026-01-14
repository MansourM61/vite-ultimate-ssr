import Alpine from "alpinejs";
import component from "alpinejs-component";
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
    default:
        lib = await import("@routes/error/code");
        break;
}
lib.default();

// For `alpine-component` plugins to work in TS, create
// node_modules/@types/alpinejs-component/index.d.ts
// with the following content:
// export default function _default(Alpine: any): void;
// Every time the npm package manager is run, the file needs to be added!
Alpine.plugin(component);

window.Alpine = Alpine;

Alpine.start();
