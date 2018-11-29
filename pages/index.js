import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import Main from 'layouts/Main'
import Audio from 'components/Audio'
import TrackList from 'components/TrackList'
import Playlist from 'components/Playlist'
import actions from 'state/actions/tracks'
import tracksAPI from 'api/tracks'

class Index extends React.Component {
  static async getInitialProps ({ store }) {
    try {
      let tracks = await tracksAPI.list()

      store.dispatch(actions.listSuccess(tracks))
    } catch (err) {
      console.error(err)
    }

    return {
      title: 'Tracks!!'
    }
  }

  static propTypes = {
    tracks: PropTypes.object.isRequired,
    selectNowPlaying: PropTypes.func.isRequired
  }

  render () {
    const { tracks, selectNowPlaying, addToPlaylist } = this.props

    return (
      <Main title='tracks' host='shintech.ninja' favicon='/static/images/react.svg'>
        <TrackList tracks={tracks} addToPlaylist={addToPlaylist} selectNowPlaying={selectNowPlaying} />
          {(tracks.nowPlaying) ? <Audio tracks={tracks} selectNowPlaying={selectNowPlaying} media={`${process.env['BASE_URL']}/api/tracks/${tracks.nowPlaying}`} /> : null}
      </Main>
    )
  }
}

export default connect(
  state => state,
  dispatch => ({
    selectNowPlaying: value => {
      dispatch(actions.selectNowPlaying(value))
    },
    
    addToPlaylist: track => {
      dispatch(actions.addToPlaylist(track))
    }
  })
)(Index)
