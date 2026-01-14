export const API_NAME = "test-api"

export const API_TYPE = "GET"

export function handle(_req: unknown, res: Request, _next: unknown) {
    res.send({
        msg: "Test API message",
        status: "OK"
    })
}