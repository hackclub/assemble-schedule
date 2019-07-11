import React, { Component } from 'react'
import styled from 'styled-components'
import {Divider, Heading, Box, Text, theme} from '@hackclub/design-system'
import Modal from './Modal'

// Pasted straight from https://css-tricks.com/snippets/javascript/lighten-darken-color/
function LightenDarkenColor(col, amt) {
  let usePound = false
  if (col[0] == "#") {
      col = col.slice(1)
      usePound = true
  }
  const num = parseInt(col,16)
  const r = (num >> 16) + amt
  if (r > 255) r = 255
  else if  (r < 0) r = 0
  const b = ((num >> 8) & 0x00FF) + amt
  if (b > 255) b = 255
  else if  (b < 0) b = 0
  const g = (num & 0x0000FF) + amt
  if (g > 255) g = 255
  else if (g < 0) g = 0
  return (usePound?"#":"") + (g | (b << 8) | (r << 16)).toString(16)
}

const Block = styled(Box)`
  background: ${theme.cx('info')};
  border-radius: ${theme.radius};
  border: 1px solid ${theme.cx('white')};
  border-left: 0px;
  position: absolute;
  left: 4em;
  right: 1em;
  top: ${props => (theme.space[5] * (toSpecialTime(props.start) + 0.5))}px;
  height: ${props => (theme.space[5] * (toSpecialTime(props.end) - toSpecialTime(props.start)) - 1)}px;
  z-index: 2;
  cursor: pointer;
  transition-duration: 0.5s;
  ${props => (props.flavor == "closing" && `background: ${theme.cx('primary')} !important;`)}
  ${props => (props.flavor == "food" && `background: ${theme.cx('accent')} !important;`)}

  &:hover {
    background: ${LightenDarkenColor(theme.cx('info'), -10)};
  }
`

const toSpecialTime = (hhmmap) => {
  // Needs to be in "9:15 am" format
  let hours = parseInt(hhmmap.split(':')[0])
  const minutes = parseInt(hhmmap.split(':')[1].split(' ')[0])
  const apm = hhmmap.split(' ')[1]
  if (apm == 'pm' && hours != 12) {
    hours += 12
  }

  let result = 0
  result += (hours * 60)
  result += minutes

  result -= 9 * 60 // cal starts at 9 am
  result = result / 30 // each "tick" in the calendar is 30 minutes

  return result
}

const ModalBackground = Box 

class EventCard extends Component {
  state = { active: false }

  toggle = () => {
    const { active } = this.state
    this.setState({active: !active})
  }

  render() {
    const { active } = this.state
    const { name, subtitle, start, end, summary, flavor } = this.props.event
    return (
      <>
        {active && <Modal toggle={this.toggle}>
          <Heading>{name}</Heading>
          <Text color="muted">{start} - {end}</Text>
          <Divider />
          <Text>{summary}</Text>
        </Modal>}
        <Block color="white" p={1} start={start} end={end} flavor={flavor} onClick={this.toggle}>
          <Text.span bold>
          {name}
          </Text.span>
          <Text>{subtitle}</Text>
        </Block>
      </>
    )
  }
}

export default EventCard