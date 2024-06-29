import styled from 'styled-components'
import { theme } from 'src/app/styles/theme.ts'

const CardPage = styled.div`
    display: flex;
    justify-content: center;
    padding: ${theme.sizes.hugeSpace};
`

const Card = styled.main`
    max-width: ${theme.sizes.viewCardWidth};
    background-color: ${theme.colors.backgroundSecondary};
    color: ${theme.colors.fontSecondary};
    font-size: ${theme.sizes.mediumFont};
    border-radius: ${theme.roundings.search};
    padding: ${theme.sizes.largeSpace};
    display: flex;
    flex-direction: column;
    gap: ${theme.sizes.bigSpace};
`

export const S = {
    CardPage,
    Card,
}
