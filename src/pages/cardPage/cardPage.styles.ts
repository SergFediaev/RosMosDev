import styled from 'styled-components'
import { theme } from 'src/app/styles/theme.ts'

const CardPage = styled.div`
    display: flex;
    justify-content: center;
    padding: ${theme.sizes.largeSpace};
`

const Card = styled.main`
    width: 100%;
    max-width: ${theme.sizes.viewCardWidth};
    background-color: ${theme.colors.backgroundSecondary};
    color: ${theme.colors.fontSecondary};
    font-size: ${theme.sizes.mediumFont};
    border-radius: ${theme.roundings.search};
    padding: ${theme.sizes.largeSpace};
    display: flex;
    flex-direction: column;
    gap: ${theme.sizes.bigSpace};
    box-shadow: ${theme.shadows.bottomLeft};
    perspective: ${theme.perspectives.card};
`

export const S = {
    CardPage,
    Card,
}
