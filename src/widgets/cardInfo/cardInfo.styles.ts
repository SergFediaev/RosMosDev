import styled from 'styled-components'
import { theme } from 'src/app/styles/theme.ts'

const CardInfo = styled.section<{ fontSize?: string }>`
    text-align: right;
    font-size: ${({ fontSize }) => fontSize || theme.sizes.defaultFont};

    & p {
        font-family: ${theme.fonts.monospace};
    }
`

export const S = {
    CardInfo,
}
