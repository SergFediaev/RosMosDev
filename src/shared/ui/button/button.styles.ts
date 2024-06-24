import styled from 'styled-components'
import { theme } from 'src/app/styles/theme.ts'

type Props = {
    isDisabled?: boolean
    isLoading?: boolean
    isWarning?: boolean
}

const Button = styled.div<Props>`
    background-color: ${({ isWarning }) => (isWarning ? theme.colors.error : theme.colors.primary)};
    border-radius: ${theme.roundings.card};
    padding: ${theme.sizes.regularSpace};

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
