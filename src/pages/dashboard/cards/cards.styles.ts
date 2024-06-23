import styled from 'styled-components'
import { theme } from 'src/app/styles/theme.ts'

const Cards = styled.section`
    column-width: ${theme.sizes.cardWidth};
    column-gap: ${theme.sizes.largeSpace};
    column-count: 5;
`

export const S = {
    Cards,
}
