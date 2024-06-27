import styled from 'styled-components'
import { theme } from 'src/app/styles/theme.ts'
import { TIMINGS } from 'src/shared/const'

const Search = styled.div`
    max-width: 300px;
    border: ${theme.sizes.mediumBorder} ${theme.colors.fontPrimary} solid;
    border-radius: ${theme.roundings.search};
    padding: ${theme.sizes.smallSpace} ${theme.sizes.regularSpace};
    display: flex;
    align-items: center;
    flex-grow: 1;
    gap: ${theme.sizes.smallSpace};
    transition: ${TIMINGS.TRANSITION_TRANSFORM}s ease-in-out;

    &:hover {
        border-color: ${theme.colors.fontAccent};
    }

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
