import * as mainEntry from '@routes/$main/page'
import * as htmlEntry from '@routes/html/page'
import * as errorEntry from '@routes/error/page'
import * as jsxEntry from '@routes/jsx/page'
import * as alpineEntry from '@routes/alpine/page'
import * as htmxEntry from '@routes/htmx/page'

export function render(url: string) {
    switch (url) {
        case "":
            return mainEntry.default(url)
        case "html":
            return htmlEntry.default(url)
        case "jsx":
            return jsxEntry.default(url)
        case "alpine":
            return alpineEntry.default(url)
        case "htmx":
            return htmxEntry.default(url)
        case "error":
        default:
            return errorEntry.default(url)
    }
}
