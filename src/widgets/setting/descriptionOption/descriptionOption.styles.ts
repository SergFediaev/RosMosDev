import styled from 'styled-components'
import { theme } from 'src/app/styles/theme.ts'

const Option = styled.div`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    row-gap: ${theme.sizes.smallSpace};
    column-gap: ${theme.sizes.regularSpace};
`

const Description = styled.p`
    max-width: 70%;
`

export const S = {
    Option,
    Description,
}
