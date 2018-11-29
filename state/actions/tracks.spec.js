/* eslint-env jest */

import { initStore } from 'state'
import actions from 'state/actions/tracks'

describe('REDUX -> ACTION - /tracks -> listSuccess()...', () => {
  const store = initStore({}, { isServer: true })

  const payload = ['ding.mp3', 'track.wav']

  beforeAll(() => {
    store.dispatch(actions.listSuccess(payload))
  })

  it('expect tracks.list to equal payload...', () => {
    expect(store.getState().tracks.list).toEqual(payload)
  })
})

describe('REDUX -> ACTION - /tracks -> selectNowPlaying()...', () => {
  const store = initStore({}, { isServer: true }
  )
  const payload = 'track.mp3'

  beforeAll(() => {
    store.dispatch(actions.selectNowPlaying(payload))
  })

  it('expect tracks.list to equal payload...', () => {
    expect(store.getState().tracks.nowPlaying).toEqual(payload)
  })
})

describe('REDUX -> ACTION - /tracks -> addToPlaylist()...', () => {
  const store = initStore({}, { isServer: true }
  )
  
  const payload = 'track.mp3'

  beforeAll(() => {
    store.dispatch(actions.addToPlaylist(payload))
  })

  it('expect tracks.list to equal payload...', () => {
    expect(store.getState().tracks.playlist).toEqual([payload])
  })
})
