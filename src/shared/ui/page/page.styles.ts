import styled from 'styled-components'
import { theme } from 'src/app/styles/theme.ts'

const Page = styled.div`
    display: flex;
    justify-content: center;
    padding: ${theme.sizes.largeSpace};
`

export const S = {
    Page,
}
