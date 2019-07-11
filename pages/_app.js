import React from 'react'
import App, { Container } from 'next/app'
import { ThemeProvider } from '@hackclub/design-system'

export default class extends App {
  render () {
    const { Component, pageProps } = this.props
    return (
      <Container>
        <ThemeProvider>
          <Component {...pageProps} />
        </ThemeProvider>
      </Container>
    )
  }
}