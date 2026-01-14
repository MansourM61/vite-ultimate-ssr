export const API_NAME = "another-api"

export const API_TYPE = "GET"

export function handle(_req: unknown, res: Request, _next: unknown) {
    res.send({
        msg: "Another API message",
        status: "OK"
    })
}