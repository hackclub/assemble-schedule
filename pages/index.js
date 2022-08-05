import React, { Component } from "react";
import styled from "styled-components";
import {
  Image,
  Section,
  Badge,
  Box,
  Text,
  Flex,
  Card,
  Container,
  Heading,
  Divider,
  theme,
} from "@hackclub/design-system";
import Schedule from "../components/Schedule";

const FlagshipHeading = styled(Heading.h1)`
  line-height: 1.125;
  font-family: "Reem Kufi";
  text-transform: uppercase;
  text-shadow: 0px 0px 16px rgba(0, 0, 0, 0.1);
`;

export default () => (
  <>
    <Container
      maxWidth={32}
      style={{
        backgroundImage: "url(/red.png)",
      }}
    >
      <FlagshipHeading color="white" align="center" my={5} fontSize={[6, 8]}>
        Assemble Schedule
      </FlagshipHeading>
    </Container>
    <Schedule />
  </>
);
