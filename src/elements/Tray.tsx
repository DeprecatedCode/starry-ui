import * as React from 'react'
import styled from 'styled-components'

import { StyledPanel } from './StyledPanel'

export const StyledTray = styled(StyledPanel)`
  bottom: 0;
  left: 0;
  right: 0;
  height: 30%;
`

export const Tray = () => <StyledTray />
