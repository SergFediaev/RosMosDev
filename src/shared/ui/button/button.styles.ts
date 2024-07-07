import styled, { css } from 'styled-components'
import { theme } from 'src/app/styles/theme.ts'
import { ButtonAlign } from 'src/shared/ui/button/button.types.ts'
import { VALUES } from 'src/shared/const'

// ToDo: Duplicated props types.
type Props = {
    align?: ButtonAlign
    isSecondary?: boolean
    isDisabled?: boolean
    isLoading?: boolean
    isWarning?: boolean
}

const Button = styled.button<Props>`
    background-color: ${({ isWarning }) =>
        isWarning ? theme.colors.backgroundWarning : theme.colors.backgroundAccent};
    border-radius: ${theme.roundings.card};
    padding: ${theme.sizes.mediumSpace};
    align-self: start;
    flex-grow: 1;
    font-size: inherit;

    ${({ align }) => {
        switch (align) {
            case VALUES.STRETCH:
                return css`
                    align-self: stretch;
                    text-align: center;
                `
            case VALUES.END:
                return css`
                    align-self: end;
                `
        }
    }}

    ${({ isSecondary }) =>
        isSecondary &&
        css`
            color: ${theme.colors.fontPrimary};
        `}
    
    &:hover {
        cursor: ${({ isDisabled, isLoading }) => {
            if (isDisabled) return 'not-allowed'
            if (isLoading) return 'wait'
            return 'pointer'
        }};
    }

    &:focus-visible {
        outline: ${theme.sizes.thinBorder} ${theme.colors.fontAccent} solid;
    }
`
// ToDo: Duplicated outline style.
export const S = {
    Button,
}
