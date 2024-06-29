import styled from 'styled-components'
import { theme } from 'src/app/styles/theme.ts'

// ToDo: Universal icons container with justify-content props.
const CardIcons = styled.div`
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
    gap: ${theme.sizes.regularSpace};
`

export const S = {
    CardIcons,
}
