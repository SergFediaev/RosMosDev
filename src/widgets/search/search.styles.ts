import styled from 'styled-components'
import { theme } from 'src/app/styles/theme.ts'

const Search = styled.div`
    min-width: 0;
    max-width: 400px;
    border: ${theme.dimensions.mediumBorder} ${theme.colors.font} solid;
    border-radius: ${theme.roundings.search};
    padding: ${theme.dimensions.smallSpace} ${theme.dimensions.regularSpace};
    display: flex;
    align-items: center;
    flex-grow: 1;
    gap: ${theme.dimensions.smallSpace};

    & input {
        text-overflow: ellipsis;
        font-size: 1rem;
        min-width: 0;

        &::placeholder {
            opacity: ${theme.transparencies.half};
        }
    }
`

export const S = {
    Search,
}
