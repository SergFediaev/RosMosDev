import styled, { css } from 'styled-components'
import { theme } from 'src/app/styles/theme.ts'
import { ButtonAlign } from 'src/shared/ui/button/button.types.ts'
import { VALUES } from 'src/shared/const'

// ToDo: Duplicated props types.
type Props = {
    align?: ButtonAlign
    isDisabled?: boolean
    isLoading?: boolean
    isWarning?: boolean
}

const Button = styled.div<Props>`
    background-color: ${({ isWarning }) => (isWarning ? theme.colors.error : theme.colors.primary)};
    border-radius: ${theme.roundings.card};
    padding: ${theme.sizes.mediumSpace};
    align-self: start;

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

    &:hover {
        cursor: ${({ isDisabled, isLoading }) => {
            if (isDisabled) return 'not-allowed'
            if (isLoading) return 'wait'
            return 'pointer'
        }};
    }
`

export const S = {
    Button,
}
