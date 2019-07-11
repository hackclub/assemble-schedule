import React from 'react'
import { ThemeProvider, cx, theme } from '@hackclub/design-system'
import Helmet from 'react-helmet'
import DataLoader from './DataLoader'

export default ({ children }) => (
  <>
  <Helmet title="Schedule | Flagship summit" />
  <DataLoader />
  <ThemeProvider webfonts>
    <link href="https://fonts.googleapis.com/css?family=Reem+Kufi&display=swap" rel="stylesheet" />
    {/* <style children={`body{background:${cx('darker')};}`} /> */}
    <style children={`body{background:${theme.cx('#EEAA48')};background-image:${theme.gradient('#EEAA48','#F0984A')};}`} />
    {children}
  </ThemeProvider>
  </>
)
