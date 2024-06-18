import styled from 'styled-components'
import { theme } from 'src/app/styles/theme.ts'

const Header = styled.header`
    position: sticky;
    top: 0;
    background-color: ${theme.colors.backgroundAccent};
    padding: ${theme.sizes.regularSpace} ${theme.sizes.largeSpace};
    display: flex;
    align-items: center;
    gap: ${theme.sizes.largeSpace};
    flex-wrap: wrap;
    backdrop-filter: blur(${theme.blurs.regularBlur});
`

export const S = {
    Header,
}
