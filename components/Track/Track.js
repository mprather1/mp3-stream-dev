/* eslint-env jest */

import { shallow } from 'enzyme'
import { compose } from 'redux'
import toJSON from 'enzyme-to-json'
import TrackList from 'components/TrackList'

const shallowExpect = compose(expect, toJSON, shallow)

describe('COMPONENT -> Track...', () => {
  it('Track', () => {
    expect()
  })
  // let clicker = shallow(<Content content='Hello World!' />)

  // it(`expect Content p text to equal "Hello World!"...`, () => {
  //   expect(clicker.find('p').text()).toBe('Hello World!')
  // })
})

// describe('COMPONENT -> TrackList - snapshot...', () => {
//   it('expect to render correct properties', () => {
//     shallowExpect(<TrackList tracks={{ list: ['track.mp3', 'track.wav'] }} />).toMatchSnapshot()
//   })
// })
