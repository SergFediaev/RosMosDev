import styled from 'styled-components'
import { theme } from 'src/app/styles/theme.ts'
import { TIMINGS } from 'src/shared/const'
import { appear } from 'src/shared/ui/animations/appear.ts'

const LogoAcronym = styled.abbr`
    font-size: ${theme.sizes.largeFont};
    font-weight: bold;
    opacity: 0;

    // ToDo: Move animation to theme.
    animation: ${appear} ${TIMINGS.TRANSITION_TRANSFORM}s linear forwards;

    &:hover {
        cursor: help;
    }
`

export const S = {
    LogoAcronym,
}
