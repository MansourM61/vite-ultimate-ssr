import '@assets/css/style.css'
import * as mainCode from "@routes/main/code"
import * as htmlCode from "@routes/html/code"
import * as errorCode from "@routes/error/code"
import * as jsxCode from "@routes/jsx/code"

const href = window.location.pathname.slice(1);

switch (href) {
    case "":
        mainCode.default()
        break;
    case "html-page":
        htmlCode.default()
        break;
    case "jsx-page":
        jsxCode.default()
        break;
    default:
        errorCode.default()
}
