import PropTypes from 'prop-types'
import Wrapper from './wrapper'
import theme from './theme'

const Playlist = ({ tracks }) =>
  <Wrapper>
    { tracks.playlist }
  </Wrapper>

Playlist.propTypes = {
  playlist: PropTypes.string.isRequired,
  fontSize: PropTypes.string,
  colors: PropTypes.array
}

export default Playlist
