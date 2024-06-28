import styled from 'styled-components'
import { theme } from 'src/app/styles/theme.ts'

const IconsContainer = styled.div`
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
    gap: ${theme.sizes.regularSpace};
`

export const S = {
    IconsContainer,
}
