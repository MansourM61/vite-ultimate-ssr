import * as mainEntry from '@routes/main/page'
import * as htmlEntry from '@routes/html/page'
import * as errorEntry from '@routes/error/page'
import * as jsxEntry from '@routes/jsx/page'

export function render(url: string) {
    switch (url) {
        case "":
            return mainEntry.default(url)
        case "html-page":
            return htmlEntry.default(url)
        case "jsx-page":
            return jsxEntry.default(url)
        default:
            return errorEntry.default(url)
    }
}
