# vite-ultimate-ssr

Vite-based SSR server built using express with support of TS, JSX, Alpine.js and HTMX

## Structure

The root directory has a `src` folder with the following subfolders.

### assets

All inline assets are added to `src/assets` folder and are accessed using `@assets` alias.

### lib

All utilities and libraries are kept here and are accessed using `@lib` alias.

### routes

The routes has subfolders which represents each route in the URL. Within each subfolder, There are two essential files:

1. `page.ts` default-exports `render` function that defines the HTML code generated at server side that will be inserted in the layout template.
2. `code.ts`: default-exports `execute` function. The function is executed at the client side.

### endpoints

The folder contains all API endpoint responses associated with **Alpine.js** and **HTMX**.
The code has the following structure:

```ts
export const EP_NAME = "endpoint-name"

export const EP_TYPE = "REQUEST METHOD"

export function handle(_req: unknown, res: Request, _next: unknown) {
    res.send( <rendered-html> )
}
```

1. `EP_NAME` defines the route to access the endpoint.
2. `EP_TYPE` defines the HTTP request (e.g. "GET", "POST", etc)
3. `<rendered-html>` is a function/expression that generates HTML code (at the server) in the form of a string.

### apis

The folder contains all other API endpoints.
The code has the following structure:

```ts
export const API_NAME = "endpoint-name"

export const API_TYPE = "REQUEST METHOD"

export function handle(_req: unknown, res: Request, _next: unknown) {
    res.send( <response> )
}
```

1. `API_NAME` defines the route to access the endpoint.
2. `API_TYPE` defines the HTTP request (e.g. "GET", "POST", etc)
3. `<response>` is a function/expression that generates a JSON object.

## Customisation

The server code is in `src/app/main.ts`. Not that much change is needed, unless API responses to `POST`, etc are required (at the moment only `GET` apis are handled).

After adding a route, the server-side HTML is registered in `src/app/entries/server.ts` while the client-side code is added in `src/app/entries/client.ts`.

The endpoints and APIs are added to `src/app/entries/endpoint.ts` and `src/app/entries/api.ts`, respectively.
