import styled from 'styled-components'
import { theme } from 'src/app/styles/theme.ts'

const UserPicture = styled.img`
    max-width: ${theme.sizes.checkbox};
    max-height: ${theme.sizes.checkbox};
    border: ${theme.sizes.mediumBorder} ${theme.colors.fontPrimary} solid;
    border-radius: ${theme.roundings.circle};
    vertical-align: text-bottom;
    margin-left: ${theme.sizes.regularSpace};
`

export const S = {
    UserPicture,
}
