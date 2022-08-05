import React from "react";
import styled from "styled-components";
import { Box, Flex, Sheet, Heading, Text } from "@hackclub/design-system";
import theme from "./style";
import data from "./data.js";

import EventCard from "./EventCard";

const Base = styled(Box).attrs({ px: [2, 4], pb: [4, 5] })`
  display: grid;
  grid-gap: ${theme.space[3]}px;
  ${theme.mediaQueries.lg} {
    grid-gap: ${theme.space[4]}px;
    grid-template-columns: repeat(3, 1fr);
  }
`;

const DaySheet = styled(Sheet)`
  background: ${theme.colors.white};
  // @media (prefers-color-scheme: dark) {
  //   background: ${theme.colors.dark};
  // }
`;

// Largely based on https://codyhouse.co/demo/schedule-template/index.html

const DayHeading = styled(Heading.h2).attrs({ mt: 0 })`
  position: sticky;
  display: block;
  width: 2.5em;
  z-index: 10;
  background: ${theme.colors.white};
  // @media (prefers-color-scheme: dark) {
  //   background: ${theme.colors.dark};
  // }
`;

const Ul = styled.ul`
  list-style: none;
  padding-left: 0;
`;

const Li = styled.li`
  position: relative;
  height: ${theme.space[5]}px;

  &:before {
    content: "";
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
    content: "";
    position: absolute;
    bottom: ${theme.space[5] / 2}px;
    left: 3.75em;
    right: 1em;
    height: 1px;
    background: ${theme.colors.smoke};
  }
`;

const ChunkLabel = styled(Text.span).attrs({
  color: theme.colors.muted,
  fontSize: 1,
})`
  display: inline-block;
  vertical-align: sub;
`;
// 30-minute chunk of time
const Chunk = ({ time }) => (
  <>
    <Li>
      <ChunkLabel>{time}</ChunkLabel>
    </Li>
    {time && <Chunk />}
  </>
);

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

const lengthOfDay = [
  "7:00 am",
  "8:00 am",
  "9:00 am",
  "10:00 am",
  "11:00 am",
  "12:00 pm",
  "1:00 pm",
  "2:00 pm",
  "3:00 pm",
  "4:00 pm",
  "5:00 pm",
  "6:00 pm",
  "7:00 pm",
  "8:00 pm",
  "9:00 pm",
  "10:00 pm",
  "11:00 pm",
  "12:00 am",
];

export default ({ schedule = data }) => (
  <Base>
    {schedule.map((date) => (
      <DaySheet key={date.day.number} py={3} px={[2, 3]}>
        <DayHeading>{date.day.short}</DayHeading>
        <Ul style={{ position: "relative" }}>
          {date.events.map((e) => (
            <EventCard key={e.name + e.start} event={e} />
          ))}
        </Ul>
        <Ul>
          {lengthOfDay.map((d) => (
            <Chunk time={d} key={d} />
          ))}
        </Ul>
      </DaySheet>
    ))}
  </Base>
);
