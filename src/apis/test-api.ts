import { Request, Response, NextFunction } from "express";

export const API_NAME = "test-api"

export const API_TYPE = "GET"

export function handle(_req: Request, res: Response, _next?: NextFunction) {
    res.send({
        msg: "Test API message",
        status: "OK"
    })
}