import styled from 'styled-components'
import { theme } from 'src/app/styles/theme.ts'
import { appear } from 'src/shared/ui/animations/appear.ts'
import { TIMINGS } from 'src/shared/const'

const Card = styled.article<{ highlightColor?: string }>`
    padding: ${theme.sizes.regularSpace};
    background-color: ${({ highlightColor }) => highlightColor || theme.colors.backgroundSecondary};
    color: ${theme.colors.fontSecondary};
    border-radius: ${theme.roundings.card};
    display: flex;
    flex-direction: column;
    gap: ${theme.sizes.regularSpace};
    margin-bottom: ${theme.sizes.largeSpace};
    break-inside: avoid;
    box-shadow: ${theme.shadows.bottomLeft};
`

const Content = styled.p`
    white-space: pre-wrap;
    opacity: 0;
    animation: ${appear} ${TIMINGS.TRANSITION_TRANSFORM}s linear forwards;
`

const Info = styled.p`
    text-align: right;
`

export const S = {
    Card,
    Content,
    Info,
}
