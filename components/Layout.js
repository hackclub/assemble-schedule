import React from 'react'
import Head from 'next/head'
import theme from './style'

export default () => (
  <Head>
    <title>Schedule – Flagship Summit</title>
    <link
      href="https://fonts.googleapis.com/css?family=Reem+Kufi&display=swap"
      rel="stylesheet"
    />
    {/* <style children={`body{background:${cx('darker')};}`} /> */}
    <style
      children={`body{background:${theme.colors.primary};background-image:${theme.gradient(theme.colors.primary, theme.colors.primaryDark)};}`}
    />
  </Head>
)
