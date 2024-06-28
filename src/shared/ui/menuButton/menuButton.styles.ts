import styled from 'styled-components'
import { theme } from 'src/app/styles/theme.ts'
import { TIMINGS } from 'src/shared/const'

const MenuButton = styled.span`
    position: fixed;
    bottom: 0;
    right: 0;
    font-size: ${theme.sizes.largeFont};
    padding: ${theme.sizes.bigSpace} ${theme.sizes.smallSpace} ${theme.sizes.smallSpace} ${theme.sizes.bigSpace};
    opacity: ${theme.opacities.translucent};
    transition: ${TIMINGS.TRANSITION_TRANSFORM}s;
    font-family: ${theme.emojis.noto};
    background-color: ${theme.colors.backgroundOverlay};
    backdrop-filter: blur(${theme.blurs.regularBlur});
    border-top-left-radius: ${theme.roundings.sphere};
    z-index: ${theme.indexes.menu};

    &:hover {
        cursor: pointer;
        opacity: 1;
    }
`

export const S = {
    MenuButton,
}
