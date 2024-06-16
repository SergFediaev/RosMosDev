import styled from 'styled-components'
import { theme } from 'src/app/Theme.ts'

const Header = styled.header`
    background-color: ${theme.colors.background};
    padding: ${theme.dimensions.regularSpace};
`

export const S = {
    Header,
}
