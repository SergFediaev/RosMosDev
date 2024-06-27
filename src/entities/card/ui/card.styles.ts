import styled from 'styled-components'
import { theme } from 'src/app/styles/theme.ts'

const Card = styled.article`
    padding: ${theme.sizes.regularSpace};
    background-color: ${theme.colors.backgroundSecondary};
    color: ${theme.colors.fontSecondary};
    border-radius: ${theme.roundings.card};
    display: flex;
    flex-direction: column;
    gap: ${theme.sizes.regularSpace};
    margin-bottom: ${theme.sizes.largeSpace};
    break-inside: avoid;
    box-shadow: ${theme.shadows.bottomLeft};
`

export const S = {
    Card,
}
