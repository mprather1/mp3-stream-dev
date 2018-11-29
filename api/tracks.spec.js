/* eslint-env jest */

import tracksAPI from 'api/tracks'
import nock from 'nock'

const list = ['track.mp3', 'track.wav']

nock('http://localhost:8000')
  .get('/api/tracks')
  .reply(200, {
    list
  })

describe('API -> TRACkS -> api.list()...', () => {
  let json

  beforeAll(async () => {
    json = await tracksAPI.list()
  })

  it('expect tracks to have property "list"...', () => {
    expect(json).toHaveProperty('list')
  })

  it(`expect tracks.list to equal [${list}]`, () => {
    expect(json.list).toEqual(list)
  })
})
