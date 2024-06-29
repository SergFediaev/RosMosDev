import styled from 'styled-components'
import { theme } from 'src/app/styles/theme.ts'

const NavIcons = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: ${theme.sizes.regularSpace};
`

export const S = {
    NavIcons,
}
