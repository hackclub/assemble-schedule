// Copied from https://github.com/hackclub/site/blob/cf7f30039de68c3a473b8dd5b191ce6d4386ca74/src/components/Modal.js

import React from 'react'
import styled, { keyframes } from 'styled-components'
import { Container, Box, Icon } from '@hackclub/design-system'
import theme from './style'

const modalKeyframes = keyframes`
  0% {
    transform: translate(-50%, -50%) scale(0);
  }
  85% {
    transform: translate(-50%, -50%) scale(1.025);
  }
  100% {
    transform: translate(-50%, -50%) scale(1);
  }
`

const Overlay = styled(Box)`
  z-index: 1024;
  background-color: rgba(255, 255, 255, 0.75);
  backdrop-filter: blur(6px);
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`

const ModalContainer = styled(Container).attrs({ bg: 'white' })`
  border-radius: ${theme.radii[2]};
  padding: ${theme.space[3]}px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.0625), 0 16px 32px rgba(0, 0, 0, 0.125) !important;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1100;
  ${theme.mediaQueries.md} {
    animation: ${modalKeyframes} ease-in 0.25s;
  }
  // Responsive size control
  width: ${props => props.w || props.width || '36rem'};
  max-width: 95vw;
  max-height: 95vh;
  margin: 0 auto;
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;
  > button:first-child {
    position: fixed;
    top: 0;
    right: 0;
  }
`

const ButtonReset = styled(Box.withComponent('button')).attrs({
  role: 'button',
  p: 3
})`
  appearance: none;
  background: transparent;
  border: 0;
  border-radius: ${theme.pill};
  cursor: pointer;
`

const CloseButton = props => (
  <ButtonReset aria-label="Close" color={theme.colors.muted} {...props}>
    <Icon glyph="view-close-small" size={24} />
  </ButtonReset>
)

export default ({ children, toggle }) => (
  <>
    <ModalContainer>
      <CloseButton onClick={toggle} />
      {children}
    </ModalContainer>
    <Overlay onClick={toggle} />
  </>
)
