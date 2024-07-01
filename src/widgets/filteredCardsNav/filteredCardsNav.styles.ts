import styled from 'styled-components'
import { theme } from 'src/app/styles/theme.ts'

const FilteredCardsNav = styled.nav`
    display: flex;
    align-items: center;
    gap: ${theme.sizes.regularSpace};
`

const CardsQuantity = styled.span`
    font-size: ${theme.sizes.bigFont};
    font-weight: bold;

    & span:hover {
        cursor: help;
    }
`

export const S = {
    FilteredCardsNav,
    CardsQuantity,
}
