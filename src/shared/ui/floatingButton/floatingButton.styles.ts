import styled from 'styled-components'
import { theme } from 'src/app/styles/theme.ts'
import { TIMINGS } from 'src/shared/const'

const FloatingButton = styled.span`
    position: fixed;
    bottom: 0;
    font-size: ${theme.sizes.largeFont};
    margin: ${theme.sizes.smallSpace};
    opacity: ${theme.opacities.translucent};
    transition: ${TIMINGS.TRANSITION_TRANSFORM}s;
    font-family: ${theme.emojis.noto};

    &:hover {
        cursor: pointer;
        opacity: 1;
    }
`

export const S = {
    FloatingButton,
}
