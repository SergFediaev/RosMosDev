import styled from 'styled-components'
import { theme } from 'src/app/styles/theme.ts'

const Card = styled.article`
    padding: ${theme.dimensions.regularSpace};
    background-color: ${theme.colors.accent};
    border-radius: ${theme.roundings.card};
    max-width: 400px;
    display: flex;
    flex-direction: column;
    gap: ${theme.dimensions.regularSpace};
`

export const S = {
    Card,
}
