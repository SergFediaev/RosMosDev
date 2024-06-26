import styled, { keyframes } from 'styled-components'
import { theme } from 'src/app/styles/theme.ts'
import { TIMINGS } from 'src/shared/const'

// ToDo: To common animations.
const appear = keyframes`
    to {
        opacity: 1;
    }
`

const Card = styled.article`
    padding: ${theme.sizes.regularSpace};
    background-color: ${theme.colors.primary};
    border-radius: ${theme.roundings.card};
    display: flex;
    flex-direction: column;
    gap: ${theme.sizes.regularSpace};
    margin-bottom: ${theme.sizes.largeSpace};
    break-inside: avoid;
    opacity: 0;
    animation: ${appear} ${TIMINGS.TRANSITION_TRANSFORM}s linear forwards;
`

export const S = {
    Card,
}
