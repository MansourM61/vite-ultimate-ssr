import render from "@routes/htmx/comp"
export const EP_NAME = "htmx-endpoint"

export const EP_TYPE = "GET"

export function handle(_req: unknown, res: Request, _next: unknown) {
    res.send(render())
}