import styled from 'styled-components'
import { theme } from 'src/app/styles/theme.ts'

const Option = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`

const Description = styled.p`
    font-size: ${theme.sizes.bigFont};
`

export const S = {
    Option,
    Description,
}
