import styled from 'styled-components'
import { theme } from 'src/app/styles/theme.ts'

const Search = styled.div`
    max-width: 300px;
    border: ${theme.sizes.mediumBorder} ${theme.colors.font} solid;
    border-radius: ${theme.roundings.search};
    padding: ${theme.sizes.mediumSpace} ${theme.sizes.regularSpace};
    display: flex;
    align-items: center;
    flex-grow: 1;
    gap: ${theme.sizes.smallSpace};

    & input {
        text-overflow: ellipsis;
        font-size: 1rem;
        width: 100%;

        &::placeholder {
            opacity: ${theme.opacities.translucent};
            text-overflow: ellipsis;
        }
    }
`

export const S = {
    Search,
}
