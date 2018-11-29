/* eslint-env jest */

import request from 'supertest'

console.log = jest.fn()

describe('SERVER -> GET /api/tracks -> api.fetchById()..', () => {
  let ctx, app

  beforeAll(async () => {
    app = _server.listen()

    ctx = await request(app).get('/api/tracks')
  })

  afterAll(() => {
    app.close()
  })

  it('expect ctx.body to have length greater than 0...', async () => {
    expect(ctx.body.length).toBeGreaterThan(0)
  })
})
