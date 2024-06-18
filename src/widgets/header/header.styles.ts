import styled from 'styled-components'
import { theme } from 'src/app/styles/theme.ts'

const Header = styled.header`
    position: sticky;
    top: 0;
    background-color: ${theme.colors.backgroundAccent};
    padding: ${theme.dimensions.regularSpace};
    display: flex;
    gap: ${theme.dimensions.regularSpace};
    flex-wrap: wrap;
    backdrop-filter: blur(${theme.blurs.regularBlur});
`

export const S = {
    Header,
}
