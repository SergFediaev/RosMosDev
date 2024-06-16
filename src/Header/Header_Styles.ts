import styled from 'styled-components'
import { theme } from 'src/styles/Theme.ts'

const Header = styled.div`
    background-color: ${theme.colors.background};
    padding: ${theme.dimensions.space};
`

export const S = {
    Header,
}
