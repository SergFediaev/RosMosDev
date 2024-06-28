import styled from 'styled-components'
import { theme } from 'src/app/styles/theme.ts'

const ErrorMessage = styled.p`
    background-color: ${theme.colors.backgroundErrorMessage};
    color: ${theme.colors.fontDefault};
    border: ${theme.colors.fontDefault} ${theme.sizes.regularBorder} dashed;
    align-self: start;
    font-weight: bold;
    padding: ${theme.sizes.smallSpace} ${theme.sizes.mediumSpace};
    overflow-wrap: break-word;
    word-break: break-word;
`

export const S = {
    ErrorMessage,
}
