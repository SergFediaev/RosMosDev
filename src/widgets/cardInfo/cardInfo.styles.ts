import styled from 'styled-components'
import { theme } from 'src/app/styles/theme.ts'

const CardInfo = styled.section<{ fontSize?: string }>`
    text-align: right;
    font-size: ${({ fontSize }) => fontSize || theme.sizes.defaultFont};

    & p,
    & a {
        font-family: ${theme.fonts.monospace};
    }

    & a {
        text-decoration-color: ${theme.colors.backgroundAccent};
    }
`

export const S = {
    CardInfo,
}
