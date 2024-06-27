import styled from 'styled-components'
import { theme } from 'src/app/styles/theme.ts'

const ErrorMessage = styled.p`
    background-color: ${theme.colors.errorMessageBackground};
    color: ${theme.colors.rootBackground};
    border: ${theme.colors.rootBackground} ${theme.sizes.regularBorder} dashed;
    align-self: start;
    font-weight: bold;
    padding: ${theme.sizes.smallSpace} ${theme.sizes.mediumSpace};
`

export const S = {
    ErrorMessage,
}
