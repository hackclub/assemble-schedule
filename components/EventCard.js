import React, { Component } from "react";
import styled, { css } from "styled-components";
import { Heading, Box, Text, Icon } from "@hackclub/design-system";
// import {MDXProvider} from '@mdx-js/react'
// import MDX from '@mdx-js/runtime'
import MD from "react-markdown";
import theme from "./style";
import Modal from "./Modal";

// Pasted straight from https://css-tricks.com/snippets/javascript/lighten-darken-color/
function LightenDarkenColor(col, amt) {
  let usePound = false;
  if (col[0] == "#") {
    col = col.slice(1);
    usePound = true;
  }
  const num = parseInt(col, 16);
  const r = (num >> 16) + amt;
  if (r > 255) r = 255;
  else if (r < 0) r = 0;
  const b = ((num >> 8) & 0x00ff) + amt;
  if (b > 255) b = 255;
  else if (b < 0) b = 0;
  const g = (num & 0x0000ff) + amt;
  if (g > 255) g = 255;
  else if (g < 0) g = 0;
  return (usePound ? "#" : "") + (g | (b << 8) | (r << 16)).toString(16);
}

const Block = styled(Box)`
  background-color: ${theme.colors.blue};
  border-radius: ${theme.radius};
  position: absolute;
  left: 4em;
  right: 1em;
  top: ${(props) => theme.space[5] * (toSpecialTime(props.start) + 0.5)}px;
  height: ${(props) =>
    theme.space[5] * (toSpecialTime(props.end) - toSpecialTime(props.start)) -
    1}px;
  z-index: 2;
  ${(props) =>
    props.flavor == "closing" &&
    `background-color: ${theme.colors.red} !important;`}
  ${(props) =>
    props.flavor == "food" &&
    `background-color: ${theme.colors.orange} !important;`}
  
  ${(props) =>
    props.onClick === null
      ? null
      : css`
          cursor: pointer;
          transition-duration: 0.25s;
          &:hover {
            // background: ${LightenDarkenColor(theme.colors.blue, -10)};
            filter: darken(0.5);
          }
        `};

  ${Icon} {
    float: right;
  }
`;

const toSpecialTime = (hhmmap) => {
  // Needs to be in "9:15 am" format
  let hours = parseInt(hhmmap.split(":")[0]);
  const minutes = parseInt(hhmmap.split(":")[1].split(" ")[0]);
  const apm = hhmmap.split(" ")[1];
  if (apm == "pm" && hours != 12) {
    hours += 12;
  }

  let result = 0;
  result += hours * 60;
  result += minutes;

  result -= 7 * 60; // cal starts at 9 am
  result = result / 30; // each "tick" in the calendar is 30 minutes

  return result;
};

const components = {
  p: Text,
};

class EventCard extends Component {
  state = { active: false };

  toggle = () => {
    this.setState((state) => ({ active: !state.active }));
  };

  render() {
    const { active } = this.state;
    const { name, subtitle, start, end, summary, flavor } = this.props.event;
    return (
      <>
        {active && (
          <Modal toggle={this.toggle}>
            <Heading.h2>{name}</Heading.h2>
            <Text color="muted" mb={3}>
              {start}–{end}
            </Text>
            <MD source={summary} />
          </Modal>
        )}
        <Block
          color="white"
          p={1}
          start={start}
          end={end}
          flavor={flavor}
          onClick={typeof summary === "undefined" ? null : this.toggle}
        >
          {typeof summary !== "undefined" && (
            <Icon glyph="external" size={24} />
          )}
          <Text.span bold>{name}</Text.span>
          <Text fontSize={1}>{subtitle}</Text>
        </Block>
      </>
    );
  }
}

export default EventCard;
