import styled from 'styled-components'
import { theme } from 'src/app/styles/theme.ts'

const Header = styled.header`
    background-color: ${theme.colors.background};
    padding: ${theme.dimensions.regularSpace};
    display: flex;
    gap: ${theme.dimensions.regularSpace};
    flex-wrap: wrap;
`

export const S = {
    Header,
}
