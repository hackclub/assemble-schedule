import React, { Component } from 'react'
import styled from 'styled-components'
import { Image, Section, Badge, Box, Text, Flex, Card, Container, Heading, Divider, theme } from '@hackclub/design-system'
import Layout from './components/Layout'
import Schedule from './components/Schedule'

class StatefulContent extends Component {
  state = { status: 'loading' }

  componentDidMount() {
    this.setState({
      status: 'success',
      schedule: window.schedule
    })
  }

  render() {
    switch(this.state.status) {
      case 'success':
        return <Schedule schedule={this.state.schedule} />
      case 'loading':
        return <p>loading</p>
      default:
        return <p>something broke</p>
    }
  }
}

const FlagshipHeading = styled(Heading.h1)`
  line-height: 1.125;
  font-family: "Reem Kufi";
  text-transform: uppercase;
  text-shadow: 0px 0px 16px rgba(0, 0, 0, 0.1);
`

export default () => (
  <Layout>
    <Container maxWidth={32}>
      <FlagshipHeading color="white" align="center" my={5} fontSize={[6, 8]}>
        Flagship<br />
        <strong><Text.span fontSize={[8, 9]}>Route</Text.span></strong>
      </FlagshipHeading>
      <StatefulContent />
    </Container>
    <Container maxWidth={32}>
      <Image src="ship.svg" />
    </Container>
    <Section bg="#5295D5" style={{borderBottom: '15em solid #5295D5'}}>
    </Section>
  </Layout>
)
