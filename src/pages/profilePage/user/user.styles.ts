import styled from 'styled-components'
import { theme } from 'src/app/styles/theme.ts'

const TitleWithPicture = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: ${theme.sizes.regularSpace};
    align-items: center;
`

export const S = {
    TitleWithPicture,
}
