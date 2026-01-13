import * as mainEntry from './entries/main-page'
import * as htmlEntry from './entries/html-page'
import * as errorEntry from './entries/error-page'

export function render(url: string) {
    switch (url) {
        case "":
            return mainEntry.default(url)
        case "html-page":
            return htmlEntry.default(url)
        default:
            return errorEntry.default(url)
    }
}
