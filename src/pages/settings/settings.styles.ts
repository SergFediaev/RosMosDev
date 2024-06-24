import styled from 'styled-components'
import { theme } from 'src/app/styles/theme.ts'

const Settings = styled.div`
    padding: ${theme.sizes.largeSpace};
    column-width: ${theme.sizes.cardWidth};
    column-gap: ${theme.sizes.largeSpace};
    column-count: 3;
`

export const S = {
    Settings,
}
