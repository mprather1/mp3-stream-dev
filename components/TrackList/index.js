import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import Wrapper from './wrapper'
import SVG from 'static/images/notes.svg'
import Track from '../Track'

const TrackList = ({ tracks, selectNowPlaying, addToPlaylist }) => {
  return (
    <Wrapper>
      {tracks.list.map((track, n) =>
        <Track key={n} tracks={tracks} track={track} selectNowPlaying={selectNowPlaying} addToPlaylist={addToPlaylist} />
      )}
    </Wrapper>  
  )
  
}

TrackList.propTypes = {
  tracks: PropTypes.object.isRequired,
  selectNowPlaying: PropTypes.func
}

export default TrackList

