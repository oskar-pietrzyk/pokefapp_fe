import { rest } from 'msw';

const happyResponse = rest.get('/api/v1/', (_req, res, ctx) => {
  return res(ctx.status(200), ctx.json([{'title': 'happy path'}]))
})

export const handlers = [happyResponse]
