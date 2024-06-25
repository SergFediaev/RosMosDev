import styled from 'styled-components'
import { theme } from 'src/app/styles/theme.ts'
import { TIMINGS } from 'src/shared/const'

const FloatingButton = styled.span`
    position: fixed;
    bottom: 0;
    font-size: ${theme.sizes.largeFont};
    padding: ${theme.sizes.bigSpace} ${theme.sizes.bigSpace} ${theme.sizes.smallSpace} ${theme.sizes.smallSpace};
    opacity: ${theme.opacities.translucent};
    transition: ${TIMINGS.TRANSITION_TRANSFORM}s;
    font-family: ${theme.emojis.noto};
    background-color: rgba(0, 0, 0, ${theme.opacities.translucent});
    backdrop-filter: blur(${theme.blurs.regularBlur});
    border-top-right-radius: ${theme.roundings.sphere};
    z-index: 100;

    &:hover {
        cursor: pointer;
        opacity: 1;
    }
`

export const S = {
    FloatingButton,
}
