import { rest } from 'msw';
import { toDoResponse } from './mockResponse';

export const handlers = [
  rest.get("/todos", (req, res, ctx) => {
    console.log("🚀 ~ file: handlers.js:6 ~ rest.get ~ req:", req)
    return res(ctx.status(200), ctx.json(toDoResponse))
  }),
]
