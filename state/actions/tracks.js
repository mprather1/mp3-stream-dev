import C from 'state/constants'

export default {
  listSuccess: payload => ({
    type: C.TRACk_LIST_SUCCESS,
    payload
  }),

  selectNowPlaying: payload => ({
    type: C.SELECT_NOW_PLAYING,
    payload
  }),
  
  addToPlaylist: payload => ({
    type: C.ADD_TO_PLAYLIST,
    payload
  })  
}
