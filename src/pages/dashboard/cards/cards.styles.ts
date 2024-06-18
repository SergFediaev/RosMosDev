import styled from 'styled-components'
import { theme } from 'src/app/styles/theme.ts'

const Cards = styled.section`
    display: flex;
    flex-wrap: wrap;
    gap: ${theme.sizes.largeSpace};
    align-items: start;
`

export const S = {
    Cards,
}
