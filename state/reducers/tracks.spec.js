/* eslint-env jest */

import deepFreeze from 'deep-freeze'
import reducer from 'state/reducers/tracks'
import C from 'state/constants'

describe('REDUX -> REDUCER - /tracks -> TRACk_LIST_SUCCESS...', () => {
  const state = {
    list: [],
    loaded: false,
    nowPlaying: null,
    playStatus: 'playing'
  }

  const payload = ['track.mp3', 'track.wav']

  const action = {
    type: C.TRACk_LIST_SUCCESS,
    payload
  }

  deepFreeze(action)
  deepFreeze(state)

  const results = reducer(state, action)
  console.log(results)
  it(`expect "list" to equal payload...`, () => {
    expect(results.list).toEqual(payload)
  })

  it(`expect results.loaded to be true...`, () => {
    expect(results.loaded).toBeTruthy()
  })
})

describe('REDUX -> REDUCER - /tracks -> SELECT_NOW_PLAYING...', () => {
  const state = {
    list: [],
    loaded: false,
    nowPlaying: null,
    playStatus: 'playing'
  }

  const payload = 'track.mp3'

  const action = {
    type: C.SELECT_NOW_PLAYING,
    payload
  }

  deepFreeze(action)
  deepFreeze(state)

  const results = reducer(state, action)

  it(`expect results.list to equal payload...`, () => {
    expect(results.nowPlaying).toEqual(payload)
  })
})

describe('REDUX -> REDUCER - /tracks -> ADD_TO_PLAYLIST...', () => {
  const state = {
    list: [],
    loaded: false,
    nowPlaying: null,
    playlist: [],
    playStatus: 'playing'
  }

  const payload = 'track.mp3'

  const action = {
    type: C.ADD_TO_PLAYLIST,
    payload
  }

  deepFreeze(action)
  deepFreeze(state)

  const results = reducer(state, action)

  it(`expect results.list to equal payload...`, () => {
    expect(results.playlist).toEqual([ payload ])
  })
})

describe('REDUX -> REDUCER - /tracks -> SET_PLAY_STATUS...', () => {
  const state = {
    list: [],
    loaded: false,
    nowPlaying: null,
    playlist: [],
    playStatus: 'playing'
  }

  const payload = 'stopped'

  const action = {
    type: C.SET_PLAY_STATUS,
    payload
  }

  deepFreeze(action)
  deepFreeze(state)

  const results = reducer(state, action)

  it(`expect "playStatus" to equal "stopped"...`, () => {
    expect(results.playStatus).toBe('stopped')
  })
})

