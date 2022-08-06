import React from "react";
import App, { Container } from "next/app";
import Head from "next/head";
import { ThemeProvider } from "@hackclub/design-system";
import theme from "../components/style";

export default class extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <Container>
        <Head>
          <title>Schedule – Assemble</title>
          <link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@700&display=swap" rel="stylesheet"></link>
          {/* <style children={`body{background:${cx('darker')};}`} /> */}
          <style
            children={`body{background:${theme.cx(
              "#FF00000"
            )};background-image:${theme.gradient("#c1372c", "#c1372c")};}`}
          />
        </Head>
        <ThemeProvider theme={theme} webfonts>
          <Component {...pageProps} />
        </ThemeProvider>
      </Container>
    );
  }
}
