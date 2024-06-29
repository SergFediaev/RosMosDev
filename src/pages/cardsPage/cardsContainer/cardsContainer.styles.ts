import styled from 'styled-components'
import { theme } from 'src/app/styles/theme.ts'
import { appear } from 'src/shared/ui/animations/appear.ts'
import { TIMINGS } from 'src/shared/const'

const CardsContainer = styled.main`
    padding: ${theme.sizes.largeSpace};
    opacity: 0;
    animation: ${appear} ${TIMINGS.TRANSITION_TRANSFORM}s linear forwards;
`

export const S = {
    CardsContainer,
}
