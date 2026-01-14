import { Request, Response, NextFunction } from "express";
import render from "@routes/htmx/comp"
export const EP_NAME = "htmx-endpoint"

export const EP_TYPE = "GET"

export function handle(_req: Request, res: Response, _next: NextFunction) {
    res.send(render())
}