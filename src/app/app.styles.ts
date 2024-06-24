import styled from 'styled-components'
import { theme } from 'src/app/styles/theme.ts'

const App = styled.div<{ isMarkupEnabled: boolean }>`
    & * {
        border: ${({ isMarkupEnabled }) => isMarkupEnabled && `solid ${theme.sizes.thinBorder} ${theme.colors.debug}`};
    }
`

export const S = {
    App,
}
