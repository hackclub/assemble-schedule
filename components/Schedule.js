import React from 'react'
import styled from 'styled-components'
import { Box, Card, Heading, Text, theme } from '@hackclub/design-system'
import schedule from './data.js'

import EventCard from './EventCard'

// Largely based on https://codyhouse.co/demo/schedule-template/index.html

const DayHeading = styled(Heading)`
  position: sticky;
  top: 1em;
  display: block;
  background: ${theme.cx('white')};
  width: 2.5em;
  z-index: 10;
`

const Ul = styled.ul`
  list-style: none;
  padding-left: 0;
`

const Li = styled.li`
  position: relative;
  height: ${theme.space[5]}px;

  &:before {
    content: '';
    position: absolute;
    left: 4em;
    top: 0;
    bottom: 0;
    width: 1px;
    background: ${theme.colors.smoke};
  }

  &:first-child:before {
    top: 50%;
  }

  &:last-child:before {
    bottom: 50%;
  }

  &:after {
    content: '';
    position: absolute;
    bottom: ${theme.space[5] / 2}px;
    left: 3.75em;
    right: 1em;
    height: 1px;
    background: ${theme.colors.smoke};
  }
`

const Chunk = ({ time }) => (
  <>
    <Li><Text.span color="muted" fontSize={1} style={{ verticalAlign: 'sub', display: 'inline-block' }}>{time}</Text.span></Li>
    {time && (
      <>
        <Chunk />
      </>
    )}
  </>
)

// const toHumanTime = (special) => {
//   // "special" time starts at 9 am, so we
//   return special * 30
// }

// const EventBlock = ({ name, shortName, start, end }) => (
//  <Block color="white" p={1} start={start} end={end}>
//    <Text.span bold>
//     {name}
//    </Text.span>
//    <Text>{shortName}</Text>
//   </Block>
// )

const lengthOfDay = (events) => {
  // const startTime = events.map(e => new Date(e.start)).sort[0]
  // const endTime = events.map(e => new Date(e.end).sort().pop())
  // const result = [startTime]
  // let cursor = startTime
  // while(cursor < endTime) {
  //   cursor + 
  // }
  return ['9:00 am', '10:00 am', '11:00 am', '12:00 pm', '1:00 pm', '2:00 pm', '3:00 pm', '4:00 pm', '5:00 pm', '6:00 pm', '7:00 pm', '8:00 pm', '9:00 pm', '10:00 pm']
}

export default ({ schedule }) => (
  <>
    {schedule.map((date) => (
      <Card bg="white" key={date.day.number} my={3} py={3} px={[2, 3]}>
        <DayHeading>{date.day.short}</DayHeading>
        <Ul style={{position: 'relative'}}>
          {date.events.map(e => (<EventCard key={e.name} event={e} />))}
        </Ul>
        <Ul>
          {lengthOfDay(date.events).map(d => (
            <Chunk time={d} key={d} />
          ))}
        </Ul>
      </Card>
    ))}
  </>
)