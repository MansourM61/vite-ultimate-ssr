import './style.css'
import * as mainCode from "./entries/main-page/code"
import * as htmlCode from "./entries/html-page/code"
import * as errorCode from "./entries/error-page/code"

const href = window.location.pathname.slice(1);

switch (href) {
    case "":
        mainCode.default()
        break;
    case "html-page":
        htmlCode.default()
        break;
    default:
        errorCode.default()
}
