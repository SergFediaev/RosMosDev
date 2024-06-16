import styled from 'styled-components'
import { theme } from 'src/app/Theme.ts'

const Cards = styled.section`
    display: flex;
    flex-wrap: wrap;
    gap: ${theme.dimensions.largeSpace};
    align-items: start;
`

export const S = {
    Cards,
}
