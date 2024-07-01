import styled from 'styled-components'
import { theme } from 'src/app/styles/theme.ts'

const BackgroundOverlay = styled.div`
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: -1;
    background-color: ${theme.colors.backgroundOverlay};
`

export const S = {
    BackgroundOverlay,
}
