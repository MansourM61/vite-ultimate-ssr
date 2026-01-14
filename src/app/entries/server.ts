import * as mainEntry from '@routes/main/page'
import * as htmlEntry from '@routes/html/page'
import * as errorEntry from '@routes/error/page'
import * as jsxEntry from '@routes/jsx/page'
import * as alpineEntry from '@routes/alpine/page'

export function render(url: string) {
    switch (url) {
        case "":
            return mainEntry.default(url)
        case "html-page":
            return htmlEntry.default(url)
        case "jsx-page":
            return jsxEntry.default(url)
        case "alpine-page":
            return alpineEntry.default(url)
        default:
            return errorEntry.default(url)
    }
}
