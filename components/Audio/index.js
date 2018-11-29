import PropTypes from 'prop-types'
import Wrapper from './wrapper'

export default class Player extends React.Component {
  componentWillReceiveProps () {
    const { media } = this.props

    if (media) {
      this.audio.load()
      this.audio.play()
    }
  }

  render () {
    const { media } = this.props

    return (
      <Wrapper>
        <audio controls autoPlay ref={props => this.audio = props}>
          <source src={media} />
        </audio>
      </Wrapper>
    )
  }
}
