import render from "@assets/alpinejs-comps/alpinejs-comp.html?raw"
export const EP_NAME = "alpine-endpoint"

export const EP_TYPE = "GET"

export function handle(_req: unknown, res: Request, _next: unknown) {
    res.send(render)
}