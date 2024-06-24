import styled from 'styled-components'
import { theme } from 'src/app/styles/theme.ts'

const Logo = styled.abbr`
    font-size: ${theme.sizes.largeFont};
    font-weight: bold;

    &:hover {
        cursor: help;
    }
`

const Loading = styled.span`
    font-size: ${theme.sizes.largeFont};
    font-weight: bold;
`

export const S = {
    Logo,
    Loading,
}
