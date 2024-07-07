import styled, { css } from 'styled-components'
import { theme } from 'src/app/styles/theme.ts'

const Container = styled.div`
    & textarea {
        field-sizing: content;
        resize: vertical;
    }
`

const Field = styled.input`
    width: 100%;
    border-radius: ${theme.roundings.card};
    font-size: inherit;
    background-color: ${theme.colors.backgroundAlternative};
    padding: ${theme.sizes.mediumSpace};
    border: ${theme.sizes.mediumBorder} ${theme.colors.backgroundAccent} solid;
    text-overflow: ellipsis;

    &:focus-visible {
        outline: ${theme.sizes.thinBorder} ${theme.colors.fontAccent} solid;
    }
    
    &::placeholder {
        opacity: ${theme.opacities.translucent};
    }

    ${({ disabled }) =>
        disabled &&
        css`
            border-color: ${theme.colors.fontSecondary};
            opacity: ${theme.opacities.translucent};

            &:hover {
                cursor: not-allowed;
            }
        `}
}
`

const Error = styled.p`
    margin-top: ${theme.sizes.smallSpace};
    color: ${theme.colors.backgroundWarning};
`

export const S = {
    Container,
    Field,
    Error,
}
