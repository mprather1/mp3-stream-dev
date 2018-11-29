import React from 'react'
import styled from 'styled-components'
import SVG from 'static/images/notes.svg'
import Wrapper from './wrapper'

const Track = ({ tracks, track, selectNowPlaying, addToPlaylist }) => 
  <Wrapper active={tracks.nowPlaying === track} key={track}>
    <a href='javascript:void(0);' onClick={ e => { e.preventDefault(); selectNowPlaying(track) } }>
        <div className='cover'><SVG /></div>
        <div className='info'>
          <div className='track-name'>{track}</div>
        </div>
    </a>
  </Wrapper>
  
export default Track
