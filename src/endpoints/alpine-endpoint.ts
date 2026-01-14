import { Request, Response, NextFunction } from "express";
import render from "@assets/alpinejs-comps/alpinejs-comp.html?raw"
export const EP_NAME = "alpine-endpoint"

export const EP_TYPE = "GET"

export function handle(_req: Request, res: Response, _next: NextFunction) {
    res.send(render)
}