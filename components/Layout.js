import React from 'react'
import Head from 'next/head'
import { ThemeProvider, cx, theme } from '@hackclub/design-system'

export default ({ children }) => (
  <Head>
    <title>Schedule | Flagship Summit</title>
    <link href="https://fonts.googleapis.com/css?family=Reem+Kufi&display=swap" rel="stylesheet" />
    {/* <style children={`body{background:${cx('darker')};}`} /> */}
    <style children={`body{background:${theme.cx('#EEAA48')};background-image:${theme.gradient('#EEAA48','#F0984A')};}`} />
  </Head>
)
