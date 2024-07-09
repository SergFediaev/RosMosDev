import styled from 'styled-components'
import { theme } from 'src/app/styles/theme.ts'

const CreateCard = styled.main`
    width: 100%;
    max-width: ${theme.sizes.viewCardWidth};
    background-color: ${theme.colors.backgroundSecondary};
    color: ${theme.colors.fontSecondary};
    font-size: ${theme.sizes.mediumFont};
    border-radius: ${theme.roundings.card};
    padding: ${theme.sizes.largeSpace};
    display: flex;
    flex-direction: column;
    gap: ${theme.sizes.bigSpace};
    box-shadow: ${theme.shadows.bottomLeft};
`

export const S = {
    CreateCard,
}
