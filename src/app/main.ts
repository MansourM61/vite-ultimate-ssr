import fs from 'node:fs/promises'
import express from 'express'
import { ViteDevServer } from 'vite'
import path from 'node:path'
import { fileURLToPath } from 'node:url';

// Constants
const isProduction = process.env.NODE_ENV === 'production'
const port = process.env.PORT || 5173
const base = process.env.BASE || '/'

// Cached production assets
const templateHtml = isProduction
    ? await fs.readFile('./dist/client/index.html', 'utf-8')
    : ''

const __dirname: string = path.dirname(fileURLToPath(import.meta.url));
const root: string = process.cwd();
const resolve = (_path: string) => path.resolve(__dirname, _path);

// Create http server
const app = express()

// Add Vite or respective production middlewares
/** @type {import('vite').ViteDevServer | undefined} */
let vite: ViteDevServer
if (!isProduction) {
    const { createServer } = await import('vite')
    vite = await createServer({
        server: { middlewareMode: true },
        appType: 'custom',
        base,
    })
    app.use(vite.middlewares)
} else {
    const compression = (await import('compression')).default
    const sirv = (await import('sirv')).default
    app.use(compression())
    app.use(base, sirv('./dist/client', { extensions: [] }))
}


// API end point
app.get("/api/:apiName", async (req, res) => {
    try {
        const appName = req.params.apiName;

        type API = {
            API_NAME: string,
            API_TYPE: "GET",
            handle: Function
        }

        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        const dummy = ((!isProduction) ? (await vite.ssrLoadModule('./src/apis/entry-api.ts')) : (await import('../../dist/api/entry-api.js'))) as { default: API[] }

        const getAPI = dummy.default.find(e => e.API_TYPE === "GET" && e.API_NAME === appName)

        if (getAPI === undefined) {
            throw new Error("API does not exist!")
        }

        return getAPI.handle(req, res)

    } catch (e) {
        if (e instanceof Error) {
            !isProduction && vite && vite.ssrFixStacktrace(e)
            console.log(e.stack)
            res.status(500).end(e.stack)
        } else {
            console.log(e)
            res.status(500).end('Unknown error')
        }
    }
})


// Serve HTML
app.use('*all', async (req, res) => {
    try {
        const url = req.originalUrl.replace(base, '')

        let template: string
        let render
        if (!isProduction) {
            // Always read fresh template in development
            template = await fs.readFile('./index.html', 'utf-8')
            template = await vite.transformIndexHtml(url, template)
            render = (await vite.ssrLoadModule('./src/server/entry-server.ts')).render
        } else {
            template = templateHtml

            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            render = (await import('../../dist/server/entry-server.js')).render
        }

        const rendered = await render(url)

        const html = template
            .replace(`<!--app-head-->`, rendered.head ?? '')
            .replace(`<!--app-html-->`, rendered.html ?? '')

        res.status(200).set({ 'Content-Type': 'text/html' }).send(html)
    } catch (e) {
        if (e instanceof Error) {
            !isProduction && vite && vite.ssrFixStacktrace(e)
            console.log(e.stack)
            res.status(500).end(e.stack)
        } else {
            console.log(e)
            res.status(500).end('Unknown error')
        }
    }
})

// Start http server
app.listen(port, () => {
    console.log(`Server started at http://localhost:${port}`)
})
