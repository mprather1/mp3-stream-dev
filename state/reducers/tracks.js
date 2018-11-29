import C from 'state/constants'

const initialState = {
  list: [],
  loaded: false,
  nowPlaying: null,
  playlist: [],
  playStatus: 'playing'
}

const tracks = (state = initialState, action) => {
  switch (action.type) {
    case C.TRACk_LIST_SUCCESS:
      return { ...state, list: action.payload, loaded: true }

    case C.SELECT_NOW_PLAYING:
      return { ...state, nowPlaying: action.payload, loaded: true }

    case C.ADD_TO_PLAYLIST:
      return { ...state, playlist: [ ...state.playlist, action.payload ]}

    case C.SET_PLAY_STATUS:
      return { ...state, playStatus: action.payload }
      
    default:
      return state
  }
}

export default tracks
